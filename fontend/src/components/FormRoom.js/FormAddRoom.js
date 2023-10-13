import React, { useState } from "react";
import "../../css/FormAddRoom.css";
import "../../css/form.css";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { successfully, unsuccessful } from "../../redux/slices/notifySlice";
import { addRoom } from "../../redux/slices/roomSlice";
import * as yup from "yup";
import { useDispatch } from "react-redux";
const schema = yup.object().shape({
  name: yup.string().required("Tên phòng trống!"),
  deposit_contract_amount: yup.string().required("Giá cọc trống!"),
  area: yup.string().required(),
  room_amount: yup.string().required("Giá phòng trống!"),
  circle_day: yup.string(),
});
const FormAddRoom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    resetForm();
    setShow(false);
  };
  const resetForm = () => {
    reset({
      name: "",
      deposit_contract_amount: "",
      area: "",
      room_amount: "",
      circle_day: "",
    });
  };
  // const getDateNow = () => {
  //   const today = new Date();
  //   const day = String(today.getDate()).padStart(2, "0");
  //   const month = String(today.getMonth() + 1).padStart(2, "0");
  //   const year = String(today.getFullYear()).slice(-2);
  //   return `${day}/${month}/${year}`;
  // };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className="add-round custom_btn"
        variant="primary"
        onClick={handleShow}
      >
        <span
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title=""
          data-bs-original-title="Thêm phòng"
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
        </span>
      </Button>

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
            className="feather feather-box"
            style={{ marginRight: "15px" }}
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <Modal.Title style={{ fontSize: "1.25rem" }}>Thêm phòng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit((data) => {
              const newRoom = {
                id: data.name,
                status: ["empty"],
                active_status: ["chưa thể thu"],
                area: data.area,
                room_amount: data.room_amount,
                deposit_contract_amount: data.deposit_contract_amount,
                customers: "0",
                circle_day: data.circle_day,
                circle_month: "1",
                date_join: "",
                date_terminate: "",
                maximun_member: "3",
              };
              dispatch(addRoom({room: newRoom}))
              setShow(false);
              resetForm();
              dispatch(successfully({ message: "Thêm phòng thành công!" }));
              console.log(data);
            })}
            id="addroom-form"
          >
            <div className="row g-2">
              <div className="col-12">
                <div className="title-item-small">
                  <b>Thông tin phòng</b>
                  <i className="des">Nhập các thông tin cơ bản của phòng</i>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control none-spin"
                    name="name"
                    id="name"
                    required=""
                    placeholder="Tên phòng"
                    {...register("name")}
                  />
                  <label htmlFor="name">
                    Số phòng<b style={{ color: "red" }}>*</b>
                  </label>
                  <div className="invalid-feedback">
                    Vui lòng nhập tên phòng
                  </div>
                </div>
                {errors.name && (
                  <small className="text-danger m-1 p-0">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    data-format="numeric"
                    type="number"
                    className="form-control none-spin"
                    min="0"
                    name="deposit_contract_amount"
                    id="deposit_contract_amount"
                    placeholder="Giá cọc"
                    required=""
                    {...register("deposit_contract_amount")}
                  />
                  <label htmlFor="deposit_contract_amount">
                    Giá cọc (đ)<b style={{ color: "red" }}>*</b>
                  </label>
                  <div className="invalid-feedback">Vui lòng nhập giá Cọc</div>
                </div>
                {errors.deposit_contract_amount && (
                  <small className="text-danger m-1 p-0">
                    {errors.deposit_contract_amount.message}
                  </small>
                )}
              </div>
              <div className="col-6" style={{ display: "block" }}>
                <div className="form-floating">
                  <input
                    data-format="numeric"
                    type="number"
                    value="15"
                    className="form-control none-spin"
                    min="0"
                    name="area"
                    id="area"
                    required=""
                    placeholder="Nhập diện tích"
                    {...register("area")}
                  />
                  <label htmlFor="area">
                    Diện tích (m2)
                    <b style={{ color: "red", fontSize: "1rem" }}>*</b>
                  </label>
                  <div className="invalid-feedback">
                    Vui lòng nhập diện tích
                  </div>
                </div>
                {errors.area && (
                  <small className="text-danger m-1 p-0">
                    {errors.area.message}
                  </small>
                )}
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    data-format="numeric"
                    type="number"
                    className="form-control none-spin"
                    min="0"
                    name="room_amount"
                    id="room_amount"
                    placeholder="Giá thuê"
                    required=""
                    {...register("room_amount")}
                  />
                  <label htmlFor="room_amount">
                    Giá thuê (đ)<b style={{ color: "red" }}>*</b>
                  </label>
                  <div className="invalid-feedback">Vui lòng nhập giá thuê</div>
                </div>
                {errors.room_amount && (
                  <small className="text-danger m-1 p-0">
                    {errors.room_amount.message}
                  </small>
                )}
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <select
                    data-format="numeric"
                    id="circle_day"
                    name="circle_day"
                    className="form-select form-control"
                    {...register("circle_day")}
                  >
                    {Array(31)
                      .fill()
                      .map((_, index) => {
                        const day = index + 1;
                        return (
                          <option key={day} value={day}>
                            Ngày {day}
                          </option>
                        );
                      })}
                  </select>
                  <label htmlFor="circle_day">
                    Ngày lập hóa đơn hàng tháng
                  </label>
                </div>
                {errors.circle_day && (
                  <small className="text-danger m-1 p-0">
                    {errors.circle_day.message}
                  </small>
                )}
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <select
                    data-format="numeric"
                    id="priority"
                    name="priority"
                    className="form-select form-control"
                  >
                    <option value="0"> Tất cả</option>
                    <option value="1"> Ưu tiên nữ</option>
                    <option value="2"> Ưu tiên nam</option>
                    <option value="3"> Ưu tiên gia đình</option>
                  </select>
                  <label htmlFor="priority">Ưu tiên người thuê</label>
                </div>
              </div>
              <div className="col-12">
                <div className="title-item-small">
                  <b>Dịch vụ sử dụng</b>
                  <i className="des">
                    Các dịch vụ sử dụng mặc định: điện, nước, wifi.
                  </i>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
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
            form="addroom-form"
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
            Thêm phòng
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormAddRoom;
