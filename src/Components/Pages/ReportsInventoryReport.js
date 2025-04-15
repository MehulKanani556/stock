import React, { useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoMdClose } from 'react-icons/io'
import mrint from '../Images/Dhruvin/print.svg'
import xls from '../Images/Dhruvin/xls.svg'
import pdf from '../Images/Dhruvin/pdf.svg'
import Bar  from '../Images/Dhruvin/bar.svg'
import Trash  from '../Images/Dhruvin/trash.svg'
import { useNavigate } from 'react-router-dom'
import filter from '../Images/Dhruvin/Filter.svg'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import product from '../Images/Dhruvin/product.png'



const ReportsInventoryReport = () => {

    const [download, setDownload] = useState(false) 
    const [column, setColumn] = useState(false)  
    const navigate = useNavigate() 
    const [open, setOpen] = useState(false)
    const dateInputRef = useRef(null);
    const totalItems = 30;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [deleteAll, setDeleteAll] = useState(false)
    
    const handleIconClick = () => {
      dateInputRef.current.showPicker?.(); 
      dateInputRef.current.focus();
    };
    
    const goToPage = (page) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
      console.log('Page changed to:', page);
    };
    
    const getPageNumbers = () => {
      const maxVisible = 5;
      const pages = [];
    
      if (totalPages <= maxVisible + 2) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= maxVisible) {
          for (let i = 1; i <= maxVisible; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage > totalPages - maxVisible) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        }
      }
    
      return pages;
    }   
    
  return (
    <div>
      <div className='ds_main'>
          <div className='sm:px-8 px-4 pt-7'>
              <div className='flex justify-between lg:flex-nowrap flex-wrap'>
                 <div>
                    <h2 className='text-d_color text-[24px] font-medium'>Reports</h2>
                    <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span className='text-d_color font-semibold'> Inventory Reports</span></p>  
                 </div>
                 <div className='flex xl:flex-wrap lg:flex-nowrap flex-wrap '>
                    <div className='pt-3'>
                        <button onClick={()=> setOpen(true)} className='ds_report_filter flex me-4'>
                              <img src={filter} alt="" className='me-2' /> <span >Filters</span>
                        </button>

                           <Dialog open={open} onClose={setOpen} className="relative z-10">
                             <DialogBackdrop transition className="fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"/>
                             <div className="fixed inset-0 overflow-hidden">
                               <div className="absolute inset-0 overflow-hidden">
                                 <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                   <DialogPanel transition className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                                     <TransitionChild>
                                       <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                       </div>
                                     </TransitionChild>
                                     <div className="flex h-full flex-col overflow-y-scroll bg-white py-4 shadow-xl">
                                       <div>
                                          <div className="px-4 sm:px-6 flex justify-between items-center">
                                            <DialogTitle className="text-xl font-semibold text-d_color">Filters</DialogTitle>
                                            <IoMdClose onClick={()=> setOpen(false)} className='text-[22px] text-[#FF0000] cursor-pointer' />
                                          </div>
                                          <div className='border-[0.8px] mt-3'></div>
                                       </div>
                                       <div className='px-6 mt-6'>
                                          <div className='mb-4'>
                                               <label className='text-d_color font-medium block mb-1'>Category</label>
                                               <select className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'>
                                                 <option value="">Select Category</option>
                                                 <option value="">Stationary</option>
                                               </select>
                                          </div>
                                          <div className='mb-4'>
                                               <label className='text-d_color font-medium block mb-1'>Unit</label>
                                               <select className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'>
                                                 <option value="">Select Unit</option>
                                                 <option value="">Pc</option>
                                               </select>
                                          </div>
                                          <div className='mb-4'>
                                               <label className='text-d_color font-medium block mb-1'>Product</label>
                                               <select className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'>
                                                 <option value="">Select Product</option>
                                               </select>
                                          </div>
                                       </div>
                                       <div className='px-6 mt-auto'>
                                           <button className='ds_report_cancel me-4'>Cancel</button>
                                           <button className='ds_report_apply'>Apply</button>
                                       </div>
                                     </div>
                                   </DialogPanel>
                                 </div>
                               </div>
                             </div>
                           </Dialog>
                    </div>
                    <div className='relative pt-3'>
                      <button className='ds_column_btn  flex me-4' onClick={()=> setColumn(!column)}> <img src={Bar} alt="" className='me-2' /> <span >Column</span></button>
                        {column && <div className='ds_column_box z-[2]'>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Product</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>SKU</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Category</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Unit	</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Instock Qty.</h6>
                             <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" defaultChecked />
                                <div class="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                         
                      </div>}
                    </div>
                    <div className='pt-3'>
                       <button onClick={()=> setDeleteAll(true)} className='ds_column_btn whitespace-nowrap  flex me-4'> <img src={Trash} alt="" className='me-2' /> <span >Delete All</span></button>
                    </div>
                    <div className='relative pt-3'>
                       <button onClick={()=> setDownload(!download)} className='ds_fincial_download flex items-center'>Download <IoIosArrowDown className='ms-1' /></button>
                       {download && <div className='ds_report_download'>
                         <div className='flex items-center mb-3'>
                            <div>
                               <img src={mrint} alt="" className='me-3' />
                            </div>
                            <p>Print</p>
                         </div>
                         <div className='flex items-center mb-3'>
                            <div>
                               <img src={xls} alt="" className='me-3' />
                            </div>
                            <p>XLS</p>
                         </div>
                         <div className='flex items-center'>
                            <div>
                               <img src={pdf} alt="" className='me-3' />
                            </div>
                            <p>PDF</p>
                         </div>
                       </div>}
                    </div> 
                 </div>
              </div>

              <div className='pt-7'>
                  <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] bg-white'>
                    <div className='overflow-x-auto'>
                        <table className='w-full ds_income_table'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>SKU</th>
                                    <th>Category</th>
                                    <th>Unit</th>
                                    <th>Instock Qty.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                <tr>
                                    <td className='flex align-middle'>
                                       <img src={product} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Blue Pen</span>
                                    </td>
                                    <td>P1234</td>
                                    <td>Stationary</td>
                                    <td>Pc</td>
                                    <td>8</td>
                                </tr> 
                                
                               
                            </tbody>
                        </table>


                        
                    </div>
                    <div className='text-end flex justify-end p-6'>
                          <button className='ds_report_arrow flex justify-center items-center me-2 cursor-pointer' onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                            <IoIosArrowBack fill='#36454F' />
                          </button>

                             {getPageNumbers().map((page, idx) => (
                               <button
                                 key={idx}
                                 onClick={() => typeof page === 'number' && goToPage(page)}
                                 className={`ds_report_arrow flex justify-center items-center me-2 cursor-pointer' ${
                                   currentPage === page ? 'bg-d_color text-white' : ''
                                 } ${page === '...' ? 'cursor-default' : 'cursor-pointer'}`}
                                 disabled={page === '...'}
                               >
                                 {page}
                               </button>
                             ))}

                        <button className='ds_report_arrow flex justify-center items-center me-2 cursor-pointer' onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                          <IoIosArrowForward fill='#36454F' />
                        </button>
                       </div>
                  </div> 

                  {/* ***************** Delete All Product *********** */}
                  <Dialog open={deleteAll} onClose={setDeleteAll} className="relative z-10">
                      <DialogBackdrop transition className="fixed inset-0 bg-black-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"/>    
                      <div className="fixed bg-black/50 inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full lg:w-full md:w-3/5  mx-auto justify-center p-4 text-center items-center sm:p-0">
                          <DialogPanel transition className="relative transform overflow-hidden rounded-[5px] bg-red text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-xl data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                  <div className="mt-2">
                                    <p className="sm:text-lg text-center text-d_color">
                                      Are you sure you want to delete  <br />
                                      Inventory Reports ?

                                    </p>
                                  </div>
                              <div className='text-center mt-10 mb-6'>
                                 <button type="button" className='ds_cancel_btn me-4' onClick={() => setDeleteAll(false)}>Cancel
                                 </button>
                                 <button type="button" className='ds_deletePopup' data-autofocus onClick={() => setDeleteAll(false)}>Delete
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

export default ReportsInventoryReport
