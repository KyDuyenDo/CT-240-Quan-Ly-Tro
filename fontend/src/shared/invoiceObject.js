export let INVOICE = [
  {
    id: "1",
    id_invoice:"1",
    username:"",
    id_count: [],
    status:"done",
    deposit_contract_amount:"",
    created_date:"10/11/2023",
    paid_date:"14/10/2023",
    amount_room: {
      number_of_months: "1",
      odd_number_of_days: "0",
      total: "3000000",
    },
    electricity_bill: { // kéo từ create_date của dich vụ cua phong
      old_unit: "5",
      new_unit: "20",
      total: "18000",
    },
    water_bill: { // kéo từ create_date của dich vụ cua phongs
      old_unit: "10",
      new_unit: "20",
      total: "20000",
    },
    service_bill: { // kéo từ create_date của dich vụ cua phong
      total: "0",
      month:"0"
    },
  },
  {
    id: "1",
    id_invoice:"2",
    username:"",
    id_count: [],
    deposit_contract_amount:"",
    status:"new",
    created_date:"10/11/2023",
    paid_date:"14/11/2023",
    amount_room: {
      number_of_months: "1",
      odd_number_of_days: "0",
      total: "3000000",
    },
    electricity_bill: {
      old_unit: "5",
      new_unit: "20",
      total: "18000",
    },
    water_bill: {
      old_unit: "10",
      new_unit: "20",
      total: "20000",
    },
    service_bill: {
      total: "0",
      month:"0"
    },
  },
  {
    id: "2",
    id_invoice:"3",
    username:"",
    id_count: [],
    deposit_contract_amount:"",
    status:"",
    created_date:"10/10/2023",
    paid_date:"14/10/2023",
    amount_room: {
      number_of_months: "1",
      odd_number_of_days: "0",
      total: "3000000",
    },
    electricity_bill: {
      old_unit: "20",
      new_unit: "30",
      total: "15000",
    },
    water_bill: {
      old_unit: "5",
      new_unit: "19",
      total: "25000",
    },
    service_bill: {
      total: "0",
      month:"0"
    },
  },
  
];
