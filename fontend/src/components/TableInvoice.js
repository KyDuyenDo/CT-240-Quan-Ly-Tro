import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListFilterCard from "../components/ListFilterCard";
import { INVOICE } from "../shared/filters";
import Confirmation from "../components/Confirmation";
import {
  cancelChangesInvoice,
  confirmChangesInvoice,
} from "../redux/slices/invoiceSlice";
import FormAddRoom from "./FormRoom.js/FormAddRoom";
import Notify from "./FormRoom.js/Notify";
import HeaderTableInvoice from "./HeaderTableInvoice";
import InvoiceObject from "./InvoiceObject";

const TableInvoice = () => {
  const invoices = useSelector((state) => state.invoices.data);
  const dispatch = useDispatch();
  const isChange = useSelector((state) => state.invoices.isChange);
  const [filterState, setFilterState] = useState("");
  const handleConfirmClick = () => {
    dispatch(confirmChangesInvoice());
  };
  const handleCancelClick = () => {
    dispatch(cancelChangesInvoice());
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
                  Tất cả phiếu thu tiền nhà(hóa đơn) - 10/2023
                  <i className="des">
                    Bạn sẽ thấy các hóa đơn hàng tháng được lập hoặc tạo hóa đơn
                    hàng tháng nếu chưa được lập
                  </i>
                </h4>
                <FormAddRoom />
              </div>
              <ListFilterCard
                filters={INVOICE}
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
              <HeaderTableInvoice />
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
            {invoices.map((invoice) => {
              return (
                <InvoiceObject
                  key={invoice.id}
                  id={invoice.id}
                  amount_room={invoice.amount_room}
                  electricity_bill={invoice.electricity_bill}
                  water_bill={invoice.water_bill}
                  service_bill={invoice.service_bill}
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

export default TableInvoice;
