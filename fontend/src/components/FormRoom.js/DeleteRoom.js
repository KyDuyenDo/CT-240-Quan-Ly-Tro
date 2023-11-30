// xoá phòng, xoá hoá đơn, xoá khách thuê
import React, { useState } from "react";
import "../../css/DeleteRoom.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoomById } from "../../redux/slices/roomSlice";
import { successfully, unsuccessful } from "../../redux/slices/notifySlice";
import { deleteInvoiceById } from "../../redux/slices/invoiceSlice";
import { deleteCustomerById } from "../../redux/slices/customerSlice";

const DeleteRoom = ({type, id}) => {
  const [show, setShow] = useState(false);
  const contract = useSelector((state) => state.contracts.data)
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProcess = () => {
    if(type === "room"){
      const index = contract.filter((item) => item.id === id && item.customer_id !== "")
      if(index.length !== 0){
        dispatch(unsuccessful({message: "Phòng có người ở"}))
      }else{
        dispatch(deleteRoomById({id: id}))
        dispatch(successfully({message: "xoá phòng thành công"}))
      }
    }else if(type === "invoice"){
      dispatch((deleteInvoiceById({id: id})))
    }else{
      const index = contract.filter((item) => item.customer_id === id)
      if(index.length !== 0){
        dispatch(unsuccessful({message: "Khách thuê đại diện hợp đồng"}))
      }else{
        dispatch(deleteCustomerById({id: id}))
      }
    }
    setShow(false)
  }
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
            className="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          &nbsp;Xoá {type === "room"? "phòng": (type === "invoice"? "hoá đơn": "khách thuê")}
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
        <Modal.Body>
          <div className="" style={{ padding: "30px" }}>
            <div
              className="swal2-icon swal2-warning swal2-icon-show"
              style={{ display: "flex" }}
            >
              <div className="swal2-icon-content">!</div>
            </div>
            <h2
              className="swal2-title"
              id="swal2-title"
              style={{ display: "block", textAlign: "center", color:"#595959" }}
            >
              Thông báo!
            </h2>
            <div
              className="swal2-html-container"
              id="swal2-html-container"
              style={{
                display: "block",
                textAlign: "center",
                fontSize: "1.125em",
                fontWeight: "400",
              }}
            >
              Bạn có chắc chắn muốn xóa {type === "room"? "phòng": (type === "invoice"? "hoá đơn": "khách thuê")}
            </div>
            <div
              className="swal2-actions"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <Button
                type="button"
                className="swal2-confirm swal2-styled swal2-default-outline"
                aria-label=""
                onClick={handleProcess}
                style={{
                  display: "block",
                  border: "none",
                  margin: "0.3125em",
                  padding: "0.625em 2em",
                  fontWeight: "500",
                  borderRadius: "0.25em",
                  width: "219px",
                }}
              >
                Vâng! tôi muốn xóa
              </Button>
              <Button
                type="button"
                className="swal2-cancel swal2-styled swal2-default-outline btn-danger"
                aria-label=""
                onClick={handleClose}
                style={{
                  display: "block",
                  border: "none",
                  margin: "0.3125em",
                  padding: "0.625em 2em",
                  fontWeight: "500",
                  borderRadius: "0.25em",
                  width: "255px",
                }}
              >
                Không! Tôi không muốn
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteRoom;
