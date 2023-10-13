import React from "react";
import "../../css/Notify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { initNotify } from "../../redux/slices/notifySlice";

const Notify = () => {
  const notify = useSelector((state) => state.notify.success);
  const show = useSelector((state) => state.notify.show);
  const message = useSelector((state) => state.notify.message);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(initNotify());
  };
  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={show}
        animation={false}
        centered
        className="custom"
      >
        <Modal.Body>
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <div
              className={notify === true ? "swal2-icon swal2-success swal2-icon-show" : "d-none"}
              style={{ display: "flex" }}
            >
              <div
                className="swal2-success-circular-line-left"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              ></div>
              <span className="swal2-success-line-tip"></span>{" "}
              <span className="swal2-success-line-long"></span>
              <div className="swal2-success-ring"></div>{" "}
              <div
                className="swal2-success-fix"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              ></div>
              <div
                className="swal2-success-circular-line-right"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              ></div>
            </div>
            <div
              className={notify === false ? "swal2-icon swal2-error swal2-icon-show" : "d-none"}
              style={{display: "flex"}}
            >
              <span className="swal2-x-mark">
                <span className="swal2-x-mark-line-left"></span>
                <span className="swal2-x-mark-line-right"></span>
              </span>
            </div>
            <h2
              className="swal2-title"
              id="swal2-title"
              style={{ display: "block" }}
            >
              {notify === true ? "Thành công!" : "Thông báo!"}
            </h2>
            <div
              className="swal2-html-container"
              id="swal2-html-container"
              style={{ display: "block", margin: "5px 0px 25px" }}
            >
              {message}
            </div>
            <Button
              style={{
                display: "block",
                border: "none",
                margin: "auto",
                padding: "0.625em 2em",
                fontWeight: "500",
                borderRadius: "0.25em",
                width: "110px",
              }}
              className={notify === true ? "btn-success" : "btn-primary"}
              onClick={handleClose}
            >
              Đóng
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Notify;
