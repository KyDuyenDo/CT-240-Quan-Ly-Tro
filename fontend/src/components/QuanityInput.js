import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAttrRoomById, startEditing } from "../redux/slices/roomSlice";

const QuanityInput = ({ value, style, styleBtn, type, room_id, field }) => {
  const dispatch = useDispatch();
  const isChange = useSelector((state) => state.rooms.isChange)
  let len = type === "day" ? 31 : 12;
  const [selectedValue, setSelectedValue] = useState(value);
  const [btnState, setBtnState] = useState(false);
  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if(isChange === false){
      dispatch(startEditing())
    }
    dispatch(updateAttrRoomById({id: room_id, attr:field, value: newValue}))
  };
  const handleBlur = () => {
    document.getElementById(type).classList.remove("active_btn");
  }
  const handleDropdownToggle = () => {
    setBtnState(!btnState);
    document.getElementById(type).classList.add("active_btn");
  };
  return (
    <div className="dropdown" style={{ width: style.width }}>
      <input
        className={type}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={styleBtn}
        onClick={handleDropdownToggle}
        onBlur={handleBlur}
        id={type}
        value={type === "day" ? "Ngày " + value : value + " tháng"}
      />
      <div className="dropdown-menu custom_menu">
        {Array.from({ length: len }, (_, index) => (
          <label className="dropdown-item custom_item" key={index}>
            <input
              className="jRadioDropdown"
              type="radio"
              value={index + 1}
              name="alphabet"
              checked={selectedValue === index + 1}
              onChange={handleRadioChange}
            />
            <span>
              {type === "day" ? "Ngày " + (index + 1) : index + 1 + " tháng"}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuanityInput;
