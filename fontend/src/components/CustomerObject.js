import React from "react";
import EditableCell from "./EditableCell";
import Datepicker from "./Datepicker";
import "../css/customer.css";
import {
  updateAttrCustomerById,
  startEditingCustomer,
} from "../redux/slices/customerSlice";
import { useDispatch } from "react-redux";
import OptionForCustomer from "./OptionForCustomer";
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
  const dispatch = useDispatch();
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
          <div className="icon-first" style={{ backgroundColor: "#dc3545" }}>
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
        unit={` (Phòng ${room})`}
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
        type="text"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="birthday"
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
        tabulator-field="gender"
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
        <select
          className="form-select custom-select gender"
          aria-label="Default select example"
          value={gender}
          onChange={(event) => {
            dispatch(startEditingCustomer());
            dispatch(
              updateAttrCustomerById({
                id: id,
                attr: "gender",
                value: event.target.value,
              })
            );
          }}
        >
          <option value="1">Nam</option>
          <option value="0">Nữ</option>
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
        type="text"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field=""
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
        <select
          className="form-select custom-select is_admin"
          aria-label="Default select example"
          value={is_admin}
          onChange={(event) => {
            dispatch(startEditingCustomer());
            dispatch(
              updateAttrCustomerById({
                id: id,
                attr: "is_admin",
                value: event.target.value,
              })
            );
          }}
        >
          <option value="true">Thành viên</option>
          <option value="false">Liên hệ</option>
        </select>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field=""
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
        <select
          className="form-select custom-select is_registry"
          aria-label="Default select example"
          value={is_registry}
          onChange={(event) => {
            dispatch(startEditingCustomer());
            dispatch(
              updateAttrCustomerById({
                id: id,
                attr: "is_registry",
                value: event.target.value,
              })
            );
          }}
        >
          <option value="true">Đầy đủ</option>
          <option value="false">Chưa đủ</option>
        </select>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field=""
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
        <select
          className="form-select custom-select is_verify"
          aria-label="Default select example"
          value={is_verify}
          onChange={(event) => {
            dispatch(startEditingCustomer());
            dispatch(
              updateAttrCustomerById({
                id: id,
                attr: "is_verify",
                value: event.target.value,
              })
            );
          }}
        >
          <option value="false">Chưa có</option>
          <option value="true">Đã có</option>
        </select>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div className="option_custom">
        <OptionForCustomer room_id={room} id_customer={id} />
      </div>
    </div>
  );
};

export default CustomerObject;
