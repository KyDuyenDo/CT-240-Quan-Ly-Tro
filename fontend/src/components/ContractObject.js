import React from "react";
import EditableCell from "./EditableCell";
import Datepicker from "./Datepicker";
import OptionForActiveRoom from "./OptionForActiveRoom";
import { CONTRACT } from "../shared/filters";
const ContractObject = ({
  id,
  id_contract,
  customer_id,
  customer_count,
  room_amount,
  deposit_contract_amount,
  circle_month,
  date_contract,
  date_join,
  date_terminate,
  status,
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
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        <div
          className={
            "icon-first " +
            (status.includes("empty")
              ? "bg-danger"
              : status.includes("expired")
              ? "bg-secondary"
              : "bg-success")
          }
        >
          <img width="20px" src="/room.png" alt="icon" />
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div // id phòng
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="name"
        tabIndex="0"
        style={{
          width: "108px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        <b>{"Phòng " + id}</b>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // đại diện hợp đồng
        style_cell="contracts"
        value={customer_id}
        room_id={id}
        id_contract={id_contract}
        style={{ width: "108px", minHeight: "50px", fontWeight: "" }}
        field="customer_id"
        type="text"
        unit=""
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // tổng thành viên
        style_cell="contracts"
        value={customer_count}
        room_id={id}
        id_contract={id_contract}
        style={{ width: "108px", minHeight: "50px", fontWeight: "" }}
        field="customer_count"
        type="number"
        unit="người"
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // Giá thuê
        style_cell="contracts"
        value={room_amount.replace(/\./g, "")}
        room_id={id}
        id_contract={id_contract}
        style={{ width: "108px", minHeight: "50px", fontWeight: "fw-bold" }}
        field="room_amount"
        type="number"
        unit="₫"
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // Giá cọc
        style_cell="contracts"
        value={deposit_contract_amount.replace(/\./g, "")}
        room_id={id}
        id_contract={id_contract}
        style={{ width: "108px", minHeight: "50px", fontWeight: "fw-bold" }}
        field="deposit_contract_amount"
        type="number"
        unit="₫"
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell // chu kỳ
        style_cell="contracts"
        value={circle_month}
        room_id={id}
        id_contract={id_contract}
        style={{ width: "108px", minHeight: "50px", fontWeight: "" }}
        field="circle_month"
        type="number"
        unit="tháng"
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="name"
        tabIndex="0"
        style={{
          width: "108px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        Mẫu mặc định
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
          width: "108px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        <Datepicker
          style_cell="contracts"
          room_id={id}
          id_contract={id_contract}
          field="date_contract"
          type={"date_contract_" + id}
          value={date_contract}
        />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="date_join"
        tabIndex="0"
        style={{
          width: "108px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        <Datepicker
          style_cell="contracts"
          room_id={id}
          id_contract={id_contract}
          field="date_join"
          type={"date_join_" + id + "_" + id_contract}
          value={date_join}
        />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-editable bg_hover"
        role="gridcell"
        tabulator-field="date_terminate"
        tabIndex="0"
        style={{
          width: "108px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        <Datepicker
          style_cell="contracts"
          room_id={id}
          id_contract={id_contract}
          field="date_terminate"
          type={"date_terminate_" + id + "_" + id_contract}
          value={date_terminate}
        />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable"
        role="gridcell"
        tabulator-field="status"
        style={{
          width: "118px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        <span
          className={"badge " + CONTRACT.find((object) => object.info === status).color}
          style={{ backgroundColor: "#dc3545", whiteSpace: "break-spaces" }}
        >
          {(CONTRACT.find((obj) => obj.value === status)).text}
        </span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
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
        }}
      >
        <OptionForActiveRoom room_id={id} id_contract={id_contract} />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
    </div>
  );
};

export default ContractObject;
