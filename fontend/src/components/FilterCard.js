import React from "react";

const FilterCard = ({ info, color, text, value, filterState, setFilterState}) => {
  const handleFilterChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setFilterState(prevState => ({ ...prevState, [value]: isChecked }));
  };
  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id={value}
          data-value="status"
          value={value}
          checked={filterState[value]}
          onChange={handleFilterChange}
        />
        <label className="form-check-label" htmlFor={value}>
          {text}
        </label>
        <span className={"count-filter" + " " + info + " " + color}>0</span>
      </div>
    </div>
  );
};

export default FilterCard;
