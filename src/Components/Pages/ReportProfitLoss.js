import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const ReportProfitLoss = () => {
  return (
    <div>
      <div>
        <div className='bg-[#f5f5f5]'>
           <div className='px-8 pt-7'>
              <div className='flex justify-between '>
                 <div>
                    <h2 className='text-d_color text-[24px] font-medium'>Reports</h2>
                    <p className='cursor-pointer'><span className='text-[#727272]'>Dashboard /</span> <span className='text-d_color'>Profit & Loss Report</span></p>
                    <div className='mt-4'>
                        <button className='ds_reoprt_profit'>Profit</button>
                    </div>
                 </div>
                 <div>
                    <button className='ds_fincial_download flex items-center'>Download <IoIosArrowDown className='ms-1' /></button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ReportProfitLoss
