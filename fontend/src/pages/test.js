  // const [showConfirmation, setShowConfirmation] = useState(false);
  // const [dataSetRoom, setdataSetRoom] = useState(ROOMOBJECT);
  // const [changeRoom, setChangeRoom] = useState(ROOMOBJECT);
  // const dispatch = useDispatch();
  // Goi API, chay 1 lan []
  // Cap nhat setdataSetRoom voi API du lieu
//   const handleCellChange =  (cellName, value) => {
//     setdataSetRoom((prevData) => ({
//      ...prevData,
//      [cellName]: value,
//    }));
//  };
  // const [filterState, setFilterState] = useState({
  //   is_active: false,
  //   is_empty: false,
  //   is_terminate_contract: false,
  //   is_will_terminate_contract: false,
  //   is_expire: false,
  //   is_deposit_temp: false,
  // });
  // const handleCompleteChange = (room) => {
  //   let newArray = [...changeRoom];

  //   const index = newArray.findIndex((item) => item.id === room.id);
  //   if (index !== -1) {
  //     newArray.splice(index, 1, room);
  //   } else {
  //     newArray.push(room);
  //   }
  //   setChangeRoom(newArray);
  // };

  // let compareTwoArrayOfObjects = (
  //   first_array_of_objects,
  //   second_array_of_objects
  // ) => {
  //   const sortedArr1 = first_array_of_objects.sort((a, b) =>
  //     a.id > b.id ? 1 : -1
  //   );
  //   const sortedArr2 = second_array_of_objects.sort((a, b) =>
  //     a.id > b.id ? 1 : -1
  //   );
  //   return (
  //     sortedArr1.length === sortedArr2.length &&
  //     sortedArr1.every((element_1) =>
  //       sortedArr2.some((element_2) =>
  //         Object.keys(element_1).every(
  //           (key) => element_1[key] === element_2[key]
  //         )
  //       )
  //     )
  //   );
  // };
  // useEffect(() => {
  //   if (compareTwoArrayOfObjects(changeRoom, ROOMOBJECT) === false) {
  //     setShowConfirmation(true);
  //   }
  // }, [changeRoom]);
  // useEffect(()=>{
  //   let room1 = dataSetRoom.filter((item) => item.id === "1")// mảng
  //   let room = room1[0]
  //   room.customers = parseInt(room.customers) + 1;
  //   let newRooms = dataSetRoom.filter((item) => item.id !== "1")
  //   newRooms.push(room)
  //   // console.log(newRooms)
  //   setdataSetRoom(newRooms)
  // })
  // useEffect(() => {
  //   console.log(dataSetRoom);
  // }, [dataSetRoom]);
  // const handleConfirmClick = () => {
  //   setdataSetRoom(changeRoom);
  //   setShowConfirmation(false);
  //   console.log("Save!");
  // };

  // const handleCancelClick = () => {
  //   setChangeRoom(ROOMOBJECT);
  //   setdataSetRoom(dataSetRoom);
  //   setShowConfirmation(false);
  //   console.log("Cancel!");
  // };