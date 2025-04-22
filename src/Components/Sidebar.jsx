import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Parth/Sidebar.css';
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
import logo from './Images/Parth/Logocircle1.png';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import TaxRatesImage from './Images/Dhruvin/TaxRates.svg'

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [activeItem, setActiveItem] = useState("")
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [financialOpen, setFinancialOpen] = useState(false);
  // const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveItem(window.location.pathname.split('/')[2])
  }, [window.location.pathname])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    // Close all dropdown menus when collapsing
    if (!isCollapsed) {
      setExpenseOpen(false);
      setReportsOpen(false);
      setFinancialOpen(false);
    }
  };

  return (
    <div className={`sidebar-container transition-all duration-300     ${isCollapsed ? 'V_collapsed' : 'V_expanded'} hidden md:block`}>
      <div className=''>
        <div>
          <div className='V_logo'>
            {!isCollapsed && <h3 className='text-center text-5xl font-fw-bolder py-5'>LOGO</h3>}
            {isCollapsed && <h3 className='text-center text-xl font-fw-bolder py-5'>Logo</h3>}
            <div className={`${isCollapsed ? 'V_logo_line2' : 'V_logo_line'}`}>
              <img src={logo} alt="" className='V_logo_img' />
              <MdKeyboardDoubleArrowLeft
                className={`text-black V_arow transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                onClick={toggleSidebar}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          <div className={`${isCollapsed ? '' : 'V_height_scroll'} overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
            <div className={`${activeItem === "Dashboard" || activeItem === "Notification" || activeItem === "EditProfile" ? 'bg-white text-d_color' : 'text-white'} py-3 mt-3 over`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Dashboard');
                  setActiveItem("Dashboard");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Dashboard" || activeItem === "Notification" || activeItem === "EditProfile" ?
                      <img src={dashboard} className='V_icon_size V_filter' /> :
                      <img src={dashboard} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Dashboard</h5>}
                </div>
              </div>
            </div>

            <div className={`${activeItem === "Product" || activeItem === "AddProduct"  || activeItem === "EditProduct"  || activeItem === "ViewProduct" ? 'bg-white text-d_color' : 'text-white'} py-3 `}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Product');
                  setActiveItem("Product");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Product" || activeItem === "AddProduct" || activeItem === "EditProduct" || activeItem === "ViewProduct" ?
                      <img src={Product} className=' V_icon_size V_filter' /> :
                      <img src={Product} className=' V_icon_size filter grayscale brightness-0 invert' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Product</h5>}
                </div>
              </div>
            </div>

            {/* Raw Material */}
            <div className={`${activeItem === "RawMaterial" || activeItem === "AddRawMaterial" || activeItem === "EditRawMaterial" || activeItem === "ViewRawMaterial" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/RawMaterial');
                  setActiveItem("RawMaterial");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "RawMaterial" || activeItem === "AddRawMaterial" || activeItem === "EditRawMaterial" || activeItem === "ViewRawMaterial" ?
                      <img src={RawMaterial} className='V_icon_size V_filter' /> :
                      <img src={RawMaterial} className='V_icon_size filter grayscale brightness-0 invert' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Raw Material</h5>}
                </div>
              </div>
            </div>


            {/* Expired Products */}
            <div className={`${activeItem === "ExpiredProduct" || activeItem === "EditExpiredProduct" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/ExpiredProduct');
                  setActiveItem("ExpiredProduct");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "ExpiredProduct" || activeItem === "EditExpiredProduct" ?
                      <img src={ExpiredProduct} className='V_icon_size V_filter' /> :
                      <img src={ExpiredProduct} className='V_icon_size filter grayscale brightness-0 invert' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Expired Products</h5>}
                </div>
              </div>
            </div>


            {/* Low Stocks */}
            <div className={`${activeItem === "LowStocks" || activeItem === "EditLowStocks" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/LowStocks');
                  setActiveItem("LawStocks");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "LowStocks" || activeItem === "EditLowStocks" ?
                      <img src={LawStocks} className='V_icon_size V_filter' /> :
                      <img src={LawStocks} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Low Stocks</h5>}
                </div>
              </div>
            </div>


            {/* Category */}
            <div className={`${activeItem === "Category" || activeItem === "AddCategory" || activeItem === "EditCategory" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Category');
                  setActiveItem("Category");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Category" || activeItem === "AddCategory" || activeItem === "EditCategory" ?
                      <img src={Catogery} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Catogery} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Category</h5>}
                </div>
              </div>
            </div>

            {/* Subcategory */}
            <div className={`${activeItem === "SubCategory" || activeItem === "AddSubCategory" || activeItem === "EditSubCategory" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/SubCategory');
                  setActiveItem("SubCategory");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "SubCategory" || activeItem === "AddSubCategory" || activeItem === "EditSubCategory" ?
                      <img src={SubCatogery} className='V_icon_size text-d_color V_filter' /> :
                      <img src={SubCatogery} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Subcategory</h5>}
                </div>
              </div>
            </div>

            {/* Unit */}
            <div className={`${activeItem === "Unit" || activeItem === "AddUnit" || activeItem === "EditUnit" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Unit');
                  setActiveItem("Unit");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Unit" || activeItem === "AddUnit" || activeItem === "EditUnit" ?
                      <img src={Unit} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Unit} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Unit</h5>}
                </div>
              </div>
            </div>

            {/* Variant Attributes */}
            <div className={`${activeItem === "Variant" || activeItem === "AddVariant" || activeItem === "EditVariant" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/layout/Variant');
                  setActiveItem("Variant");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Variant" || activeItem === "AddVariant" || activeItem === "EditVariant" ?
                      <img src={Variant} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Variant} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Variant Attributes</h5>}
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div className={`${activeItem === "Warranty" || activeItem === "AddWarranty" || activeItem === "EditWarranty" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/layout/Warranty');
                  setActiveItem("Warranty");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Warranty" || activeItem === "AddWarranty" || activeItem === "EditWarranty" ?
                      <img src={warranty} className='V_icon_size V_filter' /> :
                      <img src={warranty} className='V_icon_size filter grayscale brightness-0 invert' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Warranty</h5>}
                </div>
              </div>
            </div>


            {/* Sales */}
            <div className={`${activeItem === "Sales" || activeItem === "AddSales" || activeItem === "EditSales" || activeItem === "ViewSales" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Sales');
                  setActiveItem("Sales");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Sales" || activeItem === "AddSales" || activeItem === "EditSales" || activeItem === "ViewSales" ?
                      <img src={sales} className='V_icon_size text-d_color V_filter' /> :
                      <img src={sales} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Sales</h5>}
                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className={`${activeItem === "Invoice" ? 'bg-white text-d_color' : 'text-white'} py-3 `}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Invoice');
                  setActiveItem("invoice");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Invoice" ?
                      <img src={invoice} className='V_icon_size text-d_color V_filter' /> :
                      <img src={invoice} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Invoice</h5>}
                </div>
              </div>
            </div>

            {/* Return Order */}
            <div className={`${activeItem === "SalesReturn" || activeItem === "AddSalesReturn" || activeItem === "EditSalesReturn" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/SalesReturn');
                  setActiveItem("SalesReturn");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "SalesReturn" || activeItem === "AddSalesReturn" || activeItem === "EditSalesReturn" ?
                      <img src={return1} className='V_icon_size text-d_color V_filter' /> :
                      <img src={return1} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Sales Return</h5>}
                </div>
              </div>
            </div>

            {/* Quotation */}
            <div className={`${activeItem === "Quotation" || activeItem === "AddQuotation" || activeItem === "EditQuotation" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Quotation');
                  setActiveItem("Quotation");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Quotation" || activeItem === "AddQuotation" || activeItem === "EditQuotation" ?
                      <img src={Quotation} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Quotation} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Quotation</h5>}
                </div>
              </div>
            </div>





            {/* Expense Dropdown */}
            <div className={`${(activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" || activeItem === "ExpenseCategory" || activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory"  ) ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  if (isCollapsed) {
                    navigate('/Layout/Expense');
                    setActiveItem("Expense");
                  } else {
                    if (!expenseOpen) {
                      setActiveItem("Expense");
                    } else if (!["Expense", "ExpenseCategory"].includes(activeItem)) {
                      setActiveItem("");
                    }
                    setExpenseOpen(!expenseOpen);
                    navigate('/Layout/Expense');
                  }
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} ${isCollapsed ? 'gap-3' : 'V_pading_icon'} `}>
                  <div className={`flex items-center ${isCollapsed ? '' : 'gap-5'}`}>
                    <div>
                      {(activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" || activeItem === "ExpenseCategory" || activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory" ) ?
                        <img src={Expense} className='V_icon_size text-d_color V_filter' /> :
                        <img src={Expense} className='V_icon_size' />
                      }
                    </div>
                    {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Expense</h5>}
                  </div>
                  {!isCollapsed &&
                    <div className={`transform transition-transform place-items-center duration-200 ${expenseOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  }
                </div>
              </div>
            </div>

            {/* Expense Submenu */}
            {!isCollapsed &&
              <div className={`transition-all duration-300 ${expenseOpen ? 'block' : 'hidden'}`}>
                <ul className="mt-2">
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "Expense" || activeItem === "AddExpense" || activeItem === "EditExpense" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("Expense");
                        navigate('/Layout/Expense');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Expense</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ExpenseCategory" ||  activeItem === "AddExpenseCategory" || activeItem === "EditExpenseCategory" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("ExpenseCategory");
                        navigate('/Layout/ExpenseCategory');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Expense Category</h5>
                    </div>
                  </li>
                </ul>
              </div>
            }





            {/* Supplier */}
            <div className={`${activeItem === "Supplier" || activeItem === "AddSupplier" || activeItem === "EditSupplier" || activeItem === "ViewSupplier" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={`cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Supplier');
                  setActiveItem("Supplier");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Supplier" || activeItem === "AddSupplier" || activeItem === "EditSupplier" || activeItem === "ViewSupplier" ?
                      <img src={Supplier} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Supplier} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Supplier</h5>}
                </div>
              </div>
            </div>

            {/* Store */}
            <div className={`${activeItem === "Store" || activeItem === "AddStore" || activeItem === "EditStore" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Store');
                  setActiveItem("Store");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Store" || activeItem === "AddStore" || activeItem === "EditStore" ?
                      <img src={Store} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Store} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Store</h5>}
                </div>
              </div>
            </div>

            {/* Warehouse */}
            <div className={`${activeItem === "Warehouse" || activeItem === "AddWarehouse" || activeItem === "EditWarehouse" || activeItem === "ViewWarehouse" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/Warehouse');
                  setActiveItem("Warehouse");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Warehouse" || activeItem === "AddWarehouse" || activeItem === "EditWarehouse" || activeItem === "ViewWarehouse" ?
                      <img src={Warehouse} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Warehouse} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Warehouse</h5>}
                </div>
              </div>
            </div>

            {/* Payment Gateway */}
            {/* <div className={`${activeItem === "Payment" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  // navigate('/layout/Payment');
                  setActiveItem("Payment");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "Payment" ?
                      <img src={Payment} className='V_icon_size text-d_color V_filter' /> :
                      <img src={Payment} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Payment Gateway</h5>}
                </div>
              </div>
            </div> */}






            {/* Reports Dropdown */}

            <div className={`${(activeItem === "ReportSalesReport" || activeItem === "ReportPurchaseReport" || activeItem === "ReportInventoryReport" || activeItem === "ReportInvoiceReport" || activeItem === "ReportSupplierPurchase" || activeItem === "ReportSupplierPayment" || activeItem === "ReportSupplierReturn" || activeItem === "ReportCustomerReport" || activeItem === "ReportExpenseReport" || activeItem === "ReportIncomeReport" || activeItem === "ReportTaxReport" || activeItem === "ReportSalesTaxReport" || activeItem === "ReportProfit") ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  if (isCollapsed) {
                    navigate('/Layout/ReportSalesReport');
                    setActiveItem("ReportSalesReport");
                  } else {
                    if (!reportsOpen) {
                      setActiveItem("ReportSalesReport");
                    } else if (!["ReportSalesReport", "ReportPurchaseReport", "ReportInventoryReport", "ReportInvoiceReport", "ReportSupplierPurchase", "ReportSupplierPayment" , "ReportSupplierReturn","ReportCustomerReport" ,  "ReportExpenseReport", "ReportIncomeReport", "TaxReport", "ReportTaxReport"].includes(activeItem)) {
                      setActiveItem("");
                    }
                    setReportsOpen(!reportsOpen);
                    navigate('/Layout/ReportSalesReport');
                  }
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} ${isCollapsed ? 'gap-3' : 'V_pading_icon'} `}>
                  <div className={`flex items-center ${isCollapsed ? '' : 'gap-5'}`}>
                    <div>
                      {(activeItem === "ReportSalesReport" || activeItem === "ReportPurchaseReport" || activeItem === "ReportInventoryReport" || activeItem === "ReportInvoiceReport" || activeItem === "ReportSupplierPurchase" || activeItem === "ReportSupplierPayment" || activeItem === "ReportSupplierReturn" || activeItem === "ReportCustomerReport" || activeItem === "ReportExpenseReport" || activeItem === "ReportIncomeReport" || activeItem === "ReportTaxReport" || activeItem === "ReportSalesTaxReport"  || activeItem === "ReportProfit") ?
                        <img src={Reports} className=' V_icon_size text-d_color V_filter' /> :
                        <img src={Reports} className=' V_icon_size' />
                      }
                    </div>
                    {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Reports</h5>}
                  </div>
                  {!isCollapsed &&
                    <div className={`transform transition-transform place-items-center duration-200 ${reportsOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  }
                </div>
              </div>
            </div>

            {/* Submenu */}
            {!isCollapsed &&
              <div className={`transition-all duration-300 ${reportsOpen ? 'block' : 'hidden'}`}>
                <ul className="mt-2">
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportSalesReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("ReportSalesReport");
                        navigate('/Layout/ReportSalesReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Sales Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportPurchaseReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("PurchaseReport");
                        navigate('/Layout/ReportPurchaseReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Purchase Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportInventoryReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("InventoryReport");
                        navigate('/Layout/ReportInventoryReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Inventory Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportInvoiceReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("InvoiceReport");
                        navigate('/Layout/ReportInvoiceReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Invoice Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportSupplierReturn" || activeItem === "ReportSupplierPayment"  || activeItem === "ReportSupplierPurchase"  ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("SupplierReport");
                        navigate('/Layout/ReportSupplierReturn');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Supplier Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportCustomerReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("CustomerReport");
                        navigate('/Layout/ReportCustomerReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Customer Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportExpenseReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("ExpenseReport");
                        navigate('/Layout/ReportExpenseReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Expense Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportIncomeReport" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("ReportIncomeReport");
                        navigate('/Layout/ReportIncomeReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Income  Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportTaxReport" || activeItem === "ReportSalesTaxReport"  ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("TaxReport");
                        navigate('/Layout/ReportTaxReport');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Tax  Report</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "ReportProfit" ? 'text-white V_text_size font-semibold' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("ReportProfit");
                        navigate('/Layout/ReportProfit');
                      }}
                    >
                      <h5 className='font-fw-lighter'>Profit & Loss Report</h5>
                    </div>
                  </li>
                </ul>
              </div>
            }






            {/* <div className={`${(activeItem === "Financial" || activeItem === "BankAccounts" || activeItem === "TaxRates" || activeItem === "Currencies") ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  if (isCollapsed) {
                    navigate('/layout/Financial');
                    setActiveItem("Financial");
                  } else {
                    if (!expenseOpen) {
                      setActiveItem("Financial");
                    } else if (!["Financial", "BankAccounts", "TaxRates", "Currencies"].includes(activeItem)) {
                      setActiveItem("");
                    }
                    setFinancialOpen(!financialOpen);
                  }
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} ${isCollapsed ? 'gap-3' : 'V_pading_icon'} `}>
                  <div className={`flex items-center ${isCollapsed ? '' : 'gap-5'}`}>
                    <div>
                      {(activeItem === "Financial" || activeItem === "BankAccounts" || activeItem === "TaxRates" || activeItem === "Currencies") ?
                        <img src={Financial} className=' V_icon_size text-d_color V_filter' /> :
                        <img src={Financial} className=' V_icon_size' />
                      }
                    </div>
                    {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Financial Setting</h5>}
                  </div>
                  {!isCollapsed &&
                    <div className={`transform transition-transform place-items-center duration-200  ${financialOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  }
                </div>
              </div>
            </div> */}

            {/* Submenu */}
            {/* {!isCollapsed &&
              <div className={`transition-all duration-300 ${financialOpen ? 'block' : 'hidden'}`}>
                <ul className="mt-2">
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "Financial" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("Financial");
                      }}
                    >
                      <h5 className='font-fw-lighter'>Payment Gateway</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "BankAccounts" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("BankAccounts");
                      }}
                    >
                      <h5 className='font-fw-lighter'>Bank Accounts</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "TaxRates" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("TaxRates");
                      }}
                    >
                      <h5 className='font-fw-lighter'>Tax Rates</h5>
                    </div>
                  </li>
                  <li className="relative pl-8 V_circle_dot">
                    <div
                      className={`py-2 cursor-pointer ${activeItem === "Currencies" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveItem("Currencies");
                      }}
                    >
                      <h5 className='font-fw-lighter'>Currencies</h5>
                    </div>
                  </li>
                </ul>
              </div>
            } */}

           {/* Tax Rates */}
           <div className={`${activeItem === "TaxRated" || activeItem === "AddTaxRate" || activeItem === "EditTaxRate" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
              <div
                className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
                onClick={() => {
                  navigate('/Layout/TaxRated');
                  setActiveItem("TaxRated");
                }}
              >
                <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                  <div>
                    {activeItem === "TaxRated" || activeItem === "AddTaxRate" || activeItem === "EditTaxRate" ?
                      <img src={TaxRatesImage} className='V_icon_size text-d_color V_filter' /> :
                      <img src={TaxRatesImage} className='V_icon_size' />
                    }
                  </div>
                  {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Tax Rates</h5>}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar