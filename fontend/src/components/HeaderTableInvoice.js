import React from "react";
import "../css/invoice.css"

const HeaderTableInvoice = () => {
  return (
    <>
      <div
        className="tabulator-col tabulator-frozen tabulator-frozen-left"
        role="columnheader"
        aria-sort="none"
        tabulator-field="id"
        style={{
          justifyContent: "center",
          minWidth: "40px",
          width: "40px",
          position: "sticky",
          left: "0px",
          height: "109px",
        }}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">&nbsp;</div>
          </div>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ position: "sticky", height: "109px" }}
      ></span>
      <div
        className="tabulator-col tabulator-sortable tabulator-col-sorter-element white-space-break tabulator-frozen tabulator-frozen-left"
        role="columnheader"
        aria-sort="none"
        tabulator-field="room.name"
        style={{
          justifyContent: "center",
          minWidth: "40px",
          width: "155px",
          position: "sticky",
          left: "40px",
          height: "109px",
        }}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Tên phòng</div>
            <div className="tabulator-col-sorter">
              <div className="tabulator-arrow"></div>
            </div>
          </div>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ position: "sticky", height: "109px" }}
      ></span>
      <div
        className="tabulator-col tabulator-col-group"
        style={{ justifyContent: "center", height: "109px" }}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Tiền phòng</div>
          </div>
        </div>
        <div className="tabulator-col-group-cols" style={{ minHeight: "54px" }}>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="month_amount"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "50px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Số tháng</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="day_amount"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "50px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Số ngày lẻ</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="total_room_amount"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "90px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Tiền phòng</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ height: "109px" }}
      ></span>
      <div
        className="tabulator-col tabulator-col-group"
        style={{ justifyContent: "center", height: "109px" }}
      >
        <div className="tabulator-col-content" style={{ maxWidth: "209p" }}>
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Tiền điện</div>
          </div>
        </div>
        <div className="tabulator-col-group-cols" style={{ minHeight: "54px" }}>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.0.value.0"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "60px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Số cũ</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.0.value.1"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "60px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Số mới</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.0.total"
            style={{
              justifyContent: "center",
              minWidth: "90px",
              width: "90px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Thành tiền</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ height: "109px" }}
      ></span>
      <div
        className="tabulator-col tabulator-col-group"
        style={{ justifyContent: "center", height: "109px" }}
      >
        <div className="tabulator-col-content" style={{ maxWidth: "209px" }}>
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Tiền nước</div>
          </div>
        </div>
        <div className="tabulator-col-group-cols" style={{ minHeight: "54px" }}>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.1.value.0"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "60px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Số cũ</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.1.value.1"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "60px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Số mới</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.1.total"
            style={{
              justifyContent: "center",
              minWidth: "90px",
              width: "90px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Thành tiền</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{ height: "109px" }}
      ></span>
      <div
        className="tabulator-col tabulator-col-group"
        style={{ justifyContent: "center", height: "109px" }}
      >
        <div className="tabulator-col-content" style={{ maxWidth: "209px" }}>
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Tiền dịch vụ thêm</div>
          </div>
        </div>
        <div className="tabulator-col-group-cols" style={{ minHeight: "54px" }}>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.2.value.0"
            style={{
              justifyContent: "center",
              minWidth: "40px",
              width: "50px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Tháng</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
          <div
            className="tabulator-col"
            role="columnheader"
            aria-sort="none"
            tabulator-field="price_items.2.total"
            style={{
              justifyContent: "center",
              minWidth: "90px",
              width: "90px",
              height: "53px",
            }}
          >
            <div className="tabulator-col-content">
              <div className="tabulator-col-title-holder">
                <div className="tabulator-col-title">Thành tiền</div>
              </div>
            </div>
          </div>
          <span
            className="tabulator-col-resize-handle"
            style={{ height: "53px" }}
          ></span>
        </div>
      </div>
      <div
        className="tabulator-col tabulator-frozen tabulator-frozen-right"
        role="columnheader"
        aria-sort="none"
        tabulator-field="total"
        style={{justifyContent: "center", minWidth: "40px", width: "115px", position: "sticky", right: "220px", height: "109px"}}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Tổng cộng</div>
          </div>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{position: "sticky", right: "217px", height: "109px"}}
      ></span>
      <div
        className="tabulator-col negative tabulator-frozen"
        role="columnheader"
        aria-sort="none"
        tabulator-field="remain_total"
        style={{justifyContent: "center", minWidth: "90px", position: "sticky", right: "130px", width: "105px", height: "109px"}}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Cần thu</div>
          </div>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{position: "sticky", right: "127px", height: "109px"}}
      ></span>
      <div
        className="tabulator-col tabulator-frozen"
        role="columnheader"
        aria-sort="none"
        tabulator-field="status_text"
        style={{justifyContent: "center", minWidth: "40px", width: "80px", position: "sticky", right: "50px", height: "109px"}}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">Trạng thái</div>
          </div>
        </div>
      </div>
      <span
        className="tabulator-col-resize-handle"
        style={{position: "sticky", right: "47px", height: "109px"}}
      ></span>
      <div
        className="tabulator-col tabulator-frozen"
        role="columnheader"
        aria-sort="none"
        tabulator-field="action"
        style={{justifyContent: "center", minWidth: "40px", width: "50px", position: "sticky", right: "0px", height: "109px", borderRight:"none"}}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTableInvoice;
