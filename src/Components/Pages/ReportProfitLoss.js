import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import '../CSS/Dhruvin/Report.css'
import mrint from '../Images/Dhruvin/print.svg'
import xls from '../Images/Dhruvin/xls.svg'
import pdf from '../Images/Dhruvin/pdf.svg'
import { useNavigate } from 'react-router-dom'

const ReportProfitLoss = () => {

const [download, setDownload] = useState(false)  
const totalItems = 30;
const itemsPerPage = 10;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const [currentPage, setCurrentPage] = useState(1);
const navigate = useNavigate()


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
        <div>
           <div className='sm:px-8 px-4 pt-7'>
              <div className='flex justify-between '>
                 <div>
                    <h2 className='text-d_color text-[24px] font-medium'>Reports</h2>
                    <p className='cursor-pointer'><span onClick={()=> navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span className='text-d_color'>Profit & Loss Report</span></p>
                 </div>
                 <div>
                    <div className='relative'>
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

              <div className='mt-4'>
                    <button className='ds_reoprt_profit me-4'>Profit</button>
                    <button className='ds_reoprt_loss'>Loss</button>
              </div>

              <div>
              <div className='pt-7'>
                  <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] bg-white'>
                    <div className='overflow-x-auto'>
                        <table className='w-full ds_report_table'>
                            <thead>
                                <tr>
                                    <th>Month / Year</th>
                                    <th>Sales</th>
                                    <th>Purchase</th>
                                    <th>Sales Return</th>
                                    <th>Purchase Return</th>
                                    <th>Revenue</th>
                                    <th>Net Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
                                </tr> 
                                <tr style={{border:'none'}}>
                                    <td>January / 2024</td>
                                    <td>$85243</td>
                                    <td>$80541</td>
                                    <td>$1250</td>
                                    <td>$1250</td>
                                    <td>$50</td>
                                    <td>$4702</td>
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
              </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ReportProfitLoss
