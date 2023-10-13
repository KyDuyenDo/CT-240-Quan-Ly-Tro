import "./App.css";
import "../src/css/ManagerRoomPage.css";
import Header from "./components/Header";
import ReportPage from "./pages/ReportPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
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
import DetailRoom from "./components/DetailRoom";
import { useSelector } from "react-redux";

function App() {
  const GetDetailRoom = () => {
    let { id } = useParams();
    const rooms = useSelector((state) => state.rooms.data);
    const room = rooms.find((obj) => obj.id === id);

    return (
      <DetailRoom
        id={id}
        status={room.status}
        active_status={room.active_status}
        area={room.area}
        room_amount={room.room_amount}
        deposit_contract_amount={room.deposit_contract_amount}
        customers={room.customers}
        circle_day={room.circle_day}
        circle_month={room.circle_month}
        date_join={room.date_join}
        date_terminate={room.date_terminate}
        maximun_member={room.maximun_member}
      />
    );
  };
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/quan-ly" element={<ManagementList />}>
            <Route index element={<TableRoom />} />
            <Route path="/quan-ly" element={<TableRoom />} />
            <Route path="/quan-ly/lap-phieu-thu" element={<TableInvoice />} />
            <Route
              path="/quan-ly/tat-ca-hop-dong"
              element={<ContractTable />}
            />
            <Route path="/quan-ly/quan-ly-dich-vu" element={<ServiceTable />} />
            <Route
              path="/quan-ly/tat-ca-khach-thue"
              element={<CustomerTable />}
            />
            <Route path="/quan-ly/thu-chi-tong-ket" element={<TotalTable />} />
            <Route path="/quan-ly/cai-dat-nha-tro" element={<SettingForm />} />
            <Route
              path="/quan-ly/chi-tiet-phong/:id"
              element={<GetDetailRoom />}
            />
          </Route>
          <Route path="/bao-cao" element={<ReportPage />} />
          <Route path="/cai-dat" element={<SettingPage />} />
          <Route path="/tai-khoan" element={<AccountPage />} />
          <Route path="/" element={<Navigate to="/quan-ly" />} />
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
