export const ROOM = [
  {
    value: "is_active",
    info: "active",
    color: "bg-success",
    text: "phòng đang ở",
  },
  { value: "is_empty", info: "empty", color: "bg-danger", text: "phòng trống" },
  {
    value: "is_terminate_contract",
    info: "tick-terminate",
    color: "bg-warning",
    text: "Hợp đồng đang báo kết thúc",
  },
  {
    value: "is_will_terminate_contract",
    info: "will-terminate",
    color: "bg-warning",
    text: "Hợp đồng sắp hết hạn",
  },
  {
    value: "is_expire",
    info: "expire",
    color: "disable",
    text: "Hợp đồng đã quá hạn",
  },
  {
    value: "is_deposit_temp",
    info: "deposit-temp",
    color: "bg-warning",
    text: "Cọc giữ chỗ",
  },
];
export const INVOICE = [
  {
    value: "done",
    info: "filter_done",
    color: "bg-success",
    text: "Phiếu đã thu",
  },
  {
    value: "new",
    info: "filter_new",
    color: "bg-warning",
    text: "Phiếu chưa thu",
  },
];
export const CONTRACT = [
  {
    value: "is_active",
    info: "is_active",
    color: "bg-success",
    text: "Trong thời hạn hợp đồng",
  },
  {
    value: "is_tick_terminate",
    info: "is_tick_terminate",
    color: "bg-warning",
    text: "Đang báo kết thúc",
  },

  {
    value: "is_will_terminate",
    info: "is_will_terminate",
    color: "bg-danger",
    text: "Sắp đến hạn",
  },

  {
    value: "is_expire",
    info: "is_expire",
    color: "disable",
    text: "Đã quá hạn",
  },
];
