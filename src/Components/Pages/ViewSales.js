import React from 'react'
import { useNavigate } from 'react-router-dom'
import Big from '../Images/Dhruvin/bigProduct.png'
import '../CSS/Dhruvin/Sales.css'
import Pdf from '../Images/Dhruvin/pdf.svg'
import Xls from '../Images/Dhruvin/xls.svg'
import Print from '../Images/Dhruvin/print.svg'
import product from '../Images/Dhruvin/product.png'
import { FaMinus, FaPlus } from 'react-icons/fa'


const ViewSales = () => {

const navigate = useNavigate()

  return (
    <div>
      <div className='ds_main'>
       <div className='sm:px-8 px-4 pt-4'>
          <div className='flex justify-between items-center flex-wrap pt-3'>
             <div>
               <h2 className='text-d_color text-[24px] font-medium'>View Sales</h2>
               <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={()=> navigate("/Layout/Sales")} className='text-[#727272]'>Sales /</span> <span className='text-d_color font-semibold'>View Sales</span></p>
             </div>
             <div className='flex flex-wrap'>
                <div className='pt-3'>
                   <button className='ds_sale_btn flex me-3'> <img src={Pdf} className='me-3' alt="" /> PDF </button>
                </div>
                <div className='pt-3'>
                   <button className='ds_sale_btn flex me-3'> <img src={Xls} className='me-3' alt="" /> XLS </button>
                </div>
                <div className='pt-3'>
                   <button className='ds_sale_btn flex '> <img src={Print} className='me-3' alt="" /> Print </button>
                </div>
             </div>
          </div>
          
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-10 px-5 pb-10 pt-10'>
                  <div className='border-[1px] border-[#36454F] rounded-[10px]'>
                     <div className='text-xl text-d_color pt-3 ps-5 mb-2'>Sales Details</div>
                     <div className='relative overflow-x-auto'>
                         <table className='w-full ds_sale_table'>
                             <tbody>
                                 <tr>
                                     <td>Invoice No.</td>
                                     <td>#12345</td>
                                     <td>Date</td>
                                     <td style={{borderRight:'0'}}>19 July 2024</td>
                                 </tr>
                                 <tr>
                                     <td>Customer Name</td>
                                     <td>Johan Dave</td>
                                     <td>Contact No.</td>
                                     <td style={{borderRight:'0'}}>+1 23232 32323</td>
                                 </tr>
                                 <tr>
                                     <td>Payment Status</td>
                                     <td><span className='px-[26px] py-2 rounded-[4px] text-[#3AA409] bg-[#DBE6D6] font-semibold'>Paid</span></td>
                                     <td>Discount</td>
                                     <td style={{borderRight:'0'}}>0</td>
                                 </tr>
                                 <tr>
                                     <td>Order Tax</td>
                                     <td>0</td>
                                     <td>Shipping</td>
                                     <td style={{borderRight:'0'}}>0</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>

                      <div className='mt-3   overflow-x-auto'>
                         <table className='w-full ds_sale_table2'>
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
                      </div>

                      <div className='mt-10 mb-10 sm:me-10 flex justify-end sm:mx-0 mx-4'>
                        <table className='ds_mini_table xl:w-1/4 lg:w-2/5 md:w-3/4 sm:w-full  w-full'>
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

                    </div> 
                 
               </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default ViewSales
