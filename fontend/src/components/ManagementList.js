import React from "react";
import "../css/ManagementList.css";
import { Link, Outlet, useLocation } from "react-router-dom";
const ManagementList = () => {
  let url = useLocation();
  let urlSplit = url.pathname.split("/")
  let active = urlSplit[urlSplit.length -1];
  return (
    <>
      <div
        className=""
        style={{
          minHeight: "125px",
          display: "flex",
          padding: "0px 10px 0px 0px",
        }}
      >
        <div
          className="col-md-2 col-md-2 d-flex align-items-center justify-content-center"
          style={{ marginRight: "10px" }}
        >
          <div
            className="current-block d-flex align-items-center"
            style={{ position: "relative" }}
          >
            <div
              className="d-flex align-items-center"
              style={{ flexDirection: "row", flex: 1 }}
            >
              <div className="icon-blocks">
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
                  className="feather feather-home feather-size-18"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>

              <div style={{ padding: "20px 0px 20px 5px", flex: 1 }}>
                <i style={{ fontSize: "12px" }}>Đang quản lý</i>
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#15a05c",
                    padding: "0px",
                    margin: "0px",
                    whiteSpace: "nowrap",
                    maxWidth: "150px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <i>Nhà trọ</i>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-10"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              position: "relative",
            }}
          >
            <Link to="/quan-ly" className={"item-menu " + (active === "quan-ly"? "active" : "")}>
              <div className="icon text-center">
                <img
                  width="55px"
                  src="/icons/menus/thu_tien.png"
                  alt="quan-ly-phong"
                />
              </div>
              <div className="key">
                <span className="title">
                  <b>Quản lý phòng</b>
                </span>
              </div>
            </Link>
            <Link to="/quan-ly/lap-phieu-thu" className={"item-menu " + (active === "lap-phieu-thu"? "active" : "")}>
              <div className="icon text-center">
                <img
                  width="55px"
                  src="/icons/menus/thu_tien.png"
                  alt="quan-ly-hoa-don"
                />
              </div>
              <div className="key">
                <span className="title">
                  <b>Tất cả hóa đơn</b>
                </span>
              </div>
            </Link>
            <Link to="/quan-ly/tat-ca-hop-dong" className={"item-menu " + (active === "tat-ca-hop-dong"? "active" : "")}>
              <div className="icon text-center">
                <img
                  width="55px"
                  src="/icons/menus/report_customer_use.png"
                  alt="quan-ly-hop-dong"
                />
              </div>
              <div className="key">
                <span className="title">
                  <b>Tất cả hợp đồng</b>
                </span>
              </div>
            </Link>
            <Link to="/quan-ly/quan-ly-dich-vu" className={"item-menu " + (active === "quan-ly-dich-vu"? "active" : "")}>
              <div className="icon text-center">
                <img
                  width="55px"
                  src="/icons/menus/ghi_chu.png"
                  className=""
                  alt="quan-ly-dich-vu"
                />
              </div>
              <div className="key">
                <span className="title">
                  <b>Quản lý dịch vụ</b>
                </span>
              </div>
            </Link>
            <Link to="/quan-ly/tat-ca-khach-thue" className={"item-menu " + (active === "tat-ca-khach-thue"? "active" : "")}>
              <div className="icon text-center">
                <img
                  width="55px"
                  src="/icons/menus/danh_sach_lien_he.png"
                  alt="quan-ly-khach-thue"
                />
              </div>
              <div className="key">
                <span className="title">
                  <b>Tất cả khách thuê</b>
                </span>
              </div>
            </Link>
            <Link to="/quan-ly/thu-chi-tong-ket" className={"item-menu " + (active === "thu-chi-tong-ket"? "active" : "")}>
              <div className="icon text-center">
                <img
                  width="55px"
                  src="/icons/menus/thu_tien.png"
                  alt="tong-ket"
                />
              </div>
              <div className="key">
                <span className="title">
                  <b>Thu/Chi - Tổng kết</b>
                </span>
              </div>
            </Link>
            <Link to="/quan-ly/cai-dat-nha-tro" className={"item-menu " + (active === "cai-dat-nha-tro"? "active" : "")}>
              <div className="icon text-center">
                <img
                  width="55px"
                  src="/icons/menus/setting.png"
                  alt="cai-dat"
                />
              </div>
              <div className="key">
                <span className="title">
                  <b>Cài đặt</b>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ManagementList;
