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
  let index = useSelector((state) => state.index.data);
  const services = useSelector((state) => state.services.data);
  const detectPosition = (position) => {
    if (parseInt(position) <= 99) {
      return "Tầng trệt";
    } else {
      return `Tầng ${position.split("")[0]}`;
    }
  };
  const indexOfRoomSearch = (index, id) => {
    let index_room = Object.values(index).filter((obj) => obj.id === id);
    var part_max = index_room[0].create_date.split("/");
    let max = new Date(part_max[2], part_max[1] - 1, part_max[0]);
    let index_return = 0;
    for (let i = 1; i < index_room.length; i++) {
      var part = index_room[i].create_date.split("/");
      let date = new Date(part[2], part[1] - 1, part[0]);
      if (date > max) {
        max = date;
        index_return = i;
      }
    }
    return index_room[index_return];
  };
  const indexOfRoom = indexOfRoomSearch(index, id);
  const serviceOfRoom = services.filter((obj) => {
    return obj.active_room.filter((room) => room.id === id);
  });
  const customers = useSelector((state) => state.customers.data);
  const contract = useSelector((state) => state.contracts.data);
  const findCon = contract.find((item) => item.id === id);
  const customerOfRoom = customers.filter(
    (customer) => customer.room === id && customer.is_admin === "true"
  );
  const invoices = useSelector((state) => state.invoices.data);
  const invoicesOfRoom = invoices.filter((invoice) => invoice.id === id);
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
                                    ? indexOfRoom.index_electricity
                                    : (service.unit === "Khối"
                                        ? indexOfRoom.index_water
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
                {customerOfRoom.length === 0 ? (
                  <h6>Không có thành viên nào</h6>
                ) : (
                  customerOfRoom.map((item) => {
                    return (
                      <div className="col-6" key={item.id}>
                        <div className="col-6 item-feature d-flex align-items-center justify-content-between mb-2">
                          <div className="info" style={{ flex: "1" }}>
                            <h6>{item.name}</h6>
                            <p>{item.phone}</p>
                          </div>

                          <div>
                            <span
                              className="badge"
                              style={{
                                fontSize: "12px",
                                backgroundColor:
                                  item.id === findCon.customer_id
                                    ? "#7dc242"
                                    : "#FFC107",
                              }}
                            >
                              {item.id === findCon.customer_id
                                ? "Đại diện hợp đồng"
                                : "Thành viên"}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <h4 className="title-item">
              Lịch sử hóa đơn
              <i className="des">Lịch sử thu tiền của phòng</i>
            </h4>
            <div className="card-feature" style={{ padding: "10px" }}>
              {
                invoicesOfRoom.length === 0? <h6>Không có hoá đơn nào</h6>:(<table className="table table-bordered text-center">
                <tbody>
                  <tr>
                    <td>
                      <b>Ngày lập phiếu</b>
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
                      <b>Hạn đóng tiền</b>
                    </td>
                    <td>
                      <b>Trạng thái</b>
                    </td>
                  </tr>
                  {invoicesOfRoom.map((invoice) => {
                    return (
                      <tr>
                        <td style={{ width: "150px" }}>
                          <div>
                            <b>{invoice.created_date}</b>
                          </div>
                          <span style={{ fontSize: "12px" }}>
                            Thu tiền hàng tháng
                          </span>
                        </td>

                        <td>{invoice.amount_room.total}đ</td>
                        <td>
                          {invoice.deposit_contract_amount !== ""
                            ? invoice.deposit_contract_amount
                            : "0"}
                        đ</td>
                        <td>
                          {parseInt(invoice.electricity_bill.total) +
                            parseInt(invoice.water_bill.total) +
                            parseInt(invoice.service_bill.total)}
                          đ
                        </td>
                        <td>0đ</td>
                        <td>
                          {parseInt(invoice.amount_room.total) +
                            parseInt(invoice.electricity_bill.total) +
                            parseInt(invoice.water_bill.total) +
                            parseInt(invoice.service_bill.total) +
                            (invoice.deposit_contract_amount !== ""
                              ? parseInt(invoice.deposit_contract_amount)
                              : 0)}
                          đ
                        </td>
                        <td>
                          {invoice.status === "done"
                            ? parseInt(invoice.amount_room.total) +
                              parseInt(invoice.electricity_bill.total) +
                              parseInt(invoice.water_bill.total) +
                              parseInt(invoice.service_bill.total) +
                              (invoice.deposit_contract_amount !== ""
                                ? parseInt(invoice.deposit_contract_amount)
                                : 0)
                            : "0"}
                          đ
                        </td>
                        <td>{invoice.paid_date}</td>
                        <td>
                          <div
                            className={
                              invoice.status === "done"
                                ? "badge bg-success"
                                : "badge bg-warning"
                            }
                          >
                            {invoice.status === "done" ? "Đã thu" : "Chưa thu"}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRoom;
