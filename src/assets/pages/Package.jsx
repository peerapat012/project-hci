import React from 'react'

function Package() {
    return (
        <div className='mt-[4rem]'>
            <div className='flex justify-center'>
            <h1 className='font-bold text-2xl underline'>ประวัติการจองหอพัก</h1>
            </div>
            
            <div className='flex justify-center w-[90rem] '>
                <div className='w-3/4  mt-6'>
                    <table class="table-auto border w-full">
                        <thead>
                            <tr className='border text-center'>
                                <th className='border-l'>ชื่อผู้จอง</th>
                                <th className='border-l'>วัน/เวลา</th>
                                <th className='border-l'>ตึก</th>
                                <th className='border-l'>ชั้น</th>
                                <th className='border-l'>เลขห้อง</th>
                                <th className='border-l'>ภาคการศึกษา</th>
                                <th className='border-l'>สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b text-center'>
                                <td>ภีระพัฒน์ ศรีศฤงฆาร</td>
                                <td>10 ก.ค. 2565 / 12.00 น.</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1101</td>
                                <td>1 / 2555</td>
                                <td className='text-green-600'>จ่ายเงินเรียบร้อยแล้ว</td>
                            </tr>
                            <tr className='border-b text-center'>
                                <td>ภีระพัฒน์ ศรีศฤงฆาร</td>
                                <td>10 พ.ย. 2565 / 12.00 น.</td>
                                <td>1</td>
                                <td>2</td>
                                <td>1201</td>
                                <td>2 / 2555</td>
                                <td className='text-yellow-400'>กำลังตรวจสอบ</td>
                            </tr>
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Package
