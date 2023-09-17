import React from "react";
import "../css/Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#lozido-main-menu"
                aria-controls="lozido-main-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"> </span>
              </button>
              <nav className="collapse navbar-collapse lozido-main-menu">
                <ul className="navbar-nav main-menu-left  me-auto mb-2 mb-lg-0">
                  {/* <img src="/logo.png" alt="logo" /> */}
                </ul>
                <ul className="topbar-items main-menu-right navbar-nav" style={{height: "85.500px"}}>
                  <li className="nav-item menu-item ">
                    <a href="/quan-ly" className="nav-link ">
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
                        className="feather feather-home"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span style={{ marginTop: "5px" }} className="text">
                        Quản lý nhà
                      </span>
                    </a>
                  </li>
                  <li className="nav-item menu-item">
                    <a href="/bao-cao" className="nav-link">
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
                        className="feather feather-pie-chart"
                      >
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                      </svg>
                      <span style={{ marginTop: "5px" }} className="text">
                        Tổng báo cáo
                      </span>
                    </a>
                  </li>
                  <li className="nav-item menu-item">
                    <a href="/cai-dat" className="nav-link">
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
                        className="feather feather-settings"
                      >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                      <span style={{ marginTop: "5px" }} className="text">
                        Cài đặt chung
                      </span>
                    </a>
                  </li>
                  <li className="nav-item menu-item">
                    <a
                      href="/cat-dat"
                      className="nav-link"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* <span class="count-notification badge">0</span> */}
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
                        className="feather feather-bell"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                      <span style={{ marginTop: "5px" }} className="text">
                        Thông báo
                      </span>
                    </a>
                    <ul className="dropdown-menu notication-dropdown dropdown-menu-lg-end">
                      <div className="text-center" style={{ padding: "20px" }}>
                        {/* <img
                          style={{ margin: "auto" }}
                          src="/Spin-1s-200px.svg"
                          alt="Đang tải..."
                          width="50px"
                        /> */}
                        <img
                          style={{ margin: "auto" }}
                          src="/Ripple-1s-200px.svg"
                          alt="Đang tải..."
                          width="100px"
                        />
                        <div>
                          <i
                            className="loading_text"
                            style={{ fontSize: "13px", marginTop: "-10px" }}
                          >
                            Đang tải thông báo...
                          </i>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="nav-item menu-item ">
                    <a href="/tai-khoan" className="nav-link ">
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
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span style={{ marginTop: "5px" }} className="text">
                        Tài khoản
                      </span>
                    </a>
                  </li>
                  <li className="nav-item menu-item ">
                    <a href="/dang-xuat" className="nav-link ">
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
                        className="feather feather-log-out"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span style={{ marginTop: "5px" }} className="text">
                        Đăng xuất
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
