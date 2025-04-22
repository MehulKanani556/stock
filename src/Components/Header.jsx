import React, { useEffect, useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import './CSS/Parth/Header.css';
import Userimage from './Images/Parth/Userimage.png';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import notback from './Images/Parth/notification_back_image.png';
import notbackicon from './Images/Parth/notification_icon.png';
import notbacknumber from './Images/Parth/notification_number_back_image.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';



import dashboard from './Images/Parth/Dashboard1.png';
import Product from './Images/Parth/Product1.png';
import RawMaterial from './Images/Parth/Rawmaterial1.png';
import ExpiredProduct from './Images/Parth/Expiredproduct1.png';
import LawStocks from './Images/Parth/Lawstocks1.png';
import Catogery from './Images/Parth/Catogery1.png';
import SubCatogery from './Images/Parth/Subcatogery1.png';
import Unit from './Images/Parth/Unit1.png';
import Variant from './Images/Parth/Variant1.png';
import warranty from './Images/Parth/Warranty1.png';
import sales from './Images/Parth/Sales1.png';
import invoice from './Images/Parth/Invoice1.png';
import return1 from './Images/Parth/Return1.png';
import Quotation from './Images/Parth/Quotation1.png';
import Expense from './Images/Parth/Expense1.png';
import Supplier from './Images/Parth/Supplier1.png';
import Store from './Images/Parth/Store1.png';
import Warehouse from './Images/Parth/Warehouse1.png';
import Reports from './Images/Parth/Reports1.png';
import TaxRatesImage from './Images/Dhruvin/TaxRates.svg'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [financialOpen, setFinancialOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("")


  const toggleModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);
  const closeModal = () => setIsDeleteModalOpen(false);

  const toggleChangePasswordModal = () => setIsChangePasswordOpen(!isChangePasswordOpen);
  const closeChangePasswordModal = () => setIsChangePasswordOpen(false);

  const navigate = useNavigate();


  useEffect(() => {
    // Function to check if screen is large enough to auto-close drawer
    const checkScreenSize = () => {
      if (window.innerWidth >= 768 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isDrawerOpen]); // Dependency array includes isDrawerOpen to properly react to its changes

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    setActiveItem(window.location.pathname.split('/')[2])
  }, [window.location.pathname])

  return (
    <>
      <div className='V_header_container'>

        <div className='flex items-center V_search_container'>
          <FaSearch className='V_search_icon' />
          <input type="text" placeholder='Search here...' className='V_search_input' />
        </div>

        <div className="flex V_small_size_apce items-center">
          <div onClick={() => navigate('/layout/Notification')}>
            <div className='relative'>
              <img src={notback} alt="" className='V_notification_back_image' />
              <div>
                <img src={notbackicon} alt="" className='V_notification_icon' />
              </div>
              <div>
                <img src={notbacknumber} alt="" className='V_notification_number_image' />
                <div className='V_notification_number_text'>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='flex items-center ms-3'>
              <div className='flex items-center V_320_size ms-auto me-3'>
                <div>
                  <img src={Userimage} alt="" className='V_user_image' />
                </div>
                <div className='ms-3'>
                  <p className='V_user_name'>John Patel</p>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  V_dropdown_text  text-gray-500">
                        Admin
                        <MdOutlineKeyboardArrowDown aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-40 md:w-44 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <div className="">
                        <MenuItem>
                          <Link to="/layout/EditProfile" className="block px-4 py-2 V_dropdown_text text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                            Edit Profile
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link onClick={toggleChangePasswordModal} className="block px-4 py-2 V_dropdown_text text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                            Change Password
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link className="block px-4 py-2 V_dropdown_text text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" onClick={toggleModal}>
                            Logout
                          </Link>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>

              <div className='md:hidden  V_offcanvas_btn ms-auto'>
                <FaBars onClick={toggleDrawer} className='V_ofcanvas_icon' />
              </div>

            </div>
          </div>
        </div>
      </div>




      <div
        className={`fixed top-0 left-0 z-40 h-screen  overflow-y-auto bg-d_color w-60  shadow-lg transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='p-4 '>
          <h5 className="inline-flex items-center  text-white relative">

            LOGO
          </h5>
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>

        <div>
          <div className=' overflow-y-auto  V_Offcanvass_height px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>

            <div className={`${activeItem === "Dashboard" || activeItem === "Notification" || activeItem === "EditProfile" ? 'bg-white text-d_color' : 'text-white'} py-3 mt-3 over relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Dashboard'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                  {activeItem === "Dashboard" || activeItem === "Notification" || activeItem === "EditProfile" ?
                      <img src={dashboard} className='V_icon_size V_filter' /> :
                      <img src={dashboard} className='V_icon_size' />
                    }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Dashboard</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Product" || activeItem === "AddProduct"  || activeItem === "EditProduct"  || activeItem === "ViewProduct" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Product'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                     {activeItem === "Product" || activeItem === "AddProduct" || activeItem === "EditProduct" || activeItem === "ViewProduct" ?
                         <img src={Product} className=' V_icon_size V_filter' /> :
                         <img src={Product} className=' V_icon_size filter grayscale brightness-0 invert' />
                     }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Product</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "RawMaterial" || activeItem === "AddRawMaterial" || activeItem === "EditRawMaterial" || activeItem === "ViewRawMaterial" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/RawMaterial'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                      {activeItem === "RawMaterial" || activeItem === "AddRawMaterial" || activeItem === "EditRawMaterial" || activeItem === "ViewRawMaterial" ?
                          <img src={RawMaterial} className='V_icon_size V_filter' /> :
                          <img src={RawMaterial} className='V_icon_size filter grayscale brightness-0 invert' />
                       }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>RawMaterial</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "ExpiredProduct" || activeItem === "EditExpiredProduct" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/ExpiredProduct'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                      {activeItem === "ExpiredProduct" || activeItem === "EditExpiredProduct" ?
                         <img src={ExpiredProduct} className='V_icon_size V_filter' /> :
                         <img src={ExpiredProduct} className='V_icon_size filter grayscale brightness-0 invert' />
                       }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>ExpiredProduct</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "LowStocks" || activeItem === "EditLowStocks" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/LowStocks'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                      {activeItem === "LowStocks" || activeItem === "EditLowStocks" ?
                        <img src={LawStocks} className='V_icon_size V_filter' /> :
                        <img src={LawStocks} className='V_icon_size' />
                      }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>LawStocks</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Category" || activeItem === "AddCategory" || activeItem === "EditCategory" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Category'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                    {activeItem === "Category" || activeItem === "AddCategory" || activeItem === "EditCategory" ?
                      <img src={Catogery} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Catogery} className='V_icon_size' />
                    }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Catogery</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "SubCategory" || activeItem === "AddSubCategory" || activeItem === "EditSubCategory" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/SubCategory'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                     {activeItem === "SubCategory" || activeItem === "AddSubCategory" || activeItem === "EditSubCategory" ?
                       <img src={SubCatogery} className='V_icon_size text-d_color V_filter' /> :
                       <img src={SubCatogery} className='V_icon_size' />
                     }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>SubCatogery</h5>
                </div>
              </div>
            </div>



            <div className={`${activeItem === "Unit" || activeItem === "AddUnit" || activeItem === "EditUnit" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Unit'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                    {activeItem === "Unit" || activeItem === "AddUnit" || activeItem === "EditUnit" ?
                      <img src={Unit} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Unit} className='V_icon_size' />
                    }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Unit</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Variant" || activeItem === "AddVariant" || activeItem === "EditVariant" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Variant'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                      {activeItem === "Variant" || activeItem === "AddVariant" || activeItem === "EditVariant" ?
                        <img src={Variant} className='V_icon_size text-d_color V_filter' /> :
                        <img src={Variant} className='V_icon_size' />
                      }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Variant</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Warranty" || activeItem === "AddWarranty" || activeItem === "EditWarranty" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Warranty'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                      {activeItem === "Warranty" || activeItem === "AddWarranty" || activeItem === "EditWarranty" ?
                        <img src={warranty} className='V_icon_size V_filter' /> :
                        <img src={warranty} className='V_icon_size filter grayscale brightness-0 invert' />
                      }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Warranty</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Sales" || activeItem === "AddSales" || activeItem === "EditSales" || activeItem === "ViewSales" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Sales'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                     {activeItem === "Sales" || activeItem === "AddSales" || activeItem === "EditSales" || activeItem === "ViewSales" ?
                       <img src={sales} className='V_icon_size text-d_color V_filter' /> :
                       <img src={sales} className='V_icon_size' />
                     }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Sales</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Invoice" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Invoice'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                     {activeItem === "Invoice" ?
                       <img src={invoice} className='V_icon_size text-d_color V_filter' /> :
                       <img src={invoice} className='V_icon_size' />
                     }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Invoice</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "SalesReturn" || activeItem === "AddSalesReturn" || activeItem === "EditSalesReturn" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/SalesReturn'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center  gap-5 V_pading_icon' >
                  <div>
                    {activeItem === "SalesReturn" || activeItem === "AddSalesReturn" || activeItem === "EditSalesReturn" ?
                      <img src={return1} className='V_icon_size text-d_color V_filter' /> :
                      <img src={return1} className='V_icon_size' />
                    }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Sales Return</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Quotation" || activeItem === "AddQuotation" || activeItem === "EditQuotation" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Quotation'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center   gap-5 V_pading_icon' >
                  <div>
                    {activeItem === "Quotation" || activeItem === "AddQuotation" || activeItem === "EditQuotation" ?
                      <img src={Quotation} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Quotation} className='V_icon_size' />
                    }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Quotation</h5>
                </div>
              </div>
            </div>


            <div className={`${(activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" || activeItem === "ExpenseCategory" || activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory"  ) ? '' : 'text-white'}  relative z-[100]`}>
              <div className={`${(activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" || activeItem === "ExpenseCategory" || activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory"  ) ? 'bg-white text-d_color' : 'text-white'}`}>
                <div
                  className='cursor-pointer ms-3'
                  onClick={() => {
                    setExpenseOpen(!expenseOpen);
                    navigate('/Layout/Expense');
                  }}
                >
                  <div className={`${(activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" || activeItem === "ExpenseCategory" || activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory"  ) ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100] flex items-center V_pading_icon`}>
                    <div className='flex items-center gap-5'>
                      <div>
                       {(activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" || activeItem === "ExpenseCategory" || activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory" ) ?
                          <img src={Expense} className='V_icon_size text-d_color V_filter' /> :
                          <img src={Expense} className='V_icon_size' />
                        }
                      </div>
                      <h5 className='V_text_size font-fw-lighter'>Expense</h5>
                    </div>
  
                    <div className={`transform transition-transform ms-3 place-items-center duration-200 ${expenseOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>


                <div className={`transition-all duration-300 ${expenseOpen ? 'block' : 'hidden'} ms-3`}>
                  <ul className="mt-2">
                    <li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/Expense');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Expense</h5>
                      </div>
                    </li>
                    <li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ExpenseCategory" ||  activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ExpenseCategory');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Expense Category</h5>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>


            <div className={`${activeItem === "Supplier" || activeItem === "AddSupplier" || activeItem === "EditSupplier" || activeItem === "ViewSupplier" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Supplier'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center   gap-5 V_pading_icon' >
                  <div>
                    {activeItem === "Supplier" || activeItem === "AddSupplier" || activeItem === "EditSupplier" || activeItem === "ViewSupplier" ?
                      <img src={Supplier} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Supplier} className='V_icon_size' />
                    }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Supplier</h5>
                </div>
              </div>
            </div>


            <div className={`${activeItem === "Store" || activeItem === "AddStore" || activeItem === "EditStore" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Store'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center   gap-5 V_pading_icon' >
                  <div>
                     {activeItem === "Store" || activeItem === "AddStore" || activeItem === "EditStore" ?
                       <img src={Store} className='V_icon_size text-d_color V_filter' /> :
                       <img src={Store} className='V_icon_size' />
                     }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Store</h5>
                </div>
              </div>
            </div>



            <div className={`${activeItem === "Warehouse" || activeItem === "AddWarehouse" || activeItem === "EditWarehouse" || activeItem === "ViewWarehouse" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => { navigate('/Layout/Warehouse'); setIsDrawerOpen(false) }}
              >
                <div className='flex items-center   gap-5 V_pading_icon' >
                  <div>
                     {activeItem === "Warehouse" || activeItem === "AddWarehouse" || activeItem === "EditWarehouse" || activeItem === "ViewWarehouse" ?
                       <img src={Warehouse} className='V_icon_size text-d_color V_filter' /> :
                       <img src={Warehouse} className='V_icon_size' />
                     }
                  </div>
                  <h5 className='V_text_size font-fw-lighter'>Warehouse</h5>
                </div>
              </div>
            </div>

            <div className='text-white  relative z-[100]'>
              <div className={`${(activeItem === "ReportSalesReport" || activeItem === "ReportPurchaseReport" || activeItem === "ReportInventoryReport" || activeItem === "ReportInvoiceReport" || activeItem === "ReportSupplierPurchase" || activeItem === "ReportSupplierPayment" || activeItem === "ReportSupplierReturn" || activeItem === "ReportCustomerReport" || activeItem === "ReportExpenseReport" || activeItem === "ReportIncomeReport" || activeItem === "ReportTaxReport" || activeItem === "ReportSalesTaxReport" || activeItem === "ReportProfit") ? 'bg-white text-d_color' : 'text-white'} relative z-[100] py-3`}>
              <div
                className='cursor-pointer ms-3'
                onClick={() => {
                  setReportsOpen(!reportsOpen);
                  navigate('/Layout/ReportSalesReport');
                }}
              >
                <div className='flex items-center V_pading_icon'>
                  <div className='flex items-center gap-5'>
                    <div>
                    {(activeItem === "ReportSalesReport" || activeItem === "ReportPurchaseReport" || activeItem === "ReportInventoryReport" || activeItem === "ReportInvoiceReport" || activeItem === "ReportSupplierPurchase" || activeItem === "ReportSupplierPayment" || activeItem === "ReportSupplierReturn" || activeItem === "ReportCustomerReport" || activeItem === "ReportExpenseReport" || activeItem === "ReportIncomeReport" || activeItem === "ReportTaxReport" || activeItem === "ReportSalesTaxReport"  || activeItem === "ReportProfit") ?
                        <img src={Reports} className=' V_icon_size text-d_color V_filter' /> :
                        <img src={Reports} className=' V_icon_size' />
                      }
                    </div>
                    <h5 className='V_text_size font-fw-lighter'>Reports</h5>
                  </div>

                  <div className={`transform transition-transform ms-3 place-items-center duration-200 ${reportsOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              </div>



                <div className={`transition-all duration-300 ${reportsOpen ? 'block' : 'hidden'} ms-4`}>
                  <ul className="mt-2">
                    <li className="relative pl-8 V_circle_dot1">
                      <div
                         className={`py-2 cursor-pointer ${activeItem === "ReportSalesReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportSalesReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Sales Report</h5>
                      </div>
                    </li>
                    <li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportPurchaseReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportPurchaseReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Purchase Report</h5>
                      </div>
                    </li>
                    <li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportInventoryReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportInventoryReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Inventory Report</h5>
                      </div>
                    </li>
                    <li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportInvoiceReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportInvoiceReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Invoice Report</h5>
                      </div>
                    </li>
                    <li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportSupplierReturn" || activeItem === "ReportSupplierPayment"  || activeItem === "ReportSupplierPurchase"  ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportSupplierReturn');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Supplier Report</h5>
                      </div>
                    </li><li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportCustomerReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportCustomerReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Customer Report</h5>
                      </div>
                    </li><li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportExpenseReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportExpenseReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Expense Report</h5>
                      </div>
                    </li><li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportIncomeReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportIncomeReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Income  Report</h5>
                      </div>
                    </li><li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportTaxReport" || activeItem === "ReportSalesTaxReport"  ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportTaxReport');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Tax  Report</h5>
                      </div>
                    </li><li className="relative pl-8 V_circle_dot1">
                      <div
                        className={`py-2 cursor-pointer ${activeItem === "ReportProfit" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/Layout/ReportProfit');
                          setIsDrawerOpen(false);
                        }}
                      >
                        <h5 className='font-fw-lighter'>Profit & Loss Report</h5>
                      </div>
                    </li>


                  </ul>
                </div>




            </div>


            <div className={`${activeItem === "TaxRated" || activeItem === "AddTaxRate" || activeItem === "EditTaxRate" ? 'bg-white text-d_color' : 'text-white'} py-3 relative z-[100]`}>
              <div
                className='cursor-pointer ms-3'
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/Layout/TaxRated');
                  setIsDrawerOpen(false);
                }}
              >
                <div className='flex items-center V_pading_icon'>
                  <div className='flex items-center gap-5'>
                    <div>
                        {activeItem === "TaxRated" || activeItem === "AddTaxRate" || activeItem === "EditTaxRate" ?
                          <img src={TaxRatesImage} className='V_icon_size text-d_color V_filter' /> :
                          <img src={TaxRatesImage} className='V_icon_size' />
                        }
                    </div>
                    <h5 className='V_text_size font-fw-lighter'>Tax Rates</h5>
                  </div>
                </div>




              </div>
            </div>

          </div>
        </div>

        {/* Overlay for drawer */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0  bg-opacity-50 z-30"
            onClick={toggleDrawer}
          />
        )}
      </div>





      {isDeleteModalOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen  overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
          <div className="relative p-4 w-sm-full  ">
            <div className="relative bg-white  shadow-sm V_delete_modal_width">

              <div className="V_are_you_sure text-center">

                <h3 className="V_are_you_sure_text mb-5">
                  Are you sure you want to logout ?
                </h3>
                <div className='flex justify-center items-center gap-5'>
                  <button
                    onClick={() => {
                      // Handle delete logic here
                      closeModal();
                    }}
                    className="text-white  focus:outline-none  items-center text-center V_cancel_btn"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeModal}
                    className=" focus:outline-none  V_yes_btn"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Modal */}
      {isChangePasswordOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen  overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:px-7 lg:px-8 V_border_niche">
                <h3 className="V_chnage_main_heading">
                  Change Password
                </h3>
                <button
                  type="button"
                  onClick={closeChangePasswordModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Body */}
              <div className="p-4 md:p-7 lg:p-8">
                <form className="">
                  <div className='V_input_field_container_change_password'>
                    <label
                      className="V_input_label_label mb-1"
                    >
                      Old Password*
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="ds_main_input"
                      placeholder="Enter Old Password"
                      required
                    />
                  </div>
                  <div className='V_input_field_container_change_password'>
                    <label
                      className="V_input_label_label mb-1"
                    >
                      Create Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="ds_main_input"
                      placeholder="Enter New Password"
                      required
                    />
                  </div>
                  <div className='V_input_field_container_change_password'>
                    <label
                      className="V_input_label_label mb-1"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="ds_main_input"
                      placeholder="Confirm New Password"
                      required
                    />
                  </div>


                  <div className='flex justify-center items-center gap-5 V_margine_top_btn'>
                    <button className='V_change_password_cancel_btn' onClick={closeChangePasswordModal}>Cancel</button>
                    <button className='V_change_password_change_btn'>Change</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;