import React from "react"
import ku from "../img/Logo.png"

function Modal() {

    return (
        <div className=" fixed inset-0 bg-red-100 border-2 bg-opacity-30 backdrop-blur rounded min-w-full p-3 flex justify-center">
            <div className="modalContainer w-1/2 flex flex-col justify-center text-center items-center border-4 fixed h-[35rem]">
                <div className="border-b-4 pb-2"><img src={ku} alt="" /></div>
                <div className="content w-[50rem]">
                    <form action="">
                        <div className="flex justify-between items-center text-center py-3">
                            <h1>ชื่อ-นามสกุล:</h1>
                            <p>ภีระพัฒน์ ศรีศฤงฆาร</p>
                        </div>
                        <div className="flex justify-between items-center text-center py-3">
                            <h1>ประเภทห้อง:</h1>
                            <p>2 คน</p>
                        </div>
                        <div className="flex justify-between items-center text-center py-3">
                            <h1>ตึกที่:</h1>
                            <p>4</p>
                        </div>
                        <div className="flex justify-between items-center text-center py-3">
                            <h1>ห้องที่:</h1>
                            <p>403</p>
                        </div>
                        <div className="flex justify-between items-center text-center py-3">
                            <h1>ราคา:</h1>
                            <p>7900 / เทอม</p>
                        </div>
                        <div className="btnContainer  min-w-full">
                            <div className="flex justify-between">
                                <button class="h-[3rem] w-1/3 bg-emerald-400 rounded hover:drop-shadow-xl" type="button">ยืนยันการจอง</button>
                                <button  onClose class="h-[3rem] w-1/3 bg-red-400 rounded hover:drop-shadow-xl" type="button">ยกเลิกการจอง</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
