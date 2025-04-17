import React, { useRef } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const EditExpense = () => {

const dateInputRef = useRef(null);
const navigate = useNavigate() 


const handleIconClick = () => {
    dateInputRef.current.showPicker?.(); 
    dateInputRef.current.focus();
};    

  return (
    <div>
      <div className='ds_main'>
       <div className='sm:px-8 px-4 pt-7'>
          <div>
             <h2 className='text-d_color text-[24px] font-medium'>Edit Expense</h2>
             <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={()=> navigate("/Layout/Expense")} className='text-[#727272]'>Expense /</span> <span className='text-d_color font-semibold'>Edit Expense</span></p>
          </div>              
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-8 px-2 pb-7 pt-8'>
                  <div className="flex flex-wrap">
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Expense Category</label>
                               <select className='ds_Select'>
                                 <option value="">Select Expense Category</option>
                                 <option value="">Jaipur</option>
                                 <option value="">Udaipur</option>
                               </select>
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Expense Name</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Expense Name" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Amount</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="$" required />
                          </div>
                      </div>
                      <div className="lg:w-1/2 md:1/2 sm:w-full w-full mb-5 px-4 pt-1">
                            <div className='mb-4'>
                                <div className='relative'>
                                   <label className='text-d_color font-medium block mb-1'>Date</label>
                                   <input ref={dateInputRef} type="date" className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter Email'/>
                                   <FaCalendarAlt onClick={handleIconClick} className='absolute top-[39px] right-[15px] cursor-pointer' fill='#36454F' />
                                </div>
                            </div>
                      </div>
                      
                      <div className="lg:w-1/2 md:1/2 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Status</label>
                               <select className='ds_Select'>
                                 <option value="">Select Status</option>
                                 <option value="">Active</option>
                                 <option value="">InActive</option>
                               </select>
                          </div>
                      </div>
                  </div>
                  <div className='flex justify-center mt-8 mb-3'>
                     <button className='ds_cancel_btn me-5'>Cancel</button>
                     <button className='ds_add_btn'>Add</button>
                  </div>
               </div>

            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default EditExpense
