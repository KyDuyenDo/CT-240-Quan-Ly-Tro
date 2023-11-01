import React from "react";
import "../css/OptionForActiveRoom.css";
import FormSetService from "./FormRoom.js/FormSetService";
import DeleteRoom from "./FormRoom.js/DeleteRoom";
import { Link } from "react-router-dom";
const OptionForEmptyRoom = ({ room_id }) => {
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
        <li className="dropdown-item custom_item_2">
          <FormSetService room_id={room_id} />
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
            className="feather feather-anchor"
          >
            <circle cx="12" cy="5" r="3"></circle>
            <line x1="12" y1="22" x2="12" y2="8"></line>
            <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
          </svg>
          &nbsp;Cọc giữ chỗ
        </li>
        <li className="dropdown-item custom_item_2" style={{ color: "green" }}>
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
        </li>
        <li className="dropdown-item custom_item_2" style={{ color: "red" }}>
          <DeleteRoom />
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

export default OptionForEmptyRoom;
