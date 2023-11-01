import React from "react";
import EditableCell from "./EditableCell";
import Datepicker from "./Datepicker";
import "../css/customer.css"
import OptionForActiveRoom from "./OptionForActiveRoom";
const CustomerObject = ({
  id,
  name,
  room,
  phone,
  birthday,
  gender,
  address,
  job,
  identity_number,
  is_admin,
  is_verify,
  is_registry,
}) => {
  return (
    <div
      className="tabulator-row tabulator-row-even enable-background"
      role="row"
      style={{ display: "flex", alignItems: "stretch" }}
    >
      <div // icon
        className="tabulator-cell"
        role="gridcell"
        tabulator-field="id"
        style={{
          width: "50px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50px",
        }}
      >
        <div>
          <div class="icon-first" style={{ backgroundColor: "#dc3545" }}>
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
              class="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // tên khách hàng
        style_cell="customer"
        value={name}
        room_id={room}
        id_customer={id}
        style={{ width: "130px", minHeight: "50px", fontWeight: "" }}
        field="name"
        type="text"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // số điện thoại
        style_cell="customer"
        value={phone}
        room_id={room}
        id_customer={id}
        style={{ width: "110px", minHeight: "50px", fontWeight: "" }}
        field="phone"
        type="number"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="date_contract"
        tabIndex="0"
        style={{
          width: "110px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        <Datepicker
          style_cell="customer"
          room_id={room}
          id_customer={id}
          field="birthday"
          type={"customer_birthday_" + id}
          value={birthday}
        />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="date_contract"
        tabIndex="0"
        style={{
          width: "90px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        <select className="form-select custom-select" aria-label="Default select example">
          <option selected>Nam</option>
          <option value="1">Nữ</option>
        </select>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // địa chỉ
        style_cell="customer"
        value={address}
        room_id={room}
        id_customer={id}
        style={{ width: "230px", minHeight: "50px", fontWeight: "" }}
        field="address"
        type="text"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // nghề nghiệp
        style_cell="customer"
        value={job}
        room_id={room}
        id_customer={id}
        style={{ width: "130px", minHeight: "50px", fontWeight: "" }}
        field="job"
        type="text"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // CCCD
        style_cell="customer"
        value={identity_number}
        room_id={room}
        id_customer={id}
        style={{ width: "100px", minHeight: "50px", fontWeight: "" }}
        field="identity_number"
        type="number"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="date_contract"
        tabIndex="0"
        style={{
          width: "100px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="date_contract"
        tabIndex="0"
        style={{
          width: "100px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="date_contract"
        tabIndex="0"
        style={{
          width: "100px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
       
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
    </div>
  );
};

export default CustomerObject;
