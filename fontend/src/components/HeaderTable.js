import React from "react";

const HeaderTable = ({text, style, classState, field}) => {
  return (
    <>
      <div
        className={"tabulator-col justify-content-center " + classState}
        role="columnheader"
        aria-sort="none"
        tabulator-field={field}
        style={{...style, minWidth: "40px", height:"59px"}}
      >
        <div className="tabulator-col-content">
          <div className="tabulator-col-title-holder">
            <div className="tabulator-col-title">{text}</div>
          </div>
        </div>
      </div>
      <span className="tabulator-col-resize-handle" style={{height: "59px"}}></span>
    </>
  );
};

export default HeaderTable;
