import React, { useState } from 'react'
import Bar  from '../Images/Dhruvin/bar.svg'
import Trash  from '../Images/Dhruvin/trash.svg'
import Pen from '../Images/Dhruvin/pen.svg'
import Red from '../Images/Dhruvin/trash_red.svg'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const FInancial_Setting_TaxRated = () => {

const navigate = useNavigate()
const [open, setOpen] = useState(false)
const [column, setColumn] = useState(false)

  return (
    <div>
       <div className='bg-[#f5f5f5]'>
          <div className='px-8 pt-7'>
              <div className='flex justify-between items-center'>
                 <div>
                    <h2 className='text-d_color text-[24px] font-medium'>Tax Rates</h2>
                    <p className='cursor-pointer'><span className='text-[#727272]'>Dashboard /</span> <span className='text-d_color'>Tax Rates</span></p>
                 </div>
                 <div className='flex'>
                    <div className='relative'>
                      <button className='ds_column_btn  flex me-4' onClick={()=> setColumn(!column)}> <img src={Bar} alt="" className='me-2' /> <span >Column</span></button>
                        {column && <div className='ds_column_box'>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Name</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Tax Rates(%)</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center'>
                             <h6 className='text-d_color'>Status</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                      </div>}
                    </div>
                    <button className='ds_column_btn  flex me-4'> <img src={Trash} alt="" className='me-2' /> <span >Delete All</span></button>
                    <button className='ds_add_currency' onClick={()=> navigate("/layout/addtaxrate")}>+ Add Tax Rate</button>
                 </div>
              </div>
              <div className='pt-7'>
                  <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] bg-white'>
                    <div>
                        <table className='w-full ds_currency_table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Tax Rates(%)</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>VAT</td>
                                    <td>16</td>
                                    <td>
                                       <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                            <div className="relative w-10 h-5 bg-[#727272] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:start-[6px] after:content-[''] after:absolute after:top-0.5  after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-d_color dark:peer-checked:bg-red-600"></div>
                                       </label>
                                    </td>
                                    <td>
                                        <div>
                                            <button onClick={()=> navigate("/layout/edittaxrate")} className='ds_crud_btn me-3'>
                                                <img src={Pen} alt="" />
                                            </button>
                                            <button onClick={()=> setOpen(true)} className='ds_crud_btn'>
                                                <img src={Red} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>TGST</td>
                                    <td>18</td>
                                    <td>
                                       <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                            <div className="relative w-10 h-5 bg-[#727272] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:start-[6px] after:content-[''] after:absolute after:top-0.5  after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-d_color dark:peer-checked:bg-red-600"></div>
                                       </label>
                                    </td>
                                    <td>
                                        <div>
                                            <button className='ds_crud_btn me-3'>
                                                <img src={Pen} alt="" />
                                            </button>
                                            <button className='ds_crud_btn'>
                                                <img src={Red} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>HST</td>
                                    <td>12</td>
                                    <td>
                                       <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                            <div className="relative w-10 h-5 bg-[#727272] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:start-[6px] after:content-[''] after:absolute after:top-0.5  after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-d_color dark:peer-checked:bg-red-600"></div>
                                       </label>
                                    </td>
                                    <td>
                                        <div>
                                            <button className='ds_crud_btn me-3'>
                                                <img src={Pen} alt="" />
                                            </button>
                                            <button className='ds_crud_btn'>
                                                <img src={Red} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                               
                            </tbody>
                        </table>
                    </div>
                  </div> 

                  <Dialog open={open} onClose={setOpen} className="relative z-10">
                      <DialogBackdrop transition className="fixed inset-0 bg-black-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"/>    
                      <div className="fixed bg-black/50 inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <DialogPanel transition className="relative transform overflow-hidden rounded-[5px] bg-red text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-xl data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                  <div className="mt-2">
                                    <p className="text-lg text-center text-d_color">
                                       Are you sure you want to delete <br />
                                       Tax Rates ?
                                    </p>
                                  </div>
                              <div className='text-center mt-10 mb-6'>
                                 <button type="button" className='ds_cancel_btn me-4' onClick={() => setOpen(false)}>Cancel
                                 </button>
                                 <button type="button" className='ds_add_btn' data-autofocus onClick={() => setOpen(false)}>Delete
                                 </button>
                              </div>
                            </div>
                          </DialogPanel>
                        </div>
                      </div>
                 </Dialog>
              </div>
          </div>
       </div>
    </div>
  )
}

export default FInancial_Setting_TaxRated
