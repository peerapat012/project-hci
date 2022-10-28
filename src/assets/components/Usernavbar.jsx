import React from 'react'
import Logo from '../img/Logo.png'
import { Link } from 'react-router-dom'
import Logo2 from '../img/logonn.png'

function Usernavbar() {
    return (
        <nav class="p-2 flex justify-between px-20 items-center sticky-top-0 bg-gray-500 text-white">
            <Link className='link text-2xl font-bold' to="/"><img className='' src={Logo} alt="" /></Link>
            <div class="hidden lg:flex items-center text-xl ">
                <ul class="flex">
                    <li class="px-4 hover:shadow-md hover:rounded">
                        <a href="http://dorm.admin.src.ku.ac.th/pdf/22_01_2565_doc513.pdf">ระเบียบหอพัก</a>
                    </li>
                </ul>
                <div class="px-4 text-center">
                    <span>ภีระพัฒน์</span>
                </div>
            </div>
        </nav>
    )
}

export default Usernavbar
