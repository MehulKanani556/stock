import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import xls from '../Images/Dhruvin/xls.svg'
import pdf from '../Images/Dhruvin/pdf.svg'
import Bar  from '../Images/Dhruvin/bar.svg'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoMdClose } from 'react-icons/io'
import filter from '../Images/Dhruvin/Filter.svg'
import Trash  from '../Images/Dhruvin/trash.svg'
import mrint from '../Images/Dhruvin/print.svg'
import station from '../Images/Dhruvin/station.png'


const ReportSupplierReturn = () => {

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
                    <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span className='text-d_color font-semibold'>Supplier Reports</span></p>  
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
                                               <label className='text-d_color font-medium block mb-1'>Supplier Name</label>
                                               <select className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'>
                                                 <option value="">Select Supplier Name</option>
                                                 <option value="">John Wick</option>
                                                 <option value="">John Wick</option>
                                               </select>
                                          </div>
                                          <div className='mb-4'>
                                               <label className='text-d_color font-medium block mb-1'>Status</label>
                                               <select className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'>
                                                 <option value="">Select Status</option>
                                                 <option value="">Complete</option>
                                                 <option value="">InComplete</option>
                                               </select>
                                          </div>
                                          <div className='mb-4'>
                                               <label className='text-d_color font-medium block mb-1'>Payment Status</label>
                                               <select className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'>
                                                 <option value="">Select Payment Status</option>
                                                 <option value="">Paid</option>
                                                 <option value="">Due</option>
                                               </select>
                                          </div>
                                       </div>
                                       <div className='px-6 mt-auto sm:text-start text-center'>
                                           <button className='ds_report_cancel me-4' onClick={()=> setOpen(false)}>Cancel</button>
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
                             <h6 className='text-d_color'>Invoice No.</h6>
                             <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Supplier Name	</h6>
                             <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Amount</h6>
                             <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Paid</h6>
                             <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Due</h6>
                             <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Status</h6>
                             <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                             </label>
                          </div>
                          <div className='flex justify-between items-center mb-2'>
                             <h6 className='text-d_color'>Payment Status</h6>
                             <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
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
              <div className=''>
                    <button onClick={()=> navigate("/layout/ReportSupplierPurchase")} className=' ds_report_sapliar me-4 mt-4'>
                        Purchase
                    </button>
                    <button onClick={()=> navigate("/layout/ReportSupplierPayment")} className='ds_report_sapliar_payment me-4 mt-4'>
                        Payment
                    </button>
                    <button onClick={()=> navigate("/layout/ReportSupplierReturn")} className=' ds_report_sapliar_active ds_report_sapliar_return mt-4'>
                        Return
                    </button>
              </div>
             

              <div className='pt-7'>
                  <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] bg-white'>
                    <div className='overflow-x-auto'>
                        <table className='w-full ds_report_table'>
                            <thead>
                                <tr>
                                    <th>Invoice No.</th>
                                    <th>Supplier Name</th>
                                    <th>Amount</th>
                                    <th>Paid</th>
                                    <th>Due</th>
                                    <th>Status</th>
                                    <th>Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#3AA409] font-semibold'>Completed</span></td>
                                    <td><span className='px-[26px] py-2 rounded-[4px] text-[#3AA409] bg-[#DBE6D6] font-semibold'>Paid</span></td>
                                </tr> 
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#FF0000] font-semibold'>InComplete</span></td>
                                    <td><span className='px-7 py-2 rounded-[4px] text-[#FF0000] bg-[#FAE1E1] font-semibold'>Due</span></td>
                                </tr> 
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#3AA409] font-semibold'>Completed</span></td>
                                    <td><span className='px-[26px] py-2 rounded-[4px] text-[#3AA409] bg-[#DBE6D6] font-semibold'>Paid</span></td>
                                </tr> 
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#3AA409] font-semibold'>Completed</span></td>
                                    <td><span className='px-[26px] py-2 rounded-[4px] text-[#3AA409] bg-[#DBE6D6] font-semibold'>Paid</span></td>
                                </tr> 
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#3AA409] font-semibold'>Completed</span></td>
                                    <td><span className='px-[26px] py-2 rounded-[4px] text-[#3AA409] bg-[#DBE6D6] font-semibold'>Paid</span></td>
                                </tr> 
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#FF0000] font-semibold'>InComplete</span></td>
                                    <td><span className='px-7 py-2 rounded-[4px] text-[#FF0000] bg-[#FAE1E1] font-semibold'>Due</span></td>
                                </tr> 
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#3AA409] font-semibold'>Completed</span></td>
                                    <td><span className='px-[26px] py-2 rounded-[4px] text-[#3AA409] bg-[#DBE6D6] font-semibold'>Paid</span></td>
                                </tr> 
                                <tr>
                                    <td>#12345</td>
                                    <td className='flex align-middle'>
                                       <img src={station} alt="" className='w-[25px] me-2' />
                                       <span className='mt-1'>Apex Stationary</span>
                                    </td>
                                    <td>$120</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td ><span className='text-[#FF0000] font-semibold'>InComplete</span></td>
                                    <td><span className='px-7 py-2 rounded-[4px] text-[#FF0000] bg-[#FAE1E1] font-semibold'>Due</span></td>
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
                                      All Supplier Reports ?

                                    </p>
                                  </div>
                              <div className='text-center mt-10 mb-6'>
                                 <button type="button" className='ds_cancel_popup me-4' onClick={() => setDeleteAll(false)}>Cancel
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

export default ReportSupplierReturn
