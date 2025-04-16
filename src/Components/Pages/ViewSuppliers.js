import React from 'react'
import { useNavigate } from 'react-router-dom'
import Big from '../Images/Dhruvin/bigProduct.png'

const ViewSuppliers = () => {

 const navigate = useNavigate()

  return (
    <div>
      <div className='ds_main'>
       <div className='sm:px-8 px-4 pt-7'>
          <div>
             <h2 className='text-d_color text-[24px] font-medium'>View Supplier</h2>
             <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={()=> navigate("/Layout/Supplier")} className='text-[#727272]'>Supplier /</span> <span className='text-d_color font-semibold'>View Supplier</span></p>
          </div>
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-10 px-5 pb-10 pt-10'>
                   <div className='flex xl:flex-row flex-col '>
                       <div className='xl:w-1/4 lg:w-2/5 md:w-1/2 xl:self-start self-center px-2'>
                           <img src={Big} alt="" className='w-[100%]' />
                       </div>
                       <div className='xl:w-3/4 px-2'>
                          <div className='overflow-x-auto'>
                            <table className='ds_viewWare_table w-full'>
                             <thead>
                                <tr>
                                    <th>
                                        <span className='text-xl text-d_color whitespace-nowrap'>Supplier Details</span>
                                    </th>
                                </tr>
                             </thead>
                             <tbody>
                                <tr>
                                    <td style={{borderRight:"1px solid #727272"}}>Supplier name</td>
                                    <td>johan patel</td>
                                </tr>
                                <tr>
                                    <td style={{borderRight:"1px solid #727272"}}>Store name</td>
                                    <td>Epex Stationary</td>
                                </tr>
                                 <tr>
                                    <td style={{borderRight:"1px solid #727272"}}>Email</td>
                                    <td>example@gmail.com</td>
                                </tr> 
                                <tr>
                                    <td style={{borderRight:"1px solid #727272"}}>Contact No.</td>
                                    <td>+1 23232 32323</td>
                                </tr>
                                <tr>
                                    <td style={{borderRight:"1px solid #727272"}}>Address</td>
                                    <td>256, gufgyugg, juygfuf6u, Syndey.</td>
                                </tr>
                                <tr>
                                    <td style={{borderRight:"1px solid #727272"}}>City</td>
                                    <td>Sydney</td>
                                </tr>
                                <tr>
                                    <td style={{borderRight:"1px solid #727272"}}>Country</td>
                                    <td>Australia</td>
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
    </div>
  )
}

export default ViewSuppliers
