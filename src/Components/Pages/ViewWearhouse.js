import React from 'react'

const ViewWearhouse = () => {
  return (
    <div>
      <div className='ds_main'>
       <div className='sm:px-8 px-4 pt-7'>
          <div>
             <h2 className='text-d_color text-[24px] font-medium'>View Wearhouse</h2>
             <p className='cursor-pointer'><span className='text-[#727272]'>Dashboard /</span> <span className='text-[#727272]'>Wearhouse /</span> <span className='text-d_color font-semibold'>View Wearhouse</span></p>
          </div>
          <div className='pt-7'>
            <div className='ds_main_box'>
               <div className='sm:px-10 px-10 pb-10 pt-10'>
                   <div className='xl:w-2/3'>
                      <div className='overflow-x-auto'>
                        <table className='ds_viewWare_table w-full'>
                         <thead>
                            <tr>
                                <th>
                                    <span className='text-xl text-d_color whitespace-nowrap'>Wearhouse Details</span>
                                </th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr>
                                <td style={{borderRight:"1px solid #727272"}}>Wearhouse Name</td>
                                <td>Wearhouse 1</td>
                            </tr>
                            <tr>
                                <td style={{borderRight:"1px solid #727272"}}>Contact Person</td>
                                <td>John Dave</td>
                            </tr>
                             <tr>
                                <td style={{borderRight:"1px solid #727272"}}>Contact No.</td>
                                <td>+1 2345678923</td>
                            </tr> 
                            <tr>
                                <td style={{borderRight:"1px solid #727272"}}>Address</td>
                                <td>B - 245 , Hello Park, Opposite World Garden , New city, New York , New York - 24678</td>
                            </tr>
                            <tr>
                                <td style={{borderRight:"1px solid #727272"}}>Status</td>
                                <td>Active</td>
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

export default ViewWearhouse
