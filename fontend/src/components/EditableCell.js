import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAttrRoomById, startEditing } from "../redux/slices/roomSlice";
import { updateAttrInvoiceById, startEditingInvoice } from "../redux/slices/invoiceSlice";
import { updateAttrContractById, startEditingContract } from "../redux/slices/contractSlice";
function EditableCell({
  room_id,
  value,
  style,
  field,
  type,
  unit,
  style_cell,
}) {
  const dispatch = useDispatch();
  const isChangeRoom = useSelector((state) => state.rooms.isChange);
  const isChangeInvoice = useSelector((state) => state.invoices.isChange)
  const isChangeContract = useSelector((state) => state.contracts.isChange)
  const [editing, setEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const inputReference = useRef(null);
  useEffect(() => {
    inputReference.current.focus();
    if (editing === false) {
    }
  }, [editing]);
  const handleClick = () => {
    // setLocalValue(value)
    setEditing(true);
  };
  const handleInputChange = (event) => {
    setLocalValue(event.target.value);
    if (isChangeRoom === false && style_cell === "rooms") {
      dispatch(startEditing());
    }
    else if(isChangeInvoice === false && style_cell === "invoices"){
      dispatch(startEditingInvoice())
    }else if(isChangeContract === false && style_cell === "contracts"){
      dispatch(startEditingContract())
    }
  };

  const handleInputBlur = () => {
    setEditing(false);
    if (isChangeRoom === true && style_cell==="rooms") {
      if (localValue !== value) {
        dispatch(
          updateAttrRoomById({ id: room_id, attr: field, value: localValue })
        );
      }
    }
    else if(isChangeInvoice === true && style_cell==="invoices") {
      if (localValue !== value) {
        dispatch(
          updateAttrInvoiceById({ id: room_id, attr: field, value: localValue })
        );
      }
    }else if(isChangeContract === true && style_cell === "contracts"){
      if(localValue != value){
        dispatch(updateAttrContractById({ id: room_id, attr: field, value: localValue }))
      }
    }
  };

  return (
    <div
      className={
        "tabulator-cell edit_enable tabulator-editable" +
        (editing === true ? " tabulator-editing" : "")
      }
      role="gridcell"
      tabulator-field={field}
      tabIndex="0"
      style={{
        width: style.width,
        textAlign: "left",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: style.height,
      }}
      onClick={handleClick}
    >
      <div
        className={editing === true ? "d-none" : " "}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "inherit",
        }}
      >
        <p className={"m-0 " + style.fontWeight}>
          {type === "text"
            ? value + unit
            : new Intl.NumberFormat("de-DE").format(value) + " " + unit}
        </p>
        <div></div>
      </div>
      <input
        ref={inputReference}
        className={editing === true ? " " : "d-none"}
        type={type}
        style={{
          backgroundColor: "inherit",
          outline: "none",
          border: "none",
          padding: "4px",
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
        }}
        value={localValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default EditableCell;
