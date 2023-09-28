import React from "react";
import FilterCard from "./FilterCard";
const ListFilterCard = ({ filters,  setFilterState, filterState}) => {
  return (
    <div>
      <div className="header-table header-item">
        <div className="d-flex">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-filter"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span id="filter-count">0</span>
          </div>
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            {filters.map((filter) => {
              return (
                <FilterCard
                  key={filter.value}
                  info={filter.info}
                  color={filter.color}
                  text={filter.text}
                  data={filter.data}
                  value={filter.value}
                  number={filter.number}
                  filterState={filterState}
                  setFilterState={setFilterState}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFilterCard;