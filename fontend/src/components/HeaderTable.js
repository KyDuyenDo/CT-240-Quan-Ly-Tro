import React from "react";

const HeaderTable = ({text, style, classState, field}) => {
  return (
    <>
      <div
        class={"tabulator-col justify-content-center " + classState}
        role="columnheader"
        aria-sort="none"
        tabulator-field={field}
        style={{...style, minWidth: "40px", height:"59px"}}
      >
        <div class="tabulator-col-content">
          <div class="tabulator-col-title-holder">
            <div class="tabulator-col-title">{text}</div>
          </div>
        </div>
      </div>
      <span class="tabulator-col-resize-handle" style={{height: "59px"}}></span>
    </>
  );
};

export default HeaderTable;
