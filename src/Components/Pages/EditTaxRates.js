import React from 'react'

const EditTaxRates = () => {
  return (
    <div>
      <div className='bg-[#f5f5f5]'>
       <div className='px-8 pt-7'>
          <div>
             <h2 className='text-d_color text-[24px] font-medium'>Edit Tax Rates</h2>
             <p className='cursor-pointer'><span className='text-[#727272]'>Dashboard /</span> <span className='text-[#727272]'>Tax Rates /</span> <span className='text-d_color font-medium'>Edit Tax Rates</span></p>
          </div>
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='px-8 pb-7 pt-8'>
                  <div className="flex flex-wrap">
                      <div className="w-1/3 mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Tax Name</label>
                               <input type="email" id="text" className="ds_main_input" placeholder="Enter Tax Name" required />
                          </div>
                      </div>
                      <div className="w-1/3 mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Tax Rate (%)</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Tax Name" required />
                          </div>
                      </div>
                      <div className="w-1/3 mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Status</label>
                               <select className='ds_main_input'>
                                 <option value="">Select Currency Symbol</option>
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

export default EditTaxRates
