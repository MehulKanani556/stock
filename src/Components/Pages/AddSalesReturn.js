import React, { useRef } from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import '../CSS/Dhruvin/Quotation.css'

const AddSalesReturn = () => {

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
             <h2 className='text-d_color text-[24px] font-medium'>Add Sales Return</h2>
             <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={()=> navigate("/Layout/SalesReturn")} className='text-[#727272]'>Sales  /</span> <span className='text-d_color font-semibold'>Add Sales Return</span></p>
          </div>              
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-8 px-2 pb-7 pt-8'>
                  <div className="flex flex-wrap">
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Customer Name</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter customer name" required />
                          </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                            <div className='relative'>
                               <label className='text-d_color font-medium block mb-1'>Date</label>
                               <input ref={dateInputRef} type="date" className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter Email'/>
                               <FaCalendarAlt onClick={handleIconClick} className='absolute top-[39px] right-[15px] cursor-pointer' fill='#36454F' />
                            </div>
                      </div>
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Payment Status</label>
                               <select className='ds_Select'>
                                 <option value="">Select Payment Status</option>
                                 <option value="">Paid</option>
                                 <option value="">Due</option>
                               </select>
                          </div>
                      </div>
                      <div className=" sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Product Name</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter Product Code or Name" required />
                          </div>
                      </div> 
                      
                  </div>

                  <div className='mt-0 px-4 mb-[100px] overflow-x-auto'>
                    <table className='w-full ds_quotation_table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Net Unit Price ($)</th>
                                <th>Stock</th>
                                <th>Qty</th>
                                <th>Discount ($)</th>
                                <th>Tax(%)</th>
                                <th>Sub Cost(%)</th>
                            </tr>
                        </thead>
                    </table>
                  </div>

                  <div className='mt-10 mb-10 flex justify-end sm:px-0 px-3'>
                     <table className='ds_mini_table xl:w-1/4 lg:w-2/5 md:w-3/5 sm:w-full w-full'>
                       <tbody>
                        <tr>
                          <td  style={{borderRight:"1px solid #727272" , backgroundColor:"rgba(114, 114, 114, 0.1)"}} className='text-[#727272]'>Order Tax</td>
                          <td className='text-[#727272]'>$ 0.00</td>
                        </tr>
                        <tr>
                          <td  style={{borderRight:"1px solid #727272" , backgroundColor:"rgba(114, 114, 114, 0.1)"}} className='text-[#727272]'>Discount</td>
                          <td className='text-[#727272]'>$ 0.00</td>
                        </tr>
                        <tr>
                          <td  style={{borderRight:"1px solid #727272" , backgroundColor:"rgba(114, 114, 114, 0.1)"}} className='text-[#727272]'>Shipping</td>
                          <td className='text-[#727272]'>$ 0.00</td>
                        </tr>
                        <tr>
                          <td  style={{borderRight:"1px solid #727272" , backgroundColor:"rgba(114, 114, 114, 0.1)" , borderBottom:"0"}} className='text-[#727272]'>Total Amount</td>
                          <td className='text-[#727272]' style={{ borderBottom:"0"}}>$100.00</td>
                        </tr>
                       </tbody>
                     </table>
                  </div>

                  <div className='flex justify-center mt-11 pt-5 mb-3'>
                     <button className='ds_cancel_btn me-5' onClick={()=> navigate("/Layout/SalesReturn")}>Cancel</button>
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

export default AddSalesReturn
