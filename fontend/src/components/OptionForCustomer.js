import React from "react";
import "../css/OptionForActiveRoom.css";
import DeleteRoom from "./FormRoom.js/DeleteRoom";
const OptionForCustomer = ({room_id, id_customer}) => {
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
            {"Phòng " + room_id}
          </h6>
        </li>
        <li className="dropdown-item custom_item_2" style={{ color: "red" }}>
          <DeleteRoom id={id_customer} type="customer" />
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

export default OptionForCustomer;
