import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputMask from "react-input-mask";
import "../css/DatePicker.css";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAttrRoomById, startEditing } from "../redux/slices/roomSlice";
import {
  updateAttrContractById,
  startEditingContract,
} from "../redux/slices/contractSlice";
const DatePickerCustom = (props) => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const inputRef = useRef(null);
  const [focusing, setFocusing] = useState(false);
  const dispatch = useDispatch();
  const isChangeRoom = useSelector((state) => state.rooms.isChange);
  const isChangeContract = useSelector((state) => state.contracts.isChange);
  const formatStringToDate = (dateString) => {
    const dateParts = dateString.split("/");
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  };

  const [date, setDate] = useState(formatStringToDate(props.selected));

  const formatDateToString = (dateSelected) => {
    const day = dateSelected.getDate().toString().padStart(2, "0");
    const month = (dateSelected.getMonth() + 1).toString().padStart(2, "0");
    const year = dateSelected.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };
  const handleChange = (dateSelected) => {
    setDate(dateSelected);
    if (props.style_cell === "rooms") {
      if (isChangeRoom === false) {
        dispatch(startEditing());
      }
      dispatch(
        updateAttrRoomById({
          id: props.room_id,
          attr: props.field,
          value: formatDateToString(dateSelected),
        })
      );
    }
    else if(props.style_cell === "contracts"){
      if (isChangeContract === false) {
        dispatch(startEditingContract());
      }
      dispatch(
        updateAttrContractById({
          id: props.room_id,
          attr: props.field,
          value: formatDateToString(dateSelected),
        })
      );
    }
    setFocusing(false);
  };
  const handleFocus = () => {
    setFocusing(true);
  };
  const handleBlur = () => {
    if(props.style_cell === "rooms"){
      if (isChangeRoom === true) {
        dispatch(
          updateAttrRoomById({
            id: props.room_id,
            attr: props.field,
            value: formatDateToString(date),
          })
        );
      }
    }else if(props.style_cell === "contracts"){
      if (isChangeContract === true) {
        dispatch(
          updateAttrContractById({
            id: props.room_id,
            attr: props.field,
            value: formatDateToString(date),
          })
        );
      }
    }
    setFocusing(false);
  };
  return (
    <>
      <DatePicker
        customInput={
          <InputMask
            className={props.type}
            style={{
              backgroundColor: `${focusing === true ? "#E8ECDD" : "inherit"}`,
              border: "none",
              fontSize: "inherit",
              minHeight: "50px",
              padding: "4px",
              borderRadius: "0px",
              border: `${focusing === true ? "1px solid #007bff" : "none"}`,
            }}
            type="text"
            mask="99/99/9999"
            ref={inputRef}
          />
        }
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="input-group input-group-sm input-group-calender">
            <div className="input-group-prepend">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  decreaseMonth();
                }}
                disabled={prevMonthButtonDisabled}
                className="btn"
                type="button"
              >
                <img
                  src="/left-arrow.png"
                  width={15}
                  height={15}
                  alt="icon-left"
                />
              </button>
            </div>

            <input
              type="number"
              onChange={({ target: { value } }) => changeYear(value)}
              value={date.getFullYear()}
              className="form-control"
              placeholder=""
              aria-label=""
              aria-describedby="basic-addon1"
            />
            <select
              className="form-control"
              value={months[date.getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="input-group-append">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  increaseMonth();
                }}
                className="btn"
                disabled={nextMonthButtonDisabled}
              >
                <img
                  src="/right-arrow-angle.png"
                  width={15}
                  height={15}
                  alt="icon-right"
                />
              </button>
            </div>
          </div>
        )}
        wrapperClassName={props.wrapperClassName}
        className="form-control"
        dateFormat="dd/MM/yyyy"
        minDate={false}
        selected={formatStringToDate(props.selected)}
        onChange={(dateSelected) => handleChange(dateSelected)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </>
  );
};

export default DatePickerCustom;
