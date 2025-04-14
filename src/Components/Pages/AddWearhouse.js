import React from 'react'

const AddWearhouse = () => {
  return (
    <div>
      <div className='ds_main'>
       <div className='sm:px-8 px-4 pt-7'>
          <div>
             <h2 className='text-d_color text-[24px] font-medium'>Add Wearhouse</h2>
             <p className='cursor-pointer'><span className='text-[#727272]'>Dashboard /</span> <span className='text-[#727272]'>Wearhouse /</span> <span className='text-d_color font-semibold'>Add Wearhouse</span></p>
          </div>
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-8 px-2 pb-7 pt-8'>
                  <div className="flex flex-wrap">
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Wearhouse Name</label>
                               <input type="email" id="text" className="ds_main_input" placeholder="Enter Wearhouse Name" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Contact Person Name</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Contact Person Name" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Contact No.</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Contact No." required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Email</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Email" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Address Line 1</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Address " required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Address Line 2</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Address" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Zipcode</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Address" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">City</label>
                               <select className='ds_Select'>
                                 <option value="">Select City</option>
                                 <option value="">Jaipur</option>
                                 <option value="">Udaipur</option>
                               </select>
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">State</label>
                               <select className='ds_Select'>
                                 <option value="">Select State</option>
                                 <option value="">Rajasthan</option>
                                 <option value="">Delhi</option>
                               </select>
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
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

export default AddWearhouse
