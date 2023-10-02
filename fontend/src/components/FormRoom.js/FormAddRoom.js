import React, { useState } from "react";
import "../../css/FormAddRoom.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormAddRoom = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="add-round" variant="primary" onClick={handleShow}>
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
          <form>
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
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    required=""
                    placeholder="Tên phòng"
                  />
                  <label htmlFor="name">
                    Tên phòng<b style={{ color: "red" }}>*</b>
                  </label>
                  <div className="invalid-feedback">
                    Vui lòng nhập tên phòng
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    data-format="numeric"
                    type="text"
                    className="form-control"
                    min="0"
                    name="deposit_contract_amount"
                    id="deposit_contract_amount"
                    placeholder="Giá cọc"
                    required=""
                  />
                  <label htmlFor="deposit_contract_amount">
                    Giá cọc (đ)<b style={{ color: "red" }}>*</b>
                  </label>
                  <div className="invalid-feedback">Vui lòng nhập giá Cọc</div>
                </div>
              </div>
              <div className="col-6" style={{ display: "block" }}>
                <div className="form-floating">
                  <input
                    data-format="numeric"
                    type="text"
                    value="15"
                    className="form-control"
                    min="0"
                    name="area"
                    id="area"
                    required=""
                    placeholder="Nhập diện tích"
                  />
                  <label htmlFor="area">
                    Diện tích (m2)
                    <b style={{ color: "red", fontSize: "1rem" }}>*</b>
                  </label>
                  <div className="invalid-feedback">
                    Vui lòng nhập diện tích
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-floating">
                  <input
                    data-format="numeric"
                    type="text"
                    className="form-control"
                    min="0"
                    name="room_amount"
                    id="room_amount"
                    placeholder="Giá thuê"
                    required=""
                  />
                  <label htmlFor="room_amount">
                    Giá thuê (đ)<b style={{ color: "red" }}>*</b>
                  </label>
                  <div className="invalid-feedback">Vui lòng nhập giá thuê</div>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <select
                    data-format="numeric"
                    id="circle_day"
                    name="circle_day"
                    className="form-select form-control"
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
                  <label htmlFor="circle_day">Ngày lập hóa đơn hàng tháng</label>
                </div>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormAddRoom;
