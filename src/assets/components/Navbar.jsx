import React from 'react'
import Logo from '../img/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="mt-3 flex justify-between px-20 items-center sticky-top-0">
            <Link className='link text-2xl font-bold' to="/"><img src={Logo} alt="" /></Link>
            <div class="hidden lg:flex items-center text-xl ">
                <ul class="flex">
                    <li class="px-4 hover:shadow-md hover:rounded">
                        <a href="http://dorm.admin.src.ku.ac.th/pdf/22_01_2565_doc513.pdf">ระเบียบหอพัก</a>
                    </li>
                </ul>
                <div class="px-4 text-center">
                    <div class="rounded-full  h-[3rem] w-[9rem] bg-green-400 pt-2 text-white">
                        <Link className='link' to="login">เข้าสู่ระบบ</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
