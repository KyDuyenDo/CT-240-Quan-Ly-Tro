import React, { useState } from "react";
import "../../css/ListCustomer.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
const ListCustomer = ({ room_id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const customers = useSelector((state) => state.customers.data);
  const contract = useSelector((state) => state.contracts.data);
  const findCon = contract.find((item) => item.id === room_id);
  const customerOfRoom = customers.filter(
    (customer) =>
      customer.room === room_id &&  customer.is_admin === "true"
  );
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
            className="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          &nbsp;Danh sách khác thuê
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
            className="feather feather-users"
            style={{ marginRight: "15px" }}
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <Modal.Title style={{ fontSize: "1.25rem" }}>
            {"Danh sách khách thuê - phòng " + room_id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {customerOfRoom.length === 0 ? (
            <h5>Không có thành viên nào</h5>
          ) : (
            customerOfRoom.map((item) => {
              return (
                <div
                  key={item.id}
                  className="item-feature d-flex align-items-center justify-content-between mb-2"
                >
                  <div className="info" style={{ flex: "1" }}>
                    <h5>{item.name}</h5>
                    <div>{item.phone}</div>
                    <div>
                      <span
                        className="badge"
                        style={{
                          fontSize: "12px",
                          backgroundColor:
                            item.id === findCon.customer_id
                              ? "#7dc242"
                              : "#FFC107",
                        }}
                      >
                        {item.id === findCon.customer_id
                          ? "Đại diện hợp đồng"
                          : "Thành viên"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
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
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListCustomer;
