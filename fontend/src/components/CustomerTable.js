import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListFilterCard from "../components/ListFilterCard";
import HeaderTable from "../components/HeaderTable";
import { CUSTOMER } from "../shared/filters";
import { HEADERTABLECUSTOMER } from "../shared/headerTable.css";
import CustomerObject from "../components/CustomerObject";
import Confirmation from "../components/Confirmation";
import {
  cancelChangesCustomer,
  confirmChangesCustomer,
} from "../redux/slices/customerSlice";
import FormAddRoom from "./FormRoom.js/FormAddRoom";
import Notify from "./FormRoom.js/Notify";
const CustomerTable = () => {
  const customers = useSelector((state) => state.customers.data);
  const dispatch = useDispatch();
  const isChange = useSelector((state) => state.rooms.isChange);
  const [filterState, setFilterState] = useState("");
  const handleConfirmClick = () => {
    dispatch(confirmChangesCustomer());
  };
  const handleCancelClick = () => {
    dispatch(cancelChangesCustomer());
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
                  Quản lý danh sách khách thuê
                  <i className="des">
                    Tất cả danh sách khách thuê trong Nhà trọ của bạn
                  </i>
                </h4>
                <FormAddRoom />
              </div>
              <ListFilterCard
                filters={CUSTOMER}
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
              {HEADERTABLECUSTOMER.map((square) => {
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
            {customers.map((customer) => {
              return (
                <CustomerObject
                  id={customer.id}
                  name={customer.name}
                  room={customer.room}
                  phone={customer.phone}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  address={customer.address}
                  job={customer.job}
                  identity_number={customer.identity_number}
                  is_admin={customer.is_admin}
                  is_verify={customer.is_verify}
                  is_registry={customer.is_registry}
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

export default CustomerTable;
