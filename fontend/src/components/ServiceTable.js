import React from "react";
import "../css/Service.css";
import Monthpicker from "./Monthpicker";
const ServiceTable = () => {
  return (
    <div
      style={{
        padding: "15px 15px 15px 15px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        margin: "0 10px 10px 10px",
      }}
    >
      <div className="page-price-item" id="managePriceItem">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="header-item">
              <h4 className="title-item">
                Quản lý dịch vụ
                <i className="des">Các dịch vụ khách thuê xài</i>
              </h4>
              <button
                className="add-round"
                data-bs-toggle="modal"
                data-bs-target="#addPriceItem"
              >
                <span
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title=""
                  data-bs-original-title="Thêm dịch vụ"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </button>
            </div>
            <div className="list-price-item">
              <div className="mt-2">
                <div
                  className="mb-3 inner-item item-feature d-flex align-items-center justify-content-between"
                  id="price-item-10504"
                >
                  <div className="btn-round">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-tag"
                    >
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                      <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                  </div>
                  <div style={{ display: "grid", flex: "1" }}>
                    <b className="price-item-name">Tiền wifi</b>
                    <span className="price-item-price">
                      <span>30.000đ/ Tháng</span>
                    </span>
                    <i className="price-item-status">
                      <span style={{ color: "#7dc242" }}>
                        Đang áp dụng cho 3 phòng
                      </span>
                    </i>
                  </div>
                  <div
                    className="btn-round btn-edit"
                    data-bs-toggle="modal"
                    data-bs-target="#addPriceItem"
                    data-price-item='{"id":10504,"block_id":3215,"name":"Ti\u1ec1n wifi","frames":[],"price":30000,"subtraction":0,"status":"is_active","status_text":"\u0110ang s\u1eed d\u1ee5ng","type":"constant","type_text":"Theo gi\u00e1 tr\u1ecb c\u1ed1 \u0111\u1ecbnh","unit":"thang","unit_text":"Th\u00e1ng","is_default":0,"category":"other","rooms":{"payload":[{"id":48285,"value":48285,"name":"ph\u00f2ng 1","group_id":null,"sort":null,"room_amount":null,"customer_count":null,"priority":null,"priority_text":"Kh\u00f4ng x\u00e1c \u0111\u1ecbnh","circle_month":null,"status":"is_empty","status_text":"\u0110ang tr\u1ed1ng","active_status":"can_not_create_bill","active_status_text":"Ch\u01b0a th\u1ec3 thu ti\u1ec1n"},{"id":48286,"value":48286,"name":"Ph\u00f2ng 2","group_id":null,"sort":null,"room_amount":null,"customer_count":null,"priority":null,"priority_text":"Kh\u00f4ng x\u00e1c \u0111\u1ecbnh","circle_month":null,"status":"is_active","status_text":"\u0110ang \u1edf","active_status":"has_bill","active_status_text":"Ch\u01b0a thu ti\u1ec1n"},{"id":48287,"value":48287,"name":"Ph\u00f2ng 3","group_id":null,"sort":null,"room_amount":null,"customer_count":null,"priority":null,"priority_text":"Kh\u00f4ng x\u00e1c \u0111\u1ecbnh","circle_month":null,"status":"is_expire","status_text":"\u0110\u00e3 qu\u00e1 h\u1ea1n h\u1ee3p \u0111\u1ed3ng","active_status":"has_bill","active_status_text":"Ch\u01b0a thu ti\u1ec1n"}]},"value":null,"history":null}'
                  >
                    <div
                      style={{
                        width: "100%",
                        color: "#000",
                        margin: "auto",
                      }}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="Chỉnh sửa"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-edit"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{ marginRight: "10px" }}
                    className="btn-round btn-delete"
                    data-id="10504"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div class="header-item">
              <h4 class="title-item">
                Khách thuê sử dụng trong tháng
                <i class="des">Thống kê mỗi tháng khách thuê xài</i>
              </h4>
              <div
                class="input-group"
                style={{ width: "30%", marginTop: "20px" }}
              >
                <div>
                  <Monthpicker />
                </div>
                <label class="input-group-text" for="month">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-calendar"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </label>
              </div>
            </div>
            <div
              className="celled tabulator"
              id="table"
              role="grid"
              tabulator-layout="fitColumns"
              style={{ minHeight: "200px" }}
            >
              <div className="tabulator-header" role="rowgroup">
                <div className="tabulator-header-contents">
                  <div
                    class="tabulator-headers"
                    role="row"
                    style={{ height: "77px" }}
                  >
                    <div
                      class="tabulator-col white-space-break edit_disable"
                      role="columnheader"
                      aria-sort="none"
                      tabulator-field="name"
                      style={{
                        justifyContent: "center",
                        minWidth: "40px",
                        width: "169px",
                        height: "77px",
                      }}
                    >
                      <div class="tabulator-col-content">
                        <div class="tabulator-col-title-holder">
                          <div class="tabulator-col-title">Tên phòng</div>
                        </div>
                      </div>
                    </div>
                    <span
                      class="tabulator-col-resize-handle"
                      style={{ height: "77px" }}
                    ></span>
                    <div
                      class="tabulator-col tabulator-col-group edit_disable"
                      aria-sort="none"
                      style={{ justifyContent: "center", height: "77px" }}
                    >
                      <div
                        class="tabulator-col-content"
                        style={{ maxWidth: "228px" }}
                      >
                        <div class="tabulator-col-title-holder">
                          <div class="tabulator-col-title">Tiền wifi</div>
                        </div>
                      </div>
                      <div
                        class="tabulator-col-group-cols"
                        style={{ minHeight: "37px" }}
                      >
                        <div
                          class="tabulator-col edit_disable"
                          role="columnheader"
                          aria-sort="none"
                          tabulator-field="price_items.0.value_total"
                          style={{
                            justifyContent: "center",
                            minWidth: "40px",
                            width: "60px",
                            height: "37px",
                          }}
                        >
                          <div class="tabulator-col-content">
                            <div class="tabulator-col-title-holder">
                              <div class="tabulator-col-title">Sử dụng</div>
                            </div>
                          </div>
                        </div>
                        <span
                          class="tabulator-col-resize-handle"
                          style={{ height: "37px" }}
                        ></span>
                        <div
                          class="tabulator-col positive edit_disable"
                          role="columnheader"
                          aria-sort="none"
                          tabulator-field="price_items.0.item_total"
                          style={{
                            justifyContent: "center",
                            minWidth: "40px",
                            width: "169px",
                            height: "37px",
                          }}
                        >
                          <div class="tabulator-col-content">
                            <div class="tabulator-col-title-holder">
                              <div class="tabulator-col-title">Thành tiền</div>
                            </div>
                          </div>
                        </div>
                        <span
                          class="tabulator-col-resize-handle"
                          style={{ height: "37px" }}
                        ></span>
                      </div>
                    </div>
                    <span
                      class="tabulator-col-resize-handle"
                      style={{ height: "77px" }}
                    ></span>
                    <div
                      class="tabulator-col tabulator-col-group edit_disable"
                      aria-sort="none"
                      style={{ justifyContent: "center", height: "77px" }}
                    >
                      <div
                        class="tabulator-col-content"
                        style={{ maxWidth: "228px" }}
                      >
                        <div class="tabulator-col-title-holder">
                          <div class="tabulator-col-title">Gửi xe</div>
                        </div>
                      </div>
                      <div
                        class="tabulator-col-group-cols"
                        style={{ minHeight: "37px" }}
                      >
                        <div
                          class="tabulator-col edit_disable"
                          role="columnheader"
                          aria-sort="none"
                          tabulator-field="price_items.1.value_total"
                          style={{
                            justifyContent: "center",
                            minWidth: "40px",
                            width: "60px",
                            height: "37px",
                          }}
                        >
                          <div class="tabulator-col-content">
                            <div class="tabulator-col-title-holder">
                              <div class="tabulator-col-title">Sử dụng</div>
                            </div>
                          </div>
                        </div>
                        <span
                          class="tabulator-col-resize-handle"
                          style={{ height: "37px" }}
                        ></span>
                        <div
                          class="tabulator-col positive edit_disable"
                          role="columnheader"
                          aria-sort="none"
                          tabulator-field="price_items.1.item_total"
                          style={{
                            justifyContent: "center",
                            minWidth: "40px",
                            width: "169px",
                            height: "37px",
                          }}
                        >
                          <div class="tabulator-col-content">
                            <div class="tabulator-col-title-holder">
                              <div class="tabulator-col-title">Thành tiền</div>
                            </div>
                          </div>
                        </div>
                        <span
                          class="tabulator-col-resize-handle"
                          style={{ height: "37px" }}
                        ></span>
                      </div>
                    </div>
                    <span
                      class="tabulator-col-resize-handle"
                      style={{ height: "77px" }}
                    ></span>
                    <div
                      class="tabulator-col tabulator-col-group edit_disable"
                      aria-sort="none"
                      style={{ justifyContent: "center", height: "77px" }}
                    >
                      <div
                        class="tabulator-col-content"
                        style={{ maxWidth: "230.656px" }}
                      >
                        <div class="tabulator-col-title-holder">
                          <div class="tabulator-col-title">Tiền điện</div>
                        </div>
                      </div>
                      <div
                        class="tabulator-col-group-cols"
                        style={{ minHeight: "37px" }}
                      >
                        <div
                          class="tabulator-col edit_disable"
                          role="columnheader"
                          aria-sort="none"
                          tabulator-field="price_items.2.value_total"
                          style={{
                            justifyContent: "center",
                            minWidth: "40px",
                            width: "60px",
                            height: "37px",
                          }}
                        >
                          <div class="tabulator-col-content">
                            <div class="tabulator-col-title-holder">
                              <div class="tabulator-col-title">Sử dụng</div>
                            </div>
                          </div>
                        </div>
                        <span
                          class="tabulator-col-resize-handle"
                          style={{ height: "37px" }}
                        ></span>
                        <div
                          class="tabulator-col positive edit_disable"
                          role="columnheader"
                          aria-sort="none"
                          tabulator-field="price_items.2.item_total"
                          style={{
                            justifyContent: "center",
                            minWidth: "40px",
                            width: "171.656px",
                            height: "37px",
                          }}
                        >
                          <div class="tabulator-col-content">
                            <div class="tabulator-col-title-holder">
                              <div class="tabulator-col-title">Thành tiền</div>
                            </div>
                          </div>
                        </div>
                        <span
                          class="tabulator-col-resize-handle"
                          style={{ height: "37px" }}
                        ></span>
                      </div>
                    </div>
                    <span
                      class="tabulator-col-resize-handle"
                      style={{ height: "77px" }}
                    ></span>
                  </div>
                  <div
                    class="tabulator-calcs-holder"
                    style={{ minWidth: "859px" }}
                  >
                    <div
                      class="tabulator-row tabulator-calcs tabulator-calcs-top"
                      role="row"
                    >
                      <div
                        class="tabulator-cell white-space-break edit_disable"
                        role="gridcell"
                        tabulator-field="name"
                        style={{
                          textAlign: "left",
                          width: "169px",
                          height: "40px",
                        }}
                      >
                        &nbsp;
                      </div>
                      <div
                        class="tabulator-cell edit_disable"
                        role="gridcell"
                        tabulator-field="price_items.0.value_total"
                        style={{
                          textAlign: "center",
                          width: "60px",
                          height: "40px",
                        }}
                      >
                        &nbsp;
                      </div>
                      <div
                        class="tabulator-cell positive edit_disable"
                        role="gridcell"
                        tabulator-field="price_items.0.item_total"
                        style={{
                          textAlign: "right",
                          width: "169px",
                          height: "40px",
                        }}
                      >
                        <b>0&nbsp;₫</b>
                      </div>
                      <div
                        class="tabulator-cell edit_disable"
                        role="gridcell"
                        tabulator-field="price_items.1.value_total"
                        style={{
                          textAlign: "center",
                          width: "60px",
                          height: "40px",
                        }}
                      >
                        &nbsp;
                      </div>
                      <div
                        class="tabulator-cell positive edit_disable"
                        role="gridcell"
                        tabulator-field="price_items.1.item_total"
                        style={{
                          textAlign: "right",
                          width: "169px",
                          height: "40px",
                        }}
                      >
                        <b>0&nbsp;₫</b>
                      </div>
                      <div
                        class="tabulator-cell edit_disable"
                        role="gridcell"
                        tabulator-field="price_items.2.value_total"
                        style={{
                          textAlign: "center",
                          width: "60px",
                          height: "40px",
                        }}
                      >
                        &nbsp;
                      </div>
                      <div
                        class="tabulator-cell positive edit_disable"
                        role="gridcell"
                        tabulator-field="price_items.2.item_total"
                        style={{
                          textAlign: "right",
                          width: "171.656px",
                          height: "40px",
                        }}
                      >
                        <b>0&nbsp;₫</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTable;
