import React from "react";
import "../css/DetailRoom.css";
import { useSelector } from "react-redux";
const DetailRoom = ({
  id,
  room_amount,
  area,
  circle_day,
  circle_month,
  date_join,
  date_terminate,
  maximun_member,
  status,
  active_status,
}) => {
  const index = useSelector((state) => state.index.data);
  const services = useSelector((state) => state.services.data);
  const detectPosition = (position) => {
    if (parseInt(position) <= 99) {
      return "Tầng trệt";
    } else {
      return `Tầng ${position.split("")[0]}`;
    }
  };
  const indexOfRoom = index.find((obj) => obj.id === id);
  const serviceOfRoom = services.filter((obj) => {
    return obj.active_room.filter((room) => room.id === id);
  });
  return (
    <div
      style={{
        padding: "15px 15px 15px 15px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        margin: "0 10px 10px 10px",
      }}
    >
      <div className="page-room">
        <div className="row">
          <div className="col-md-4">
            <div
              className="content-room-info"
              style={{ position: "sticky", top: "0px" }}
            >
              <h4 className="title-item">
                Thông tin phòng
                <i className="des">Thông tin chi tiết của phòng</i>
              </h4>
              <div className="card-feature" style={{ padding: "10px" }}>
                <div className="item d-flex justify-content-between">
                  <span>Tên phòng</span>
                  <span>
                    <b>{"Phòng " + id}</b>
                  </span>
                </div>
                <div className="item d-flex justify-content-between">
                  <span>Nhóm phòng</span>
                  <span>
                    <b>{detectPosition(id)}</b>
                  </span>
                </div>

                <div className="item d-flex justify-content-between">
                  <span>Giá thuê</span>
                  <span>
                    <b>{new Intl.NumberFormat("de-DE").format(room_amount)}đ</b>
                  </span>
                </div>
                <div className="item d-flex justify-content-between">
                  <span>Diện tích</span>
                  <span>
                    <b>{area + " m2"}</b>
                  </span>
                </div>
                <div className="item d-flex justify-content-between">
                  <span>Ưu tiên</span>
                  <span>
                    <b>Tất cả</b>
                  </span>
                </div>
                <div className="item d-flex justify-content-between">
                  <span>Ngày lập hóa đơn</span>
                  <span>
                    <b>{"Ngày " + circle_day}</b>
                  </span>
                </div>
                <div className="item d-flex justify-content-between">
                  <span>Ngày vào ở</span>
                  <span>
                    <b>{date_join === "" ? "Chưa vào ở" : date_join}</b>
                  </span>
                </div>
                <div className="item d-flex justify-content-between">
                  <span>Thời hạn hợp đồng</span>
                  <span>
                    <b>
                      {date_terminate === ""
                        ? "Không thời hạn"
                        : date_terminate}
                    </b>
                  </span>
                </div>
                <div className="item d-flex justify-content-between">
                  <span>Trạng thái</span>
                  <span
                    className="badge"
                    style={{ backgroundColor: "#7dc242" }}
                  >
                    <b>{status.includes("empty") ? "Trống" : "Đang ở"}</b>
                  </span>
                </div>

                <div className="item d-flex justify-content-between">
                  <span>Trạng thái tài chính</span>
                  <span
                    className="badge"
                    style={{ backgroundColor: "#dc3545" }}
                  >
                    <b>{active_status[0]}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h4 className="title-item">
              Dịch vụ sử dụng
              <i className="des">Danh sách dịch vụ sử dụng</i>
            </h4>
            <div className="card-feature" style={{ padding: "10px" }}>
              <div className="row" style={{ padding: "10px" }}>
                <table className="table table-bordered text-center">
                  <tbody>
                    <tr>
                      <td>
                        <b>Tên dịch vụ</b>
                      </td>
                      <td>
                        <b>Chỉ số dịch vụ</b>
                      </td>
                      <td>
                        <b>Loại</b>
                      </td>
                      <td>
                        <b>Đơn giá</b>
                      </td>
                    </tr>
                    {serviceOfRoom.map((service) => {
                      return (
                        <tr key={service.name}>
                          <td>
                            <b>{service.name}</b>
                          </td>
                          <td>
                            <div>
                              <span style={{ marginRight: "10px" }}>
                                Chỉ số hiện tại:&nbsp;
                                <b>
                                  {service.unit === "Kwh"
                                    ? indexOfRoom.new_index.index_electricity
                                    : (service.unit === "Khối"
                                        ? indexOfRoom.new_index.index_water
                                        : 0) +
                                      " " +
                                      service.unit}
                                </b>
                              </span>
                              <span style={{ display: "none" }}>
                                Số mới:<b>0</b>
                              </span>
                            </div>
                          </td>

                          <td>Cố định</td>
                          <td>
                            <b>
                              {new Intl.NumberFormat("de-DE").format(
                                service.price
                              )}
                              đ/{service.unit}{" "}
                            </b>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <h4 className="title-item">
              Danh sách khách thuê
              <i className="des">Thông tin khách thuê của phòng</i>
            </h4>
            <div className="card-feature" style={{ padding: "10px" }}>
              <div className="row g-2">
                <div className="col-6">
                  <div className="col-6 item-feature d-flex align-items-center justify-content-between mb-2">
                    <div className="info" style={{ flex: "1" }}>
                      <h6>Duyen Do</h6>
                      <p>0355544778</p>
                    </div>

                    <div
                      className="badge"
                      style={{ backgroundColor: "#7dc242" }}
                    >
                      Đại diện hợp đồng
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="title-item">
              Lịch sử hóa đơn
              <i className="des">Lịch sử thu tiền của phòng</i>
            </h4>
            <div className="card-feature" style={{padding: "10px"}}>
              <table className="table table-bordered text-center">
                <tbody>
                  <tr>
                    <td>
                      <b>Tháng lập phiếu</b>
                    </td>
                    <td>
                      <b>Tiền phòng</b>
                    </td>
                    <td>
                      <b>Thu/Trả tiền cọc</b>
                    </td>
                    <td>
                      <b>Tiền dịch vụ</b>
                    </td>
                    <td>
                      <b>Cộng thêm - giảm trừ</b>
                    </td>
                    <td>
                      <b>Tổng tiền</b>
                    </td>
                    <td>
                      <b>Tổng đã trả</b>
                    </td>
                    <td>
                      <b>Ngày tạo</b>
                    </td>
                    <td>
                      <b>Trạng thái</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: "150px"}}>
                      <div>
                        <b>10/2023</b>
                      </div>
                      <span style={{fontSize: "12px"}}>Thu tiền hàng tháng</span>
                    </td>

                    <td>3.000.000đ</td>
                    <td>0đ</td>
                    <td>2.000đ</td>
                    <td>0đ</td>
                    <td>3.002.000đ</td>
                    <td>0đ</td>
                    <td>11/10/2023</td>
                    <td>
                      <div className="badge" style={{backgroundColor: "#ED6004"}}>
                        Chưa thu
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRoom;
