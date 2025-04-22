import React, { useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoMdClose } from 'react-icons/io'
import Bar from '../Images/Dhruvin/bar.svg'
import Trash from '../Images/Dhruvin/trash.svg'
import { Link, useNavigate } from 'react-router-dom'
import filter from '../Images/Dhruvin/Filter.svg'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import product from '../Images/Dhruvin/product.png'
import Pen from '../Images/Dhruvin/pen.svg'
import Red from '../Images/Dhruvin/trash_red.svg'
import '../CSS/Dhruvin/Warehouse.css'
import '../CSS/Parth/Product.css'
import Eye from '../Images/Dhruvin/eye.svg'



const Product = () => {

  const [column, setColumn] = useState(false)
  const [sort, setSort] = useState(false)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [deleteToggle, setDeleteToggle] = useState(false)
  const [deleteAllToggle, setDeleteAllToggle] = useState(false)
  const totalItems = 30;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);



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
          <div className='flex justify-between xl:flex-nowrap flex-wrap'>
            <div>
              <h2 className='text-d_color text-[24px] font-medium'>Product</h2>
              <p className='cursor-pointer'><Link to="/Layout/Dashboard" className='text-[#727272]'>Dashboard /</Link> <span className='text-d_color font-semibold'>Product</span></p>
            </div>
            <div className='flex xl:flex-nowrap lg:flex-wrap flex-wrap '>

              <div className='relative pt-3'>
                <button className='ds_column_btn  flex me-4' onClick={() => setColumn(!column)}> <img src={Bar} alt="" className='me-2' /> <span >Column</span></button>
                {column && <div className='ds_column_box z-[2] ds_row_box'>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>Product</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>SKU</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>Category</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>Price</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>Cost</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>Qty.</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>Unit</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='text-d_color'>Action</h6>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="relative w-8 h-4 bg-[#727272] peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:start-[6px] after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-d_color dark:peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>}
              </div>
              <div className='pt-3'>
                <button onClick={() => setOpen(true)} className='ds_report_filter flex me-4'>
                  <img src={filter} alt="" className='me-2' /> <span >Filters</span>
                </button>

                <Dialog open={open} onClose={setOpen} className="relative z-10">
                  <DialogBackdrop transition className="fixed inset-0 bg-black/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0" />
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
                                <IoMdClose onClick={() => setOpen(false)} className='text-[22px] text-[#FF0000] cursor-pointer' />
                              </div>
                              <div className='border-[0.8px] mt-3'></div>
                            </div>
                            <div className='px-6 mt-6'>
                              <div className='mb-4'>
                                <label className='text-d_color font-medium block mb-1'>Category</label>
                                <select className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3'>
                                  <option value="">Select Category</option>
                                  <option value="">Stationary</option>
                                  <option value="">Stationary1</option>
                                </select>
                              </div>
                            </div>
                            <div className='px-6 '>
                              <div className='mb-4'>
                                <label className='text-d_color font-medium block mb-1'>Price</label>
                                <input type="text" className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3' placeholder='Add price range' />
                              </div>
                            </div>
                            <div className='px-6 mt-auto'>
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
                <button className='ds_column_btn flex me-4' onClick={() => setSort(!sort)}>
                  <span className=''>Sort by</span>
                  <span className={` ${sort ? 'rotate-180 pe-3 my-auto' : 'ps-3 my-auto'}`}>
                    <IoIosArrowDown />
                  </span>
                </button>
                {sort && <div className='V_column_box1 z-[2]'>
                  <div className=' mb-2'>
                    <h6 className='text-d_color'>A to Z</h6>
                  </div>
                  <div className='mb-2'>
                    <h6 className='text-d_color'>Price Low to High</h6>
                  </div>
                  <div className=' mb-2'>
                    <h6 className='text-d_color'>Price High to Low</h6>
                  </div>
                </div>}
              </div>
              <div className='pt-3'>
                <button className='ds_column_btn whitespace-nowrap  flex me-4 ' onClick={() => setDeleteAllToggle(true)}> <img src={Trash} alt="" className='me-2' /> <span >Delete All</span></button>
              </div>
              <div className='pt-3'>
                <button className='ds_add_currency' onClick={() => navigate("/Layout/AddProduct")}>+ Add Product</button>
              </div>
            </div>
          </div>

          <div className='pt-7'>
            <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] bg-white'>
              <div className='relative overflow-x-auto'>
                <table className='w-full ds_income_table'>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Cost</th>
                      <th>Qty.</th>
                      <th>Unit</th>
                      <th>Action</th>
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
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex align-middle'>
                        <img src={product} alt="" className='w-[25px] me-2' />
                        <span className='mt-1'>Blue Pen</span>
                      </td>
                      <td>P1234</td>
                      <td>Stationary</td>
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct", { state: { productType: 'variant' } })} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'variant' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex align-middle'>
                        <img src={product} alt="" className='w-[25px] me-2' />
                        <span className='mt-1'>Blue Pen</span>
                      </td>
                      <td>P1234</td>
                      <td>Stationary</td>
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex align-middle'>
                        <img src={product} alt="" className='w-[25px] me-2' />
                        <span className='mt-1'>Blue Pen</span>
                      </td>
                      <td>P1234</td>
                      <td>Stationary</td>
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct")} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex align-middle'>
                        <img src={product} alt="" className='w-[25px] me-2' />
                        <span className='mt-1'>Blue Pen</span>
                      </td>
                      <td>P1234</td>
                      <td>Stationary</td>
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct")} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex align-middle'>
                        <img src={product} alt="" className='w-[25px] me-2' />
                        <span className='mt-1'>Blue Pen</span>
                      </td>
                      <td>P1234</td>
                      <td>Stationary</td>
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct")} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex align-middle'>
                        <img src={product} alt="" className='w-[25px] me-2' />
                        <span className='mt-1'>Blue Pen</span>
                      </td>
                      <td>P1234</td>
                      <td>Stationary</td>
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct")} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: 'none' }}>
                      <td className='flex align-middle'>
                        <img src={product} alt="" className='w-[25px] me-2' />
                        <span className='mt-1'>Blue Pen</span>
                      </td>
                      <td>P1234</td>
                      <td>Stationary</td>
                      <td>$120</td>
                      <td>$100</td>
                      <td>5</td>
                      <td>Pc</td>
                      <td>
                        <div>
                          <button onClick={() => navigate("/Layout/ViewProduct")} className='ds_crud_btn me-3'>
                            <img src={Eye} alt="" />
                          </button>
                          <button onClick={() => navigate("/Layout/EditProduct", { state: { productType: 'single' } })} className='ds_crud_btn me-3'>
                            <img src={Pen} alt="" />
                          </button>
                          <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                            <img src={Red} alt="" />
                          </button>
                        </div>
                      </td>
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
                    className={`ds_report_arrow flex justify-center items-center me-2 cursor-pointer' ${currentPage === page ? 'bg-d_color text-white' : ''
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

        <Dialog open={deleteToggle} onClose={setDeleteToggle} className="relative z-10">
          <DialogBackdrop transition className="fixed inset-0 bg-black-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
          <div className="fixed bg-black/50 inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full lg:w-full md:w-3/5  mx-auto justify-center p-4 text-center items-center sm:p-0">
              <DialogPanel transition className="relative transform overflow-hidden rounded-[5px] bg-red text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-xl data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-2">
                    <p className="sm:text-lg text-center text-d_color">
                      Are you sure you want to delete <br />
                      Product ?

                    </p>
                  </div>
                  <div className='text-center mt-10 mb-6'>
                    <button type="button" className='ds_cancel_popup me-4' onClick={() => setDeleteToggle(false)}>Cancel
                    </button>
                    <button type="button" className='ds_deletePopup' data-autofocus onClick={() => setDeleteToggle(false)}>Delete
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>

        <Dialog open={deleteAllToggle} onClose={setDeleteAllToggle} className="relative z-10">
          <DialogBackdrop transition className="fixed inset-0 bg-black-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
          <div className="fixed bg-black/50 inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full lg:w-full md:w-3/5  mx-auto justify-center p-4 text-center items-center sm:p-0">
              <DialogPanel transition className="relative transform overflow-hidden rounded-[5px] bg-red text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-xl data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-2">
                    <p className="sm:text-lg text-center text-d_color">
                      Are you sure you want to delete <br />
                      All Product ?

                    </p>
                  </div>
                  <div className='text-center mt-10 mb-6'>
                    <button type="button" className='ds_cancel_popup me-4' onClick={() => setDeleteAllToggle(false)}>Cancel
                    </button>
                    <button type="button" className='ds_deletePopup' data-autofocus onClick={() => setDeleteAllToggle(false)}>Delete
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default Product
