import React, { useState } from "react";
import "../../css/FormAddRoom.css";
import "../../css/FormAddRoom.css";
import "../../css/form.css";
import Modal from "react-bootstrap/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
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
  contract_deposit_contract_amount: yup.string(),
  addition_bill: yup.string(),
  addition_value: yup.string(),
  addition_reason: yup.string()
});
const FormMakeAnInvoice = ({ room_id }) => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch
  } = useForm({ resolver: yupResolver(schema) });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const watch_month_amount = watch("month_amount")
  const watch_day_amount = watch("day_amount")
  const resetForm = () => {
    reset({
      date: "",
      deadline_bill_date: "",
      month_amount: "",
      day_amount: "",
      deposit_contract_amount: "",
      contract_deposit_contract_amount:"",
      addition_bill:"",
      addition_value:"",
      addition_reason:""
    });
  };
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
              // dispatch(addRoom({ room: newRoom }));
              // setShow(false);
              resetForm();
              // dispatch(successfully({ message: "Thêm phòng thành công!" }));
              console.log(data);
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
                        min="0"
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
                        <b className="bill-month-amount-text">{watch_month_amount === undefined? 1: watch_month_amount} tháng</b>,{" "}
                        <b className="bill-day-amount-text">{watch_day_amount === undefined? 0: watch_day_amount} ngày</b>&nbsp;x{" "}
                        <b className="bill-room-amount">3.000.000&nbsp;₫</b>
                      </div>
                      <div className="col-6 text-end">
                        <div>
                          <span>Thành tiền</span>
                        </div>
                        <b className="total-price bill-total-room">
                          {watch_month_amount === undefined ? new Intl.NumberFormat("de-DE").format(3000000):new Intl.NumberFormat("de-DE").format(parseInt(watch_month_amount)*3000000 + (3000000/30)*parseInt(watch_day_amount))}&nbsp;₫
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
                          Giá: <b>1.700&nbsp;₫</b> / KWh
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
                        ></div>
                        <label
                          className="input-group-text"
                          htmlFor="bill_price_item_10499_0"
                        >
                          Tổng
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-check-name">
                      <label htmlFor="bill_check_price_item_10500">
                        <b>Tiền nước</b>{" "}
                        <p>
                          Giá: <b>18.000&nbsp;₫</b> / Khối
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
                        ></div>
                        <label
                          className="input-group-text"
                          htmlFor="bill_price_item_10500_0"
                        >
                          Tổng
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
                        2.000&nbsp;₫
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="title-item-small">
                  <b>Cộng thêm / Giảm trừ:</b>
                  <i className="des">
                    Thường dành cho các trường hợp đặc biệt. Ví dụ cộng thêm
                    ngày tết, giảm trừ covid...
                  </i>
                </div>
              </div>
              <div className="col-12">
                <div className="d-none">
                  <input
                    data-format="numeric"
                    className="form-check-input"
                    type="radio"
                    name="addition_a_bill"
                    id="addition_bill"
                    value="0"
                    {...register("addition_bill")}
                    checked={true}
                  />
                  <label className="form-check-label">Cộng thêm</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    data-format="numeric"
                    className="form-check-input"
                    type="radio"
                    name="addition_a_bill"
                    id="addition_bill"
                    value="1"
                    {...register("addition_bill")}
                  />
                  <label className="form-check-label" htmlFor="addition_a_bill">
                    Cộng thêm
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    data-format="numeric"
                    className="form-check-input"
                    type="radio"
                    name="addition_b_bill"
                    id="addition_bill"
                    value="-1"
                    {...register("addition_bill")}
                  />
                  <label className="form-check-label" htmlFor="addition_b_bill">
                    Giảm trừ
                  </label>
                </div>
              </div>
              <div className="col-12 mt-2">
                <div className="form-floating">
                  <input
                    data-format="numeric"
                    type="text"
                    min="0"
                    className="form-control"
                    name="addition_value"
                    id="addition_value"
                    placeholder="Số tiền cộng thêm hoặc giảm trừ"
                    {...register("addition_value")}
                  />
                  <label htmlFor="addition_value">Số tiền (đ)</label>
                </div>
              </div>
              <div className="col-12 mt-2">
                <div className="form-floating">
                  <textarea
                    type="text"
                    rows="10"
                    style={{ minHeight: "70px" }}
                    className="form-control"
                    name="addition_reason"
                    id="addition_reason"
                    placeholder="Nhập lý do"
                    {...register("addition_reason")}
                  ></textarea>
                  <label htmlFor="addition_reason">Lý do</label>
                </div>
              </div>
              <div className="col-12">
                <div className="label-feature">
                  <div className="row g-0">
                    <div className="col-6">
                      <div>
                        <span className="bill-addition-text">Cộng thêm</span>
                      </div>
                      <div>
                        Lý do:{" "}
                        <i className="bill-addition-reason-text">
                          Chưa có lý do
                        </i>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <div>
                        <span>Thành tiền</span>
                      </div>
                      <b className="total-price bill-total-addition">
                        0&nbsp;₫
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
              6.002.000&nbsp;₫
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
