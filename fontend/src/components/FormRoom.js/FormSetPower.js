import React, { useState } from "react";
import "../../css/Service.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addIndex } from "../../redux/slices/indexSlice";
import { successfully, unsuccessful } from "../../redux/slices/notifySlice";

const FormSetPower = ({ room_id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setwater(0);
    setelectricity(0);
  };
  const handleSave = () => {
    let today = new Date();
    let formattedDate =
      ("0" + today.getDate()).slice(-2) +
      "/" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "/" +
      today.getFullYear();
    const newpower = {
      id: room_id,
      index_electricity: electricity,
      index_water: water,
      create_date: formattedDate.toString(),
    };
    dispatch(addIndex({ index: newpower }));
    setShow(false);
    dispatch(successfully({ message: "Thêm phòng thành công!" }));
  };
  const dispatch = useDispatch();
  const handleShow = () => setShow(true);
  const [water, setwater] = useState(0);
  const [electricity, setelectricity] = useState(0);
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
            className="feather feather-settings"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          &nbsp; Cài đặt điện nước
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
            className="feather feather-inbox"
            style={{ marginRight: "15px" }}
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          </svg>
          <Modal.Title style={{ fontSize: "1.25rem" }}>
            {" "}
            {"Cài đặt điện nước của phòng " + room_id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="list-price-item-render price-items-checkout-layout">
              <div className="item">
                <div className="item-check-name">
                  <label>
                    <b>Tiền điện</b>{" "}
                    <p>
                      Giá: <b>1.700&nbsp;₫</b> / KWh
                    </p>{" "}
                  </label>
                </div>
                <div className="item-value">
                  <div className="input-group mb-2  ">
                    <input
                      className="form-control"
                      min="0"
                      type="number"
                      placeholder="Nhập số cũ"
                      value={electricity}
                      onChange={(event) => setelectricity(event.target.value)}
                    />
                    <label className="input-group-text">
                      Chỉ số
                      <br />
                      hiện tại
                    </label>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-check-name">
                  <label>
                    <b>Tiền nước</b>{" "}
                    <p>
                      Giá: <b>18.000&nbsp;₫</b> / Khối
                    </p>{" "}
                  </label>
                </div>
                <div className="item-value">
                  <div className="input-group mb-2  ">
                    <input
                      className="form-control"
                      min="0"
                      type="number"
                      placeholder="Nhập số cũ"
                      value={water}
                      onChange={(event) => setwater(event.target.value)}
                    />
                    <label className="input-group-text">
                      Chỉ số
                      <br />
                      hiện tại
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormSetPower;
