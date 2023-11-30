import React, { useState } from "react";
import "../../css/FormAddRoom.css";
import "../../css/FormAddRoom.css";
import "../../css/form.css";
import Modal from "react-bootstrap/Modal";
import { successfully, unsuccessful } from "../../redux/slices/notifySlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice } from "../../redux/slices/invoiceSlice";

import * as yup from "yup";
const schema = yup.object().shape({
  date: yup
    .string()
    .required("Ngày lập hoá đơn trống")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Định dạng ngày không đúng."
    ),
  deadline_bill_date: yup
    .string()
    .required("Hạn đóng tiền trống")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Định dạng ngày không đúng."
    ),
  month_amount: yup.string().default("1"),
  day_amount: yup.string().default("0"),
  deposit_contract_amount: yup.string(),
});
const FormMakeAnInvoice = ({ room_id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm({ resolver: yupResolver(schema) });
  const handleClose = () => {
    setShow(false);
    resetForm();
  };
  const handleShow = () => setShow(true);
  const watch_month_amount = watch("month_amount");
  const watch_day_amount = watch("day_amount");
  const watch_deposit_contract_amount = watch("deposit_contract_amount");
  const resetForm = () => {
    reset({
      date: "",
      deadline_bill_date: "",
      month_amount: "1",
      day_amount: "0",
      deposit_contract_amount: "0",
    });
  };
  const index = useSelector((state) => state.index.data);
  const services = useSelector((state) => state.services.data);
  const price_water = Object.values(services).find((obj) => obj.unit === "Khối")
  const price_electricity = Object.values(services).find((obj) => obj.unit === "Kwh")
  const indexOfRoomSearch = (index_room) => {
    var part_max = index_room[0].create_date.split("/");
    let max = new Date(part_max[2], part_max[1] - 1, part_max[0]);
    let index_return = 0;
    for (let i = 1; i < index_room.length; i++) {
      var part = index_room[i].create_date.split("/");
      let date = new Date(part[2], part[1] - 1, part[0]);
      if (date > max) {
        max = date;
        index_return = i;
      }
    }
    return index_room[index_return];
  };
  let index_room = Object.values(index).filter((obj) => obj.id === room_id);
  const index_room_need = indexOfRoomSearch(index_room);
  let diff = Object.values(index).filter((obj) => obj.id === room_id);
  diff = diff.filter((obj) => obj.create_date !== index_room_need.create_date);
  let older = indexOfRoomSearch(diff);
  return (
    <>
      <div className="" variant="primary" onClick={handleShow}>
        <span
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title=""
          data-bs-original-title="Thêm hoá đơn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-dollar-sign"
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          &nbsp;Lập hoá đơn
        </span>
      </div>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
        animation={false}
        centered
      >
        <Modal.Header closeButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-dollar-sign"
            style={{ marginRight: "15px" }}
          >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <Modal.Title style={{ fontSize: "1.25rem" }}>
            {"Lập hoá đơn cho phòng " + room_id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="addinvoice-form"
            onSubmit={handleSubmit((data) => {
              const newInvoice = {
                id: room_id,
                id_invoice: Math.floor(Math.random() * 100) + 10,
                username: "", // tên người lập hoá đơn
                status: "new",
                id_count: [index_room_need.create_date, older.create_date],
                deposit_contract_amount: watch_deposit_contract_amount === undefined? 0: watch_deposit_contract_amount,
                created_date: data.date,
                paid_date: data.deadline_bill_date,
                amount_room: {
                  number_of_months: data.month_amount,
                  odd_number_of_days: data.day_amount,
                  total: `${
                    3000000 * parseInt(data.month_amount) +
                    (3000000 / 28) * parseInt(data.day_amount)
                  }`,
                },
                electricity_bill: {
                  // lay tu co sơ du lieu
                  old_unit: older.index_electricity,
                  new_unit: index_room_need.index_electricity,
                  total: `${(parseInt(index_room_need.index_electricity) - parseInt(older.index_electricity))*parseInt(price_electricity.price)}`,
                },
                water_bill: {
                  // lay tu co so du lieu
                  old_unit: older.index_water,
                  new_unit: index_room_need.index_water,
                  total: `${(parseInt(index_room_need.index_water) - parseInt(older.index_water))*parseInt(price_water.price)}`,
                },
                service_bill: {
                  // thanh toan theo thang
                  total: "0",
                  month: "0",
                },
              };
              console.log(newInvoice)
              dispatch(addInvoice({ invoice: newInvoice }));
              setShow(false);
              dispatch(successfully({ message: "Thêm phòng thành công!" }));
              resetForm();
            })}
          >
            <div className="row g-2">
              <div className="title-item-small">
                <b>Thời gian</b>
                <i className="des">Nhập theo định dạng dd/mm/yyyy.</i>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control date-flat-picker flatpickr-input"
                      name="date"
                      data-format="date"
                      id="date-add-bill"
                      placeholder="Ngày lập hóa đơn"
                      pattern="\d{1,2}\/\d{1,2}\/\d{4}"
                      required=""
                      {...register("date")}
                    />
                    <label htmlFor="date-add-bill">Ngày lập hóa đơn</label>
                  </div>
                  <label className="input-group-text" htmlFor="date-add-bill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </label>
                </div>
                <div className="invalid-feedback">
                  Vui lòng nhập Ngày lập hóa đơn
                </div>
                {errors.date && (
                  <small className="text-danger m-1 p-0">
                    {errors.date.message}
                  </small>
                )}
              </div>
              <div className="col-6">
                <div className="input-group">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control date-flat-picker flatpickr-input"
                      name="deadline_bill_date"
                      id="deadline_bill_date"
                      data-format="date"
                      placeholder="Nhập hạn đóng tiền cho phiếu thu(hóa đơn)"
                      pattern="\d{1,2}\/\d{1,2}\/\d{4}"
                      required=""
                      {...register("deadline_bill_date")}
                    />
                    <label htmlFor="deadline_bill_date">Hạn đóng tiền</label>
                  </div>
                  <label
                    className="input-group-text"
                    htmlFor="deadline_bill_date"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </label>
                </div>
                <div className="invalid-feedback">
                  Vui lòng nhập hạn đóng tiền hóa đơn
                </div>
                {errors.deadline_bill_date && (
                  <small className="text-danger m-1 p-0">
                    {errors.deadline_bill_date.message}
                  </small>
                )}
              </div>
              <div
                className="col-12 room-amount-layout"
                style={{ display: "block" }}
              >
                <div className="title-item-small">
                  <b>Tiền thuê:</b>
                  <i className="des">Nhập số tháng và số ngày lẻ (nếu có).</i>
                </div>
                <div className="row g-2">
                  <div className="col-6 mt-2">
                    <div className="form-floating none-spin">
                      <input
                        data-format="numeric"
                        type="number"
                        min="1"
                        className="form-control"
                        name="month_amount"
                        id="month_amount"
                        placeholder="Nhập số tháng"
                        defaultValue="1"
                        {...register("month_amount")}
                      />
                      <label htmlFor="month_amount">Số tháng</label>
                      <div className="invalid-feedback">
                        Vui lòng nhập số tháng tính tiền
                      </div>
                    </div>
                  </div>

                  <div className="col-6 mt-2">
                    <div className="form-floating none-spin">
                      <input
                        data-format="numeric"
                        type="number"
                        min="0"
                        className="form-control"
                        name="day_amount"
                        id="day_amount"
                        defaultValue="0"
                        placeholder="Nhập số tháng"
                        {...register("day_amount")}
                      />
                      <label htmlFor="day_amount">Số ngày lẻ</label>
                      <div className="invalid-feedback">
                        Vui lòng nhập số ngày lẻ
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="label-feature">
                    <div className="row g-0">
                      <div className="col-6">
                        <div>
                          <span>Tính tiền phòng</span>
                        </div>
                        <b className="bill-month-amount-text">
                          {watch_month_amount === undefined
                            ? 1
                            : watch_month_amount}{" "}
                          tháng
                        </b>
                        ,{" "}
                        <b className="bill-day-amount-text">
                          {watch_day_amount === undefined
                            ? 0
                            : watch_day_amount}{" "}
                          ngày
                        </b>
                        &nbsp;x{" "}
                        <b className="bill-room-amount">3.000.000&nbsp;₫</b>
                      </div>
                      <div className="col-6 text-end">
                        <div>
                          <span>Thành tiền</span>
                        </div>
                        <b className="total-price bill-total-room">
                          {watch_month_amount === undefined
                            ? new Intl.NumberFormat("de-DE").format(3000000)
                            : new Intl.NumberFormat("de-DE").format(
                                parseInt(watch_month_amount) * 3000000 +
                                  (3000000 / 30) * parseInt(watch_day_amount)
                              )}
                          &nbsp;₫
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 deposit-layout"
                style={{ display: "block" }}
              >
                <div className="title-item-small">
                  <b className="title_deposit_contract_type">Thu tiền cọc</b>
                  <i className="des des_deposit_contract_type">
                    Thu tiền cọc nếu có phát sinh
                  </i>
                </div>
                <div className="col-12 mt-2">
                  <div className="form-floating">
                    <input
                      data-format="numeric"
                      type="text"
                      min="0"
                      className="form-control"
                      name="deposit_contract_amount"
                      id="deposit_contract_amount"
                      defaultValue="0"
                      placeholder="Số tiền cọc thu hoặc trả lại"
                      {...register("deposit_contract_amount")}
                    />
                    <label htmlFor="deposit_contract_amount">
                      Số tiền cọc(đ)
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="col-12 price-item-layout"
                style={{ display: "block" }}
              >
                <div className="title-item-small">
                  <b>Tiền dịch vụ:</b>
                  <i className="des">Tính tiền dịch vụ khách xài</i>
                </div>

                <div className="room-price-item price-items-checkout-layout">
                  <div className="item">
                    <div className="item-check-name">
                      <label htmlFor="bill_check_price_item_10499">
                        <b>Tiền điện</b>{" "}
                        <p>
                          Giá: <b>{new Intl.NumberFormat("de-DE").format(price_electricity.price)}&nbsp;₫</b> / KWh
                        </p>{" "}
                      </label>
                    </div>
                    <div className="item-value">
                      <div className="input-group mb-2">
                        <div
                          className="form-control"
                          min="0"
                          id="bill_price_item_10499_0"
                          type="number"
                          placeholder="Nhập số cũ"
                          value="0"
                          name="price_items[10499][value][0]"
                        >
                          {index_room_need.index_electricity}
                        </div>
                        <label
                          className="input-group-text"
                          htmlFor="bill_price_item_10499_0"
                        >
                          Chỉ số hiện tại
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-check-name">
                      <label htmlFor="bill_check_price_item_10500">
                        <b>Tiền nước</b>{" "}
                        <p>
                          Giá: <b>{new Intl.NumberFormat("de-DE").format(price_water.price)}&nbsp;₫</b> / Khối
                        </p>{" "}
                      </label>
                    </div>
                    <div className="item-value">
                      <div className="input-group mb-2">
                        <div
                          className="form-control"
                          min="0"
                          id="bill_price_item_10500_0"
                          type="number"
                          placeholder="Nhập số cũ"
                          value="0"
                          name="price_items[10500][value][0]"
                        >
                          {index_room_need.index_water}
                        </div>
                        <label
                          className="input-group-text"
                          htmlFor="bill_price_item_10500_0"
                        >
                          Chỉ số hiện tại
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="label-feature">
                  <div className="row g-0">
                    <div className="col-6">
                      <div>
                        <span>Tính tiền dịch vụ</span>
                      </div>
                      <b>
                        <span className="bill-count-price-item">2</span> dịch vụ
                      </b>
                    </div>
                    <div className="col-6 text-end">
                      <div>
                        <span>Thành tiền</span>
                      </div>
                      <b className="total-price bill-total-price-items">
                        {new Intl.NumberFormat("de-DE").format(
                          parseInt(index_room_need.index_electricity) * 1700 +
                            parseInt(index_room_need.index_water) * 18000 -
                            (parseInt(older.index_electricity) * 1700 +
                              parseInt(older.index_water) * 18000)
                        )}
                        &nbsp;₫
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="col-6">
            <div>
              <span>Tổng cộng hóa đơn: </span>
            </div>
            <b
              className="show-total total-price bill-total"
              style={{ color: "#3c9e47" }}
            >
              {
              new Intl.NumberFormat("de-DE").format(parseInt(watch_month_amount === undefined? 1: watch_month_amount) * 3000000 +
                (3000000 / 30) * parseInt(watch_day_amount=== undefined? 0: watch_day_amount) +
                (parseInt(index_room_need.index_electricity) * 1700 +
                  parseInt(index_room_need.index_water) * 18000 -
                  (parseInt(older.index_electricity) * 1700 +
                    parseInt(older.index_water) * 18000)) + parseInt(watch_deposit_contract_amount === undefined ? 0 : watch_deposit_contract_amount))}
              &nbsp;₫
            </b>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={handleClose}
          >
            Đóng
          </button>
          <button
            type="submit"
            form="addinvoice-form"
            id="submit-room"
            className="btn btn-success"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Thêm mới
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormMakeAnInvoice;
