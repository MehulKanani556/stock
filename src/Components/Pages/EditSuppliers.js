import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from '../Images/Dhruvin/mini_product.png'

const EditSuppliers = () => {

    const navigate = useNavigate()
    const fileInputRef = useRef(null);
    
    const handleButtonClick = () => {
        fileInputRef.current.click();
      };
    
     const handleFileChange = (event) => {
       const file = event.target.files[0];
    };    

  return (
    <div>
      <div className='ds_main'>
       <div className='sm:px-8 px-4 pt-7'>
          <div>
             <h2 className='text-d_color text-[24px] font-medium'>Edit Supplier</h2>
             <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={()=> navigate("/Layout/Supplier")} className='text-[#727272]'>Supplier /</span> <span className='text-d_color font-semibold'>Edit Supplier</span></p>
          </div>              
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-8 px-2 pb-7 pt-8'>
                  <div className="flex flex-wrap">
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Supplier Name</label>
                               <input type="email" id="text" className="ds_main_input" placeholder="Enter Supplier Name" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Store Name</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Store Name" required />
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
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Contact No.</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Contact No." required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Address</label>
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
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Country</label>
                               <select className='ds_Select'>
                                 <option value="">Select Country</option>
                                 <option value="">India</option>
                                 <option value="">Usa</option>
                               </select>
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div className='relative'>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Image</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Select Image" required />
                               <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange}/>
                               <div onClick={handleButtonClick} className='absolute top-[36px] right-[14px] bg-[#16325B] text-white rounded-[4px] px-3 text-[14px]'>
                                  Change
                               </div>
                               <div className='absolute top-[32px] left-[13px]'>
                                  <img src={Product} alt="" className='w-[30px]' />
                               </div>
                          </div>
                      </div>
                  </div>
                  <div className='flex justify-center mt-8 mb-3'>
                     <button className='ds_cancel_btn me-5' onClick={()=> navigate("/Layout/Supplier")}>Cancel</button>
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

export default EditSuppliers
