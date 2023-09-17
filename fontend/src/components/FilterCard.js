import React from "react";

const FilterCard = ({ info, color, text, value}) => {
  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={value}
          data-value="status"
          value={value}
        />
        <label className="form-check-label" for={value}>
          {text}
        </label>
        <span className={"count-filter" + " " + info + " " + color}>0</span>
      </div>
    </div>
  );
};

export default FilterCard;
