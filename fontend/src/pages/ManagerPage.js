import React from "react";
import "../css/ManagerRoomPage.css";
import Header from "../components/Header";
import ManagementList from "../components/ManagementList";
import TableRoom from "../components/TableRoom";

const ManagerPage = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#E4EEF5" }}>
        <ManagementList />
        <TableRoom />
        <div
          className="text-center pt-5"
          style={{ backgroundColor: "#DFECF5", height: "85px" }}
        ></div>
      </div>
    </div>
  );
};

export default ManagerPage;
