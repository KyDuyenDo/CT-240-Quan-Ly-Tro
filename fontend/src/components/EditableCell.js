import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAttrRoomById, startEditing } from "../redux/slices/roomSlice";
function EditableCell({room_id, value, style, field, type, unit }) {
  const dispatch = useDispatch()
  const isChange = useSelector((state) => state.rooms.isChange);
  const [editing, setEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const inputReference = useRef(null);
  useEffect(() => {
    inputReference.current.focus();
    if(editing === false){

    }
  }, [editing]);
  const handleClick = () => {
    setLocalValue(value)
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setLocalValue(event.target.value);
    if(isChange === false){
      dispatch(startEditing())
    }
  };

  const handleInputBlur = () => {
    setEditing(false);
    if(isChange === true){
      if (localValue !== value) {
        dispatch(updateAttrRoomById({id: room_id, attr: field, value: localValue}))
      }
    }
  };

  return (
    <div
      className={"tabulator-cell edit_enable tabulator-editable" + (editing ===true ? " tabulator-editing": "")}
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
        style={{display: "flex", alignItems: "center", height: "100%", width: "100%", backgroundColor:"inherit" }}
      >
        <p className={"m-0 " + style.fontWeight}>{type === "text" ? value + unit : (new Intl.NumberFormat("de-DE").format(value)) + " " + unit}</p>
        <div></div>
      </div>
      <input
        ref={inputReference}
        className={editing === true ? " " : "d-none"}
        type={type}
        style={{
          backgroundColor:"inherit",
          outline: "none",
          border: "none",
          padding: "4px",
          height: "100%",
          width: "100%",
          boxSizing: "border-box"
        }}
        value={localValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default EditableCell;