import React, { useRef } from 'react'
import { FaCalendarAlt, FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import '../CSS/Dhruvin/Quotation.css'
import product from '../Images/Dhruvin/product.png'
import Search from '../Images/Dhruvin/search-icon.svg'

const EditSales = () => {

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
             <h2 className='text-d_color text-[24px] font-medium'>Edit Sales </h2>
             <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={()=> navigate("/Layout/Sales")} className='text-[#727272]'>Sales /</span> <span className='text-d_color font-semibold'>Edit Sales</span></p>
          </div>              
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-8 px-2 pb-7 pt-8'>
               <div className="flex flex-wrap">
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                            <div className='relative'>
                               <label className='text-d_color font-medium block mb-1'>Date</label>
                               <input ref={dateInputRef} type="date" className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter Email'/>
                               <FaCalendarAlt onClick={handleIconClick} className='absolute top-[39px] right-[15px] cursor-pointer' fill='#36454F' />
                            </div>
                      </div>

                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Customer Name</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter customer name" required />
                          </div>
                      </div>

                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Contact No.</label>
                               <input type="text" id="text" className="ds_main_input" placeholder="Enter contact no" required />
                          </div>
                      </div>

                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Store</label>
                               <select className='ds_Select'>
                                 <option value="">Select Store </option>
                               </select>
                          </div>
                      </div>
                      
                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Payment Status</label>
                               <select className='ds_Select'>
                                 <option value="">Select Payment Status</option>
                                 <option value="">Paid</option>
                                 <option value="">Due</option>
                               </select>
                          </div>
                      </div>

                      <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div className='relative'>
                               <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Product Name</label>
                               <input type="text" id="text" className="ds_main_input" style={{paddingLeft:"35px"}} placeholder="Enter Product Code or Name" required />
                               <div className='absolute top-[38px] left-[10px]'>
                                  <img src={Search} alt="" />
                               </div>
                          </div>
                      </div>

                      
                  </div>

                  <div className='mt-3 px-4  overflow-x-auto'>
                    <table className='w-full ds_quotation_table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price ($)</th>
                                <th>Discount ($)</th>
                                <th>Tax(%)</th>
                                <th>Tax Amount ($)</th>
                                <th>Unit Price($)</th>
                                <th>Total Cost(%)</th>
                            </tr>
                        </thead>
                        <tbody>
                         <tr>
                             <td className='flex align-middle'>
                                <img src={product} alt="" className='w-[25px] me-2' />
                                <span className='mt-1'>Blue Pen</span>
                            </td>
                            <td>
                                <div className='ds_quotation_btn'>
                                    <div className='flex items-center justify-between h-full w-full px-2'>
                                      <FaMinus className='text-white m-1 p-1 text-[18px] border border-white rounded-[4px]' />
                                      <p className='text-white'>10</p>
                                      <FaPlus className='text-white m-1 p-1 text-[18px] border border-white rounded-[4px]' />
                                    </div>
                                </div>
                            </td>
                            <td>$2500</td>                            
                            <td>$200</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>$5</td>
                            <td>$50</td>
                         </tr>
                         <tr>
                             <td className='flex align-middle'>
                                <img src={product} alt="" className='w-[25px] me-2' />
                                <span className='mt-1'>Blue Pen</span>
                            </td>
                            <td>
                                <div className='ds_quotation_btn'>
                                    <div className='flex items-center justify-between h-full w-full px-2'>
                                      <FaMinus className='text-white m-1 p-1 text-[18px] border border-white rounded-[4px]' />
                                      <p className='text-white'>10</p>
                                      <FaPlus className='text-white m-1 p-1 text-[18px] border border-white rounded-[4px]' />
                                    </div>
                                </div>
                            </td>
                            <td>$2500</td>                            
                            <td>$200</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>$5</td>
                            <td>$50</td>
                         </tr>
                       </tbody>
                     
                   </table>                   
                   <span className='ds_quotation_table w-full block border-[0.1px] border-[#727272] mt-3'></span>

                  </div>

                  <div className='mt-10 mb-10 flex justify-end'>
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
                          <td  style={{borderRight:"1px solid #727272" , backgroundColor:"rgba(114, 114, 114, 0.1)"}} className='text-[#727272]'>No. of Products</td>
                          <td className='text-[#727272]'>0</td>
                        </tr>
                        <tr>
                          <td  style={{borderRight:"1px solid #727272" , backgroundColor:"rgba(114, 114, 114, 0.1)" , borderBottom:"0"}} className='text-[#727272]'>Total Amount</td>
                          <td className='text-[#727272]' style={{ borderBottom:"0"}}>$100.00</td>
                        </tr>
                       </tbody>
                     </table>
                  </div>

                  <div className='flex justify-center mt-8 mb-3'>
                     <button className='ds_cancel_btn me-5' onClick={()=> navigate("/Layout/Sales")}>Cancel</button>
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

export default EditSales
