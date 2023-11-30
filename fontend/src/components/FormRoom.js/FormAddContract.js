import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { successfully, unsuccessful } from "../../redux/slices/notifySlice";
import { addCustomer } from "../../redux/slices/customerSlice";
import * as yup from "yup";
import { addContract } from "../../redux/slices/contractSlice";
import { updateAttrRoomById } from "../../redux/slices/roomSlice";
const schema = yup.object().shape({
  name: yup.string().required("Tên khách hàng trống"),
  phone: yup.string().required("Số điện thoại trống"),
  identity_number: yup.string().required("CMND/CCCD trống"),
  birthday: yup.string().required("Ngày sinh trống"),
  sex: yup.string(),
  address_detail: yup.string(),
  job: yup.string(),
  contract_time: yup.string(),
  date_join: yup.string().required("Ngày vào ở trống"),
  date_terminate: yup.string(),
  customer_count: yup.string().required("Số lượng thành viên trống"),
});
const FormAddContract = ({ room_id }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const handleClose = () => {
    resetForm();
    setShow(false);
  };
  const resetForm = () => {
    reset({
      name: "",
      phone: "",
      identity_number: "",
      birthday: "",
      sex: "1",
      address_detail: "",
      job: "",
      contract_time: "",
      date_join: "",
      date_terminate: "",
      customer_count: "",
    });
  };
  return (
    <>
      <div className="" variant="primary" onClick={handleShow}>
        <span
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title=""
          data-bs-original-title="Thêm phòng"
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
            className="feather feather-book"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          &nbsp;Hợp đồng mới
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
              const newContract = {
                id: room_id,
                id_contract: (Math.floor(Math.random() * 100) + 10).toString(),
                customer_id: data.name,
                customer_count: "1",
                room_amount: "3000000",
                deposit_contract_amount: "3000000",
                circle_month: "1",
                date_contract: data.date_join,
                date_join: data.date_join,
                date_terminate:
                  data.date_terminate === "" ? "" : data.date_terminate,
                status: "is_active",
              };
              console.log(typeof data.date_join);
              const newCustomer = {
                id: (Math.floor(Math.random() * 100) + 10).toString(),
                name: data.name,
                room: room_id,
                contract_representative: "true",
                phone: data.phone,
                birthday: data.birthday,
                gender: data.sex,
                address: data.address_detail,
                job: data.job,
                identity_number: data.identity_number,
                is_admin: "true",
                is_verify: "false",
                is_registry: "false",
              };
              dispatch(addCustomer({ customer: newCustomer }));
              dispatch(addContract({ contract: newContract }));
              dispatch(
                updateAttrRoomById({
                  id: room_id,
                  attr: "status",
                  value: "is_active",
                })
              );
              dispatch(
                updateAttrRoomById({
                  id: room_id,
                  attr: "date_join",
                  value: data.date_join,
                })
              );
              dispatch(
                updateAttrRoomById({
                  id: room_id,
                  attr: "date_terminate",
                  value: data.date_terminate === "" ? "" : data.date_terminate,
                })
              );
              dispatch(
                updateAttrRoomById({ id: room_id, attr: "customers", value: 1 })
              );
              dispatch(
                updateAttrRoomById({
                  id: room_id,
                  attr: "deposit_contract_amount",
                  value: "3000000",
                })
              );
              setShow(false);
              resetForm();
              dispatch(successfully({ message: "Thêm phòng thành công!" }));
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
              <div className="col-md-12">
                <div class="form-floating">
                  <select
                    data-format="numeric"
                    id="contract_time"
                    name="contract_time"
                    class="form-select form-control"
                    {...register("contract_time")}
                  >
                    <option value="0">Tùy chỉnh</option>
                    <option value="1">1 tháng</option>
                    <option value="2">2 tháng</option>
                    <option value="3">3 tháng</option>
                    <option value="4">4 tháng</option>
                    <option value="5">5 tháng</option>
                    <option value="6">6 tháng</option>
                    <option value="7">7 tháng</option>
                    <option value="8">8 tháng</option>
                    <option value="9">9 tháng</option>
                    <option value="10">10 tháng</option>
                    <option value="11">11 tháng</option>
                    <option value="12">1 năm</option>
                    <option value="18">1 năm, 6 tháng</option>
                    <option value="24">2 năm</option>
                    <option value="32">3 năm</option>
                    <option value="48">4 năm</option>
                    <option value="60">5 năm</option>
                  </select>
                  <label for="contract_time">Thời hạn hợp đồng</label>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control date-flat-picker flatpickr-input"
                      name="date_join"
                      id="date_join"
                      data-format="date"
                      placeholder="Ngày vào ở"
                      pattern="\d{1,2}\/\d{1,2}\/\d{4}"
                      required=""
                      {...register("date_join")}
                    />
                    <label for="date_join">Ngày vào ở</label>
                  </div>
                  <label class="input-group-text" for="date_join">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-calendar"
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
                {errors.date_join && (
                  <small className="text-danger m-1 p-0">
                    {errors.date_join.message}
                  </small>
                )}
                <div class="invalid-feedback">
                  Vui lòng nhập ngày vào ở và ngày không đúng định dạng. Vui
                  lòng kiểm tra lại
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control date-flat-picker flatpickr-input"
                      name="date_terminate"
                      id="date_terminate"
                      placeholder="Ngày kết thúc hợp đồng"
                      data-format="date"
                      pattern="\d{1,2}\/\d{1,2}\/\d{4}"
                      {...register("date_terminate")}
                    />
                    <label for="date_terminate">Kết thúc hợp đồng</label>
                  </div>
                  <label class="input-group-text" for="date_terminate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-calendar"
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
                {errors.date_terminate && (
                  <small className="text-danger m-1 p-0">
                    {errors.date_terminate.message}
                  </small>
                )}
                <div class="invalid-feedback">
                  Ngày không đúng định dạng. Vui lòng kiểm tra lại
                </div>
              </div>
              <div class="col-12">
                <div class="title-item-small">
                  <b>Thông tin khách thuê:</b>
                  <i class="des">
                    Nhập thông tin khách thuê. Các thông tin ngày sẽ xuất hiện
                    trong văn bản hợp đồng
                  </i>
                </div>
              </div>
              <div class="col-12 mt-2" style={{ display: "block" }}>
                <div class="form-floating">
                  <input
                    data-format="numeric"
                    type="text"
                    class="form-control"
                    value="1"
                    name="customer_count"
                    min="0"
                    id="customer_count"
                    placeholder="Nhập số người ở"
                    required=""
                    {...register("customer_count")}
                  />
                  <label for="customer_count">Số lượng thành viên</label>
                  <div class="invalid-feedback">
                    Vui lòng nhập số lượng thành viên
                  </div>
                </div>
                {errors.customer_count && (
                  <small className="text-danger m-1 p-0">
                    {errors.customer_count.message}
                  </small>
                )}
              </div>
              <div className="col-6 mt-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="customer_name"
                    oninput="this.value = __format.capitalizeFirstStr(this.value)"
                    placeholder="Nhập tên khách thuê"
                    required=""
                    {...register("name")}
                  />
                  <label htmlFor="customer_name">Tên khách thuê</label>
                  <div className="invalid-feedback">
                    Vui lòng nhập tên khách thuê
                  </div>
                </div>
                {errors.name && (
                  <small className="text-danger m-1 p-0">
                    {errors.name.message}
                  </small>
                )}
              </div>
              <div className="col-6 mt-2">
                <div className="form-floating">
                  <input
                    data-format="stringNumber"
                    type="text"
                    className="form-control"
                    name="phone"
                    id="customer_phone"
                    placeholder="Nhập sdt khách thuê"
                    {...register("phone")}
                  />
                  <input
                    data-format="stringNumber"
                    type="hidden"
                    className="form-control"
                    name="old_phone"
                    placeholder="Nhập sdt người ở"
                  />
                  <label htmlFor="customer_phone">
                    Số điện thoại khách thuê
                  </label>
                  <div className="invalid-feedback">
                    Vui lòng nhập sdt khách thuê
                  </div>
                </div>
                {errors.phone && (
                  <small className="text-danger m-1 p-0">
                    {errors.phone.message}
                  </small>
                )}
              </div>
              <div className="col-12 mt-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="identity_number"
                    id="identity_number"
                    placeholder="Nhập số CMND/CCCD"
                    {...register("identity_number")}
                  />
                  <label htmlFor="identity_number">CMND/CCCD</label>
                  <div className="invalid-feedback">
                    Vui nhập số CMND/CCCD của khách thuê
                  </div>
                </div>
                {errors.identity_number && (
                  <small className="text-danger m-1 p-0">
                    {errors.identity_number.message}
                  </small>
                )}
              </div>
              <div className="col-6">
                <div className="input-group">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control date-flat-picker flatpickr-input"
                      name="birthday"
                      id="birthday"
                      data-format="date"
                      placeholder="Ngày vào ở"
                      pattern="\d{1,2}\/\d{1,2}\/\d{4}"
                      {...register("birthday")}
                    />
                    <label htmlFor="birthday">Ngày sinh</label>
                  </div>
                  <label className="input-group-text" htmlFor="birthday">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                {errors.birthday && (
                  <small className="text-danger m-1 p-0">
                    {errors.birthday.message}
                  </small>
                )}
                <div className="invalid-feedback">
                  Vui lòng nhập ngày sinh và phải đúng định dạng
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <select
                    id="customer_sex"
                    name="sex"
                    className="form-select form-control"
                    required=""
                    {...register("sex")}
                  >
                    <option value="1" selected="">
                      Nam
                    </option>
                    <option value="0">Nữ</option>
                    <option value="-1">Chưa xác định</option>
                  </select>
                  <label htmlFor="customer_sex">Giới tính</label>
                </div>
                {errors.sex && (
                  <small className="text-danger m-1 p-0">
                    {errors.sex.message}
                  </small>
                )}
              </div>
              <div className="col-12 mt-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control address_detail"
                    name="address_detail"
                    placeholder="ví dụ: 122 - Đường Nguyễn Duy Trinh"
                    required=""
                    {...register("address_detail")}
                  />
                  <label htmlFor="address_detail">
                    Địa chỉ chi tiết. Ví dụ: 122 - Đường Nguyễn Duy Trinh
                  </label>
                  <div className="invalid-feedback">
                    Vui lòng nhập địa chỉ chi tiết
                  </div>
                </div>
              </div>
              <div className="col-12 mt-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="job"
                    id="customer_job"
                    placeholder="Nhập công việc khách thuê"
                    {...register("job")}
                  />
                  <label htmlFor="customer_job">Nhập công việc</label>
                  <div className="invalid-feedback">
                    Vui lòng nhập công việc của khách thuê
                  </div>
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
            Thêm mới
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormAddContract;
