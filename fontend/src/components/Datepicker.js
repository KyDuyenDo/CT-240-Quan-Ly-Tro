import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import DatePickerCustom from "./DatePickerCustom";
const Datepicker = ({ value, type, room_id, field }) => {
  return (
    <div>
      <DatePickerCustom
        wrapperClassName="datepicker"
        className="form-control"
        dateFormat="dd/MM/yyyy"
        selected={value}
        room_id={room_id}
        field={field}
        type={type}
      />
    </div>
  );
};
export default Datepicker;
