import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Modal from "../components/Modal"
import ku from '../img/Logo.png'
import data from "../data.js";
import Swal from "sweetalert2";



function Userbooking() {

    const [modal, setModal] = useState(false);


    const clickSubmit = (e) => {


        Swal.fire({
            icon: 'success',
            title: 'คุณได้ทำการจองห้องเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            window.location = "/users/userbooking/payment"
        })
    }

    const toggleModal = (e) => {
        setModal(!modal)
    }

    const [buildingState, setBuildingState] = useState();
    const [floorState, setFloorState] = useState();
    const [roomState, setRoomState] = useState();

    const onChangeBuilding = (e) => {
        const selectedId = e.target.value;
        const selectedBuildingState = data.filter((d) => d.id == selectedId)[0];
        // console.log(selectedBuildingState);
        setBuildingState(selectedBuildingState);
    }
    const onChangeFloor = (e) => {
        const selectedFloorId = e.target.value;
        const selectedFloorState = buildingState?.floor.filter((f) => f.id == selectedFloorId)[0];
        // console.log(selectedFloorState);
        setFloorState(selectedFloorState);
    }
    const onChangeRoom = (e) => {
        const selectedRoomId = e.target.value;
        const selectedRoomstate = floorState?.room.filter((r) => r.id == selectedRoomId)[0];
        // console.log(selectedRoomstate);
        setRoomState(selectedRoomstate);
        console.log(roomState);

    }



    return (
        <div className="m-3 text-xl font-semibold flex flex-col items-center w-[90rem] border ">
            <div className="text-center p-5 mt-[5rem]">
                <h1 className="text-2xl underline">จองห้องพัก</h1>
            </div>
            <form action="bookingAction.php">
                <div className=" mt-5">
                    <div className="px-5 my-3">
                        <h1>ตึกที่:</h1>
                        <select className='w-[16rem] border rounded' onChange={(e) => {
                            onChangeBuilding(e);
                        }}>
                            {data.map((d) => (
                                <option key={d.id} value={d.id}> {d.title} </option>
                            ))}
                        </select>

                        {/* <input class="text-gray-400 pl-3 rounded h-[2rem] border" type="text" /> */}
                    </div>
                    <div class="px-5 my-3">
                        <h1>ชั้นที่:</h1>
                        <select className='w-[16rem] border rounded' onChange={(e) => {
                            onChangeFloor(e);
                        }}>
                            {buildingState?.floor.map((f) => (
                                <option key={f.id} value={f.id}> {f.title} </option>
                            ))}
                        </select>
                    </div>
                    <div class="px-5 my-3">
                        <h1>ห้อง:</h1>
                        <select name="" id="" className='w-[16rem] border rounded' onChange={(e) => {
                            onChangeRoom(e);
                        }}>
                            {floorState?.room.map((r) => (
                                <option key={r.id} value={r.id}> {r.room} ราคา {r.price} บาท/เทอม</option>
                            ))}
                        </select>
                    </div>
                </div>


                {/* Modal Popup */}
                <div className="mt-5">
                    <div className="px-5 p-2">
                        <button onClick={toggleModal} class=" h-[3rem] w-[6rem] bg-emerald-400 rounded hover:drop-shadow-xl" type="button">จอง</button>
                        {modal && (
                            <div className=" fixed inset-0 bg-red-100 border-2 bg-opacity-30 backdrop-blur rounded min-w-full p-3 flex justify-center">
                                <div className="modalContainer w-1/2 flex flex-col justify-center text-center items-center border-4 fixed h-[35rem]">
                                    <div className="border-b-4 pb-2"><img src={ku} alt="" /></div>
                                    <div className="content w-[50rem]">
                                        <form action="" className="flex flex-col items-center ">
                                            <div className="flex  justify-between text-center py-3 gap-3">
                                                <h1>ชื่อ-นามสกุล:</h1>
                                                <p>ภีระพัฒน์ ศรีศฤงฆาร</p>
                                            </div>
                                            {/* <div className="flex justify-between items-center text-center py-3 gap-3">
                                                <h1>ประเภทห้อง:</h1>
                                                <p>2 คน</p>
                                            </div> */}
                                            <div className="flex justify-between items-center text-center py-3 gap-3">
                                                <h1>ตึกที่:</h1>
                                                <p>{buildingState.title}</p>
                                            </div>
                                            <div className="flex justify-between items-center text-center py-3 gap-3">
                                                <h1>ชั้นที่:</h1>
                                                <p>{floorState.title}</p>
                                            </div>
                                            <div className="flex justify-between items-center text-center py-3 gap-3">
                                                <h1>ห้องที่:</h1>
                                                <p>{roomState.room}</p>
                                            </div>
                                            <div className="flex justify-between items-center text-center py-3 gap-3">
                                                <h1>ราคา:</h1>
                                                <p>{roomState.price} / เทอม</p>
                                            </div>
                                            <div className="btnContainer  min-w-full">
                                                <div className="flex justify-between">
                                                    <button onClick={clickSubmit} className="h-[3rem] w-1/3 bg-emerald-400 rounded hover:drop-shadow-xl flex items-center justify-center" type="button">ยืนยันการจอง</button>
                                                    <button onClick={toggleModal} className="h-[3rem] w-1/3 bg-red-400 rounded hover:drop-shadow-xl" type="button">ยกเลิกการจอง</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Userbooking
