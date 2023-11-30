import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../css/monthpicker.css"
const Monthpicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        className="custom_month"
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    );
};

export default Monthpicker;
