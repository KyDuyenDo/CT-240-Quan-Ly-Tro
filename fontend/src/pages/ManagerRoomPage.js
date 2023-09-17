import React from "react";
import Header from "../components/Header";
import ManagementList from "../components/ManagementList";
import ListFilterCard from "../components/ListFilterCard";
import "../css/ManagerRoomPage.css";
import "../shared/filters";
import "../shared/headerTable.css";
import HeaderTable from "../components/HeaderTable";
import { ROOM } from "../shared/filters";
import { HEADERTABLEROOM } from "../shared/headerTable.css";
const ManagerRoomPage = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#E4EEF5" }}>
        <ManagementList />
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
                <div row>
                  <div class="header-item">
                    <h4 class="title-item">
                      Quản lý danh sách phòng
                      <i class="des">
                        Tất cả danh sách phòng trong Nhà trọ Nguyễn Thanh
                      </i>
                    </h4>
                    <button
                      class="add-round"
                      data-bs-toggle="modal"
                      data-bs-target="#addRoom"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title=""
                        data-bs-original-title="Thêm phòng"
                      >
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
                          class="feather feather-plus"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <ListFilterCard filters={ROOM} />
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
              <div
                className="tabulator-tableholder"
                tabindex="0"
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
                    class="tabulator-row tabulator-group tabulator-group-level-0 tabulator-group-visible tabulator-row-odd"
                    role="rowgroup"
                  >
                    <div
                      class="tabulator-group-toggle"
                      style={{marginLeft: "0px"}}
                    >
                      <div class="tabulator-arrow"></div>
                    </div>
                    Tầng trệt
                    <span style={{color:"#d00", marginLeft:"10px"}}>(4 phòng)</span>
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

export default ManagerRoomPage;
