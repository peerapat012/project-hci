import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { GoPackage } from 'react-icons/go'
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
import { MdMonetizationOn } from 'react-icons/md'


function Sidebar() {
    return (
        <div class="min-h-screen w-72  px-4   bg-gray-500 text-white">
            <div class="py-3 flex justify-end">
                <i data-feather="align-right"></i>
            </div>
            <div class="mt-4 flex flex-col justify-end gap-4 relative ">

                    <div class="flex flex-col gap-4 ">
                        <Link className='link flex items-center' to="/users">
                            <AiOutlineUser />
                            <h2 class="px-4">ข้อมูลนิสิต</h2>
                        </Link>
                        <Link className='link flex items-center' to="userbooking">
                            <BsFillCartCheckFill />
                            <h2 class="px-4">จองห้องพัก</h2>
                        </Link>
                        <Link className='link flex items-center' to="userbooking/payment">
                            <MdMonetizationOn />
                            <h2 class="px-4">การเงิน</h2>
                        </Link>
                        <Link className='link flex items-center' to="package">
                            <GoPackage />
                            <h2 class="px-4">ประวัติการจอง</h2>
                        </Link>

                    </div>

                    <div>
                        
                        <Link className='link flex items-center' to="/">
                            <AiOutlineLogout />
                            <h2 class="px-4">ออกจากระบบ</h2>
                        </Link>
                    </div>
               
            </div>
        </div>
    )
}

export default Sidebar
