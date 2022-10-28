import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Login() {

    const clickLogin = (e) => {

        Swal.fire({
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            window.location = "/users"
        })
    }

  return (
    <div>
      <form className='min-h-screen flex items-center justify-center'>
        <div class="flex justify-center mt-10 " >
            <div class="py-5 border w-[30rem] text-center rounded ">
                <div class="flex justify-center ">
                    <h1 class="text-xl">
                        เข้าสู่ระบบ
                    </h1>
                </div>

                <div class="">
                    <div class="py-4">
                        <input class="border rounded-full py-1 text-center w-[16rem]" type="text" placeholder='รหัสนิสิต'/>
                        
                    </div>

                    <div class="py-2">
                        <input class="border rounded-full py-1 text-center w-[16rem]" type="password" placeholder='รหัสผ่าน' />
                    </div>
                </div>


                <div class="px-2 py-2 flex justify-center">
                    {/* <Link className='link bg-green-500 rounded-full w-[7rem] h-[2rem] hover:bg-gray-400 hover:text-white' to="/users">เข้าสู่ระบบ</Link> */}
                    <button type="button" onClick={clickLogin} class="bg-green-500 rounded-full w-[7rem] h-[2rem] hover:bg-gray-400 hover:text-white">เข้าสู่ระบบ</button>
                </div>
            </div>
            </div>
    </form>
    </div>
  )
}

export default Login
