import React from 'react'
import qrCode from '../img/qr-code.png'

function Payment() {
    return (
        <div className='container border mt-2 flex flex-col items-center pt-4'>
            <h1 className='font-bold text-2xl'>Payment Pages</h1>
            <div className='container w-[40rem]  flex flex-col items-center'>
                <div className='w-[20rem] flex justify-center border'><img src={qrCode} alt="" /></div>
                <div className='container  flex justify-center'>
                    <h1 className='text-3xl text-blue-600'>แสกน QR เพื่อชำระเงิน</h1>
                </div>
                <div className='container pt-4'>
                    <div className='flex justify-center gap-4 text-2xl'>
                        <p>ชื่อบัญชี:</p>
                        <p>มก ศรีราชา</p>
                    </div>
                    <div className='flex justify-center gap-4 text-2xl'>
                        <p>จำนวนเงิน:</p>
                        <p>7900 บาท</p>
                    </div>
                </div>
                <div className='mt-[10rem] w-[30rem] '>
                    <div className='flex justify-center'><h1 className='text-4xl text-red-600'>โปรดชำระภายใน 7 วันทำการ</h1></div>
                </div>

            </div>
        </div>
    )
}

export default Payment
