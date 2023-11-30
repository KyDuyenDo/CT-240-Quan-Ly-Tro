import React from "react";
import EditableCell from "./EditableCell";
import OptionforInvoice from "./OptionforInvoice";
const InvoiceObject = ({
  id,
  id_invoice,
  amount_room,
  electricity_bill,
  water_bill,
  service_bill,
  created_date,
  status,
}) => {
  return (
    <div
      className="tabulator-row tabulator-row-even enable-background"
      role="row"
      style={{ display: "flex", alignItems: "stretch" }}
    >
      <div
        className="tabulator-cell"
        role="gridcell"
        tabulator-field="sort"
        style={{
          width: "40px",
          minHeight: "66px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EBEEEB",
        }}
      >
        <div className="icon-first" style={{ backgroundColor: "#ED6004" }}>
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
            className="feather feather-clipboard"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="name"
        tabIndex="0"
        style={{
          width: "155px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#EBEEEB",
        }}
      >
        <b>{"Phòng " + id}</b>
        <span style={{ fontSize: "11px", color: "green" }}>{created_date}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      {/* <EditableCell
        style_cell="invoices"
        value={amount_room.number_of_months}
        room_id={id}
        id_invoice={id_invoice}
        style={{ width: "50px", minHeight: "66px", fontWeight: "" }}
        field="amount_room.number_of_months"
        type="number"
        unit=""
      /> */}
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="number_of_months"
        tabIndex="0"
        style={{
          width: "50px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#FFF5F2",
        }}
      >
        <span>{amount_room.number_of_months}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      {/* <EditableCell
        style_cell="invoices"
        value={amount_room.odd_number_of_days}
        room_id={id}
        id_invoice={id_invoice}
        style={{ width: "50px", minHeight: "66px", fontWeight: "" }}
        field="amount_room.odd_number_of_days"
        type="number"
        unit=""
      /> */}
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="odd_number_of_days"
        tabIndex="0"
        style={{
          width: "50px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#FFF5F2",
        }}
      >
        <span>{amount_room.odd_number_of_days}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="amount_room_total"
        tabIndex="0"
        style={{
          width: "90px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "66px",
        }}
      >
        <b>{new Intl.NumberFormat("de-DE").format(amount_room.total) + " ₫"}</b>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      {/* <EditableCell
        style_cell="invoices"
        value={electricity_bill.old_unit}
        room_id={id}
        id_invoice={id_invoice}
        style={{ width: "60px", minHeight: "66px", fontWeight: "" }}
        field="electricity_bill.old_unit"
        type="number"
        unit=""
      /> */}
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="electricity_bill.old_unit"
        tabIndex="0"
        style={{
          width: "60px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#FFF5F2",
        }}
      >
        <span>{electricity_bill.old_unit}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      {/* <EditableCell
        style_cell="invoices"
        value={electricity_bill.new_unit}
        room_id={id}
        id_invoice={id_invoice}
        style={{ width: "60px", minHeight: "66px", fontWeight: "" }}
        field="electricity_bill.new_unit"
        type="number"
        unit=""
      /> */}
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="electricity_bill.new_unit"
        tabIndex="0"
        style={{
          width: "60px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#FFF5F2",
        }}
      >
        <span>{electricity_bill.new_unit}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="electricity_bill_total"
        tabIndex="0"
        style={{
          width: "90px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "66px",
        }}
      >
        <b>
          {new Intl.NumberFormat("de-DE").format(electricity_bill.total) + " ₫"}
        </b>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      {/* <EditableCell
        style_cell="invoices"
        value={water_bill.old_unit}
        room_id={id}
        id_invoice={id_invoice}
        style={{ width: "60px", minHeight: "66px", fontWeight: "" }}
        field="water_bill.old_unit"
        type="number"
        unit=""
      /> */}
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="water_bill.old_unit"
        tabIndex="0"
        style={{
          width: "60px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#FFF5F2",
        }}
      >
        <span>{water_bill.old_unit}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      {/* <EditableCell
        style_cell="invoices"
        value={water_bill.new_unit}
        room_id={id}
        id_invoice={id_invoice}
        style={{ width: "60px", minHeight: "66px", fontWeight: "" }}
        field="water_bill.new_unit"
        type="number"
        unit=""
      /> */}
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="water_bill.new_unit"
        tabIndex="0"
        style={{
          width: "60px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#FFF5F2",
        }}
      >
        <span>{water_bill.new_unit}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="water_bill_total"
        tabIndex="0"
        style={{
          width: "90px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "66px",
        }}
      >
        <b>{new Intl.NumberFormat("de-DE").format(water_bill.total) + " ₫"}</b>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      {/* <EditableCell
        style_cell="invoices"
        value={service_bill.month}
        room_id={id}
        id_invoice={id_invoice}
        style={{ width: "50px", minHeight: "66px", fontWeight: "" }}
        field="service_bill.month"
        type="number"
        unit=""
      /> */}
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="service_bill.month"
        tabIndex="0"
        style={{
          width: "50px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          minHeight: "66px",
          flexDirection: "column",
          backgroundColor: "#FFF5F2",
        }}
      >
        <span>{service_bill.month}</span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="service_bill_total"
        tabIndex="0"
        style={{
          width: "90px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "66px",
        }}
      >
        <b>
          {new Intl.NumberFormat("de-DE").format(service_bill.total) + " ₫"}
        </b>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="total"
        tabIndex="0"
        style={{
          width: "115px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "66px",
        }}
      >
        <b>
          {new Intl.NumberFormat("de-DE").format(
            parseInt(amount_room.total) +
              parseInt(electricity_bill.total) +
              parseInt(water_bill.total) +
              parseInt(service_bill.total)
          )}
          &nbsp;₫
        </b>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="remain_total"
        tabIndex="0"
        style={{
          width: "105px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "66px",
          backgroundColor: "#FFF4E4",
        }}
      >
        <b style={{ color: "red" }}>
          {new Intl.NumberFormat("de-DE").format(
            parseInt(amount_room.total) +
              parseInt(electricity_bill.total) +
              parseInt(water_bill.total) +
              parseInt(service_bill.total)
          )}
          &nbsp;₫
        </b>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="status"
        tabIndex="0"
        style={{
          width: "80px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "66px",
          backgroundColor: "#EBEEEB",
        }}
      >
        <span
          className={
            status === "done" ? "badge bg-success" : "badge bg-warning"
          }
          style={{ whiteSpace: "break-spaces" }}
        >
          {status === "done" ? "Đã thu" : "Chưa thu"}
        </span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "66px" }}
      ></span>
      <div
        className="pointer"
        role="gridcell"
        tabulator-field="action"
        style={{
          width: "50px",
          textAlign: "center",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50px",
          borderRightWidth: "0px",
          backgroundColor: "#EBEEEB",
        }}
      >
        <OptionforInvoice
          room_id={id}
          id_invoice={id_invoice}
          status={status}
        />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
    </div>
  );
};

export default InvoiceObject;
