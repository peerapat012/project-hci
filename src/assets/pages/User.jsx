import React from 'react'
import userLogo from '../img/facebook.jpg'
import max from '../img/max.jpg'

function User() {
    return (
        <div class="m-3 text-xl  font-semibold   w-3/4 ">
            <div class="text-center">
                <h1 class="text-2xl pt-[5rem] underline">ข้อมูลนิสิต</h1>
            </div>
            <div class="container  mt-[6rem] mx-auto flex items-center justify-center">
                <div class="container border w-[60rem] rounded  items-center p-2">
                    <div class="flex flex-col items-center">
                        <div className='w-1/2  flex justify-center'>
                            <img className='h-[20rem] w-[20rem] rounded-full' src={max} alt="" />
                        </div>

                        <div className='w-1/2  flex flex-col items-center'>
                            <p class="py-3">รหัสนิสิต: 6230202573</p>
                            <p class="py-3">ชื่อ - นามสกุล: ภีระพัฒน์ ศรีศฤงฆาร</p>
                            <p class="py-3">คณะ: วิทยาศาสตร์</p>
                            <p class="py-3">สาขา: เทคโนโลยีสารสนเทศ</p>
                            <p class="py-3">ชั้นปีที่: 4</p>
                            <div class="">
                                <div class="">
                                    <p class="py-3">ตึก: 2</p>
                                </div>

                                <div class="">
                                    <p class="py-3">ชั้น: 4</p>
                                </div>
                            </div>
                            <p class="py-3">ห้อง: 403</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
