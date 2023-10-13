import "./App.css";
import "../src/css/ManagerRoomPage.css"
import Header from "./components/Header";
import ReportPage from "./pages/ReportPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingPage from "./pages/SettingPage";
import AccountPage from "./pages/AccountPage";
import ManagementList from "./components/ManagementList";
import TableRoom from "./components/TableRoom";
import ContractTable from "./components/ContractTable";
import ServiceTable from "./components/ServiceTable";
import CustomerTable from "./components/CustomerTable";
import TotalTable from "./components/TotalTable";
import SettingForm from "./components/SettingForm";
import TableInvoice from "./components/TableInvoice";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ManagementList />}>
            <Route index element={<TableRoom />} />
            <Route path="/" element={<TableRoom />} />
            <Route path="/quan-ly/lap-phieu-thu" element={<TableInvoice />} />
            <Route path="/quan-ly/tat-ca-hop-dong" element={<ContractTable />} />
            <Route path="/quan-ly/quan-ly-dich-vu" element={<ServiceTable />} />
            <Route path="/quan-ly/tat-ca-khach-thue" element={<CustomerTable />} />
            <Route path="/quan-ly/thu-chi-tong-ket" element={<TotalTable />} />
            <Route path="/quan-ly/cai-dat-nha-tro" element={<SettingForm />} />
          </Route>
          <Route path="/bao-cao" element={<ReportPage />} />
          <Route path="/cai-dat" element={<SettingPage />} />
          <Route path="/tai-khoan" element={<AccountPage />} />
        </Routes>
      </Router>
      <div
        className="text-center pt-5"
        style={{ backgroundColor: "#E4EEF5", height: "85px" }}
      ></div>
    </>
  );
}

export default App;
