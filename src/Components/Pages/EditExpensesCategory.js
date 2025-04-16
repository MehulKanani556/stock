import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditExpensesCategory = () => {

const navigate = useNavigate() 

  return (
    <div>
       <div className='ds_main'>
       <div className='sm:px-8 px-4 pt-7'>
          <div>
             <h2 className='text-d_color text-[24px] font-medium'>Edit Expense Category</h2>
             <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={()=> navigate("/Layout/ExpenseCategory")} className='text-[#727272]'>Expense category /</span> <span className='text-d_color font-semibold'>Edit Expense Category</span></p>
          </div>              
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-8 px-2 pb-7 pt-8'>
                  <div className="flex flex-wrap">
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Expense Category</label>
                               <input type="email" id="text" className="ds_main_input" placeholder="Enter Expense Category" required />
                          </div>
                      </div>
                      <div className="lg:w-2/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Description</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Description" required />
                          </div>
                      </div>
                      
                  </div>
                  <div className='flex justify-center mt-8 mb-3'>
                     <button className='ds_cancel_btn me-5'>Cancel</button>
                     <button className='ds_update_btn'>Update</button>
                  </div>
               </div>

            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default EditExpensesCategory
