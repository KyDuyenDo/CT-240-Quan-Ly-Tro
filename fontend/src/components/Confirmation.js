import "../css/Confirmation.css"
import React from "react";

const Confirmation = ({handleCancelClick, handleConfirmClick}) => {
  return (
    <>
      <div id="buttom-save-container" className="show">
        <div style={{marginRight: "10px"}}>
          Bạn có muốn lưu thay đổi ?
        </div>
        <button
          id="clear-change"
          className="btn btn-danger"
          style={{marginRight: "10px"}}
          onClick={handleCancelClick}
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
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>{" "}
          Xóa tất cả thay đổi
        </button>
        <button id="save-change" className="btn btn-primary" onClick={handleConfirmClick}>
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
            className="feather feather-save"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>{" "}
          Lưu thay đổi
        </button>
      </div>
    </>
  );
};

export default Confirmation;
