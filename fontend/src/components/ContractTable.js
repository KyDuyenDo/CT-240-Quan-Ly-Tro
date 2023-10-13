import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListFilterCard from "../components/ListFilterCard";
import HeaderTable from "../components/HeaderTable";
import { CONTRACT } from "../shared/filters";
import { HEADERTABLECONTRACT } from "../shared/headerTable.css";
import Confirmation from "../components/Confirmation";
import {
  cancelChangesContract,
  confirmChangesContract,
} from "../redux/slices/contractSlice";
import FormAddRoom from "./FormRoom.js/FormAddRoom";
import Notify from "./FormRoom.js/Notify";
import ContractObject from "./ContractObject";

const ContractTable = () => {
  const contracts = useSelector((state) => state.contracts.data);
  const dispatch = useDispatch();
  const isChange = useSelector((state) => state.contracts.isChange);
  const [filterState, setFilterState] = useState("");
  const handleConfirmClick = () => {
    dispatch(confirmChangesContract());
  };
  const handleCancelClick = () => {
    dispatch(cancelChangesContract());
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
                  Tất cả hợp đồng
                  <i className="des">Danh sách hợp đồng được tạo khi thêm phiên ở mới</i>
                </h4>
                <FormAddRoom />
              </div>
              <ListFilterCard
                filters={CONTRACT}
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
              {HEADERTABLECONTRACT.map((square) => {
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
            {contracts.map((contract) => {
              return (
                <ContractObject
                  key={contract.id}
                  id={contract.id}
                  customer_id={contract.customer_id}
                  customer_count={contract.customer_count}
                  room_amount={contract.room_amount}
                  deposit_contract_amount={contract.deposit_contract_amount}
                  circle_month={contract.circle_month}
                  date_contract={contract.date_contract}
                  date_join={contract.date_join}
                  date_terminate={contract.date_terminate}
                  status={contract.status}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Notify />
    </div>
  );
};

export default ContractTable;
