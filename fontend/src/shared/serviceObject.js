export let SERVICES = [
  {
    id_service: "1",
    name: "Tiền điện",
    price: "8000",
    unit: "Kwh",
    active_room: [
      {
        id: "1",
        id_power:"1" // keo id
      },
      {
        id: "2",
        id_power:"2"
      },
    ],
  },
  {
    id_service: "2",
    name: "Tiền nước",
    price: "3000",
    unit: "Khối",
    active_room: [
      {
        id: "1",
        id_power:"1"
      },
      {
        id: "2",
        id_power:"2"
      },
    ],
  },
  {
    id_service: "3",
    name: "Tiền gửi xe",
    price: "2000",
    unit: "Chiếc",
    active_room: [{ id: "1", number: "1" }],
  },
];
