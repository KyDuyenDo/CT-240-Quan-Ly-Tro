import React from "react";
import EditableCell from "./EditableCell";
import QuanityInput from "./QuanityInput";
import Datepicker from "./Datepicker";
import OptionForActiveRoom from "./OptionForActiveRoom";
const RoomObject = ({
  id,
  status,
  active_status,
  area,
  room_amount,
  deposit_contract_amount,
  customers,
  circle_day,
  circle_month,
  date_join,
  date_terminate,
  maximun_member,
  handleCompleteChange, // trả về dữ liệu đã thay đổi ở trạng thái tạm
}) => {
  const statusOfRoom = (status) => {
    const status_room = status[status.length - 1];
    if (status_room === "is_empty") {
      return ["Đang trống", "bg-danger"];
    } else if (status_room === "is_active") {
      return ["Đang ở", "bg-success"];
    } else if (status_room === "is_expire") {
      return ["Hợp đồng đã quá hạn", "bg-secondary"];
    } else if (status_room === "is_terminate_contract") {
      return ["Hợp đồng đang báo kết thúc", "bg-warning"];
    } else if (status_room === "is_will_terminate_contract") {
      return ["Hợp đồng sắp hết hạn", "bg-warning"];
    } else if (status_room === "is_deposit_temp") {
      return ["Cọc giữ chỗ", "bg-warning"];
    }
  };
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
        style={{ width: "41px", minHeight: "50px" }}
      ></div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
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
            (status.includes("is_empty")
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
      <div
        className="tabulator-cell edit_disable tabulator-editable"
        role="gridcell"
        tabulator-field="name"
        tabIndex="0"
        style={{
          width: "100px",
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
      <EditableCell
        style_cell="rooms"
        value={area}
        room_id={id}
        // onChange={(value) => handleCellChange("area", value)}
        style={{ width: "101px", minHeight: "50px", fontWeight: "" }}
        field="area"
        type="number"
        unit="m²"
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell
        style_cell="rooms"
        value={room_amount.replace(/\./g, "")}
        room_id={id}
        // onChange={(value) => handleCellChange("room_amount", value)}
        style={{ width: "101px", minHeight: "50px", fontWeight: "fw-bold" }}
        field="room_amount"
        type="number"
        unit="₫"
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <EditableCell
        style_cell="rooms"
        value={deposit_contract_amount.replace(/\./g, "")}
        room_id={id}
        // onChange={(value) => handleCellChange("deposit_contract_amount", value)}
        style={{ width: "101px", minHeight: "50px", fontWeight: "fw-bold" }}
        field="deposit_contract_amount"
        type="number"
        unit="₫"
      />
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-cell edit_enable tabulator-editable"
        role="gridcell"
        tabulator-field="area"
        tabIndex="0"
        style={{
          width: "50px",
          textAlign: "left",
          display: "none",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        {area}
      </div>
      <div
        className="tabulator-cell edit_disable"
        role="gridcell"
        tabulator-field="customers"
        style={{
          width: "101px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
          </svg>{" "}
          {customers + " người"}
        </div>
      </div>

      <EditableCell
        style_cell="rooms"
        value={maximun_member}
        room_id={id}
        // onChange={(value) => handleCellChange("maximun_member", value)}
        style={{ width: "108px", minHeight: "50px", fontWeight: "" }}
        field="maximun_member"
        type="number"
        unit="người"
      />

      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="edit_enable tabulator-editable"
        role="gridcell"
        tabulator-field="circle_day"
        tabIndex="0"
        style={{
          width: "70px",
          textAlign: "center",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        <QuanityInput
          style_cell="rooms"
          value={circle_day}
          styleBtn={{
            width: "69px",
            height: "50px",
            border: "0px",
            backgroundColor: "inherit",
          }}
          style={{ with: "70px", height: "200px" }}
          // onChange={(value) => handleCellChange("circle_day", value)}
          type={"day_" + id}
          room_id={id}
          field="circle_day"
        />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="edit_enable tabulator-editable"
        role="gridcell"
        tabulator-field="circle_month"
        tabIndex="0"
        style={{
          width: "70px",
          textAlign: "center",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        <QuanityInput
          style_cell="rooms"
          value={circle_month}
          styleBtn={{
            width: "69px",
            height: "50px",
            border: "0px",
            backgroundColor: "inherit",
          }}
          style={{ with: "70px", height: "200px" }}
          // onChange={(value) => handleCellChange("circle_month", value)}
          type={"month_" + id}
          room_id={id}
          field="circle_month"
        />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className={
          "tabulator-editable" +
          (date_join === "" ? " tabulator-cell edit_disable" : " bg_hover")
        }
        role="gridcell"
        tabulator-field="date_join"
        tabIndex="0"
        style={{
          width: "101px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        {date_join === "" ? (
          <span>Không xác định</span>
        ) : (
          <Datepicker
            style_cell="rooms"
            room_id={id}
            field="date_join"
            type={"date_join_" + id}
            value={date_join}
          />
        )}
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className={
          "tabulator-editable" +
          (date_terminate === "" ? " tabulator-cell edit_disable" : " bg_hover")
        }
        role="gridcell"
        tabulator-field="date_terminate"
        tabIndex="0"
        style={{
          width: "101px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
          borderRight: "1px solid rgba(34,36,38,.1)",
        }}
      >
        {date_terminate === "" ? (
          <span>Không xác định</span>
        ) : (
          <Datepicker
            style_cell="rooms"
            room_id={id}
            field="date_terminate"
            type={"date_terminate_" + id}
            value={date_terminate}
          />
        )}
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
          width: "101px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        <span
          className={"badge " + statusOfRoom(status)[1]}
          style={{ backgroundColor: "#dc3545", whiteSpace: "break-spaces" }}
        >
          {statusOfRoom(status)[0]}
        </span>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
      <div
        className="tabulator-cell edit_disable"
        role="gridcell"
        tabulator-field="active_status"
        style={{
          width: "101px",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "50px",
        }}
      >
        <span
          className="badge "
          style={{ backgroundColor: "#7dc242", whiteSpace: "break-spaces" }}
        >
          Chờ kỳ thu tới
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
        <OptionForActiveRoom room_id={id} status={status} />
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ minHeight: "50px" }}
      ></span>
    </div>
  );
};

export default RoomObject;
