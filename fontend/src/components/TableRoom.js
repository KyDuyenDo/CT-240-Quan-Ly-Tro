import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ListFilterCard from "../components/ListFilterCard";
import HeaderTable from "../components/HeaderTable";
import { ROOM } from "../shared/filters";
import { HEADERTABLEROOM } from "../shared/headerTable.css";
import RoomObject from "../components/RoomObject";
import Confirmation from "../components/Confirmation";
import { cancelChanges, confirmChanges } from "../redux/slices/roomSlice";
import FormAddRoom from "./FormRoom.js/FormAddRoom";

const TableRoom = () => {
  const rooms = useSelector((state) => state.rooms.data);
  const dispatch = useDispatch();
  const isChange = useSelector((state) => state.rooms.isChange);
  const [filterState, setFilterState] = useState("")
  const handleConfirmClick = () => {
    dispatch(confirmChanges());
  };
  const handleCancelClick = () => {
    dispatch(cancelChanges());
  };
  return (
    <div
      style={{
        padding: "15px 15px 15px 15px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        margin: "0 10px 10px 10px",
      }}
    >
      <div className="page-home">
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="manage"
            role="tabpanel"
            aria-labelledby="manage-tab"
          >
            <div row="true">
              <div className="header-item">
                <h4 className="title-item">
                  Quản lý danh sách phòng
                  <i className="des">Tất cả danh sách phòng trong Nhà trọ</i>
                </h4>
                <FormAddRoom />
              </div>
              <ListFilterCard
                    filters={ROOM}
                    filterState={filterState}
                    setFilterState={setFilterState}
                  />
            </div>
          </div>
        </div>
      </div>
      <div className="" id="buttom-save-container"></div>
      <div
        id="table"
        className="celled tabulator"
        role="grid"
        tabulator-layout="fitColumns"
        style={{ minHeight: "200px" }}
      >
        <div className="tabulator-header" role="rowgroup">
          <div className="tabulator-header-contents" role="rowgroup">
            <div
              className="tabulator-headers"
              role="row"
              style={{ height: "59px" }}
            >
              {HEADERTABLEROOM.map((square) => {
                return (
                  <HeaderTable
                    key={square.field}
                    classState={square.classState}
                    style={square.style}
                    field={square.field}
                    text={square.text}
                  />
                );
              })}
            </div>
            {isChange === true ? (
              <Confirmation
                handleCancelClick={handleCancelClick}
                handleConfirmClick={handleConfirmClick}
              />
            ) : (
              ""
            )}
            <div
              className="tabulator-frozen-rows-holder"
              style={{ minWidth: "0px" }}
            ></div>
          </div>
        </div>
        <div
          className="tabulator-tableholder"
          tabIndex="0"
          style={{
            minHeight: "200px",
            height: "calc(100% - 60px)",
            maxHeight: "calc(100% - 60px)",
          }}
        >
          <div
            className="tabulator-table"
            role="rowgroup"
            style={{ paddingTop: "0px", paddingBottom: "0px" }}
          >
            <div
              className="tabulator-row tabulator-group tabulator-group-level-0 tabulator-group-visible tabulator-row-odd"
              role="rowgroup"
            >
              <div
                className="tabulator-group-toggle"
                style={{ marginLeft: "0px" }}
              >
                <div className="tabulator-arrow"></div>
              </div>
            </div>
            {rooms.map((room) => {
              return (
                <RoomObject
                  key={room.id}
                  id={room.id}
                  status={room.status}
                  active_status={room.active_status}
                  area={room.area}
                  room_amount={room.room_amount}
                  deposit_contract_amount={room.deposit_contract_amount}
                  customers={room.customers}
                  circle_day={room.circle_day}
                  circle_month={room.circle_month}
                  date_join={room.date_join}
                  date_terminate={room.date_terminate}
                  maximun_member={room.maximun_member}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableRoom;
