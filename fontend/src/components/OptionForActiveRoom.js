import React from "react";
import "../css/OptionForActiveRoom.css";
import FormMakeAnInvoice from "./FormRoom.js/FormMakeAnInvoice";
import FormAddCustomer from "./FormRoom.js/FormAddCustomer";
import ListCustomer from "./FormRoom.js/ListCustomer";
import FormSetService from "./FormRoom.js/FormSetService";
import FormSetPower from "./FormRoom.js/FormSetPower";
import DeleteRoom from "./FormRoom.js/DeleteRoom";
import { Link } from "react-router-dom";
import FormAddContract from "./FormRoom.js/FormAddContract";
const OptionForActiveRoom = ({ room_id, status }) => {
  return (
    <div className="btn-group dropstart">
      <button
        type="button"
        className="btn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          border: "1px solid black",
          padding: "0px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-more-vertical"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </button>
      <ul className="dropdown-menu">
        <li>
          <h6 style={{ padding: "0px 10px 0px 10px" }}>
            {"Lựa chọn của phòng " + room_id}{" "}
          </h6>
        </li>
        <li className="dropdown-item custom_item_2">
          <Link
            to={`/quan-ly/chi-tiet-phong/${room_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
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
              className="feather feather-arrow-right-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            &nbsp;Chi tiết phòng
          </Link>
        </li>
        {status.includes("is_empty") ? (
          <></>
        ) : (
          <>
            <li className="dropdown-item custom_item_2">
              <FormMakeAnInvoice room_id={room_id} />
            </li>
            <li className="dropdown-item custom_item_2">
              <ListCustomer room_id={room_id} />
            </li>
            <li className="dropdown-item custom_item_2">
              <FormAddCustomer room_id={room_id} />
            </li>
            <li className="dropdown-item custom_item_2">
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
                className="feather feather-refresh-ccw"
              >
                <polyline points="1 4 1 10 7 10"></polyline>
                <polyline points="23 20 23 14 17 14"></polyline>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
              </svg>
              &nbsp;Chuyển phòng
            </li>
            <li className="dropdown-item custom_item_2">
              <FormSetPower room_id={room_id} />
            </li>
            <li className="dropdown-item custom_item_2">
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
                className="feather feather-arrow-right-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              &nbsp;Xem văn bản hợp đồng
            </li>
          </>
        )}
        <li className="dropdown-item custom_item_2">
          <FormSetService room_id={room_id} />
        </li>
        {status.includes("is_empty") ? (
          <>
            <li className="dropdown-item custom_item_2">
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
                className="feather feather-anchor"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <line x1="12" y1="22" x2="12" y2="8"></line>
                <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
              </svg>
              &nbsp;Cọc giữ chỗ
            </li>
            <li
              className="dropdown-item custom_item_2"
              style={{ color: "green" }}
            >
              <FormAddContract room_id={room_id} />
            </li>
          </>
        ) : (
          <></>
        )}
        <li className="dropdown-item custom_item_2" style={{ color: "red" }}>
          <DeleteRoom id={room_id} type="room" />
        </li>
        <li className="dropdown-item custom_item_2">
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
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          &nbsp;Đóng menu
        </li>
      </ul>
    </div>
  );
};

export default OptionForActiveRoom;
