import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Parth/Sidebar.css';
import dashboard from './Images/Parth/dashboard.png';
import Product from './Images/Parth/Product.png';
import RawMaterial from './Images/Parth/RawMaterial.png';
import ExpiredProduct from './Images/Parth/ExpiredProduct.png';
import LawStocks from './Images/Parth/LawStocks.png';
import Catogery from './Images/Parth/Catogery.png';
import SubCatogery from './Images/Parth/SubCatogery.png';
import Unit from './Images/Parth/Unit.png';
import Variant from './Images/Parth/Variant.png';
import warranty from './Images/Parth/warranty.png';
import sales from './Images/Parth/sales.png';
import invoice from './Images/Parth/invoice.png';
import return1 from './Images/Parth/return.png';
import Quotation from './Images/Parth/Quotation.png';
import Expense from './Images/Parth/Expense.png';
import Supplier from './Images/Parth/Supplier.png';
import Store from './Images/Parth/Store.png';
import Warehouse from './Images/Parth/Warehouse.png';
import Payment from './Images/Parth/Payment.png';
import Reports from './Images/Parth/Reports.png';
import Financial from './Images/Parth/FinancialSetting.png';
import logo from './Images/Parth/logocircle.png';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [activeItem, setActiveItem] = useState("")
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [financialOpen, setFinancialOpen] = useState(false);
  const [icon, setIcon] = useState(false);
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
    <div className={`sidebar-container transition-all duration-300  ${isCollapsed ? 'V_collapsed' : 'V_expanded'}`}>
      <div className=''>
        <div>
          <div className='V_logo'>
            {!isCollapsed && <h3 className='text-center text-5xl font-fw-bolder py-5'>LOGO</h3>}
            {isCollapsed && <h3 className='text-center text-xl font-fw-bolder py-5'>Logo</h3>}
            <div className={`${isCollapsed ? 'V_logo_line2': 'V_logo_line'}`}>
              <img src={logo} alt="" className='V_logo_img' />
              <MdKeyboardDoubleArrowLeft
                className={`text-black V_arow transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                onClick={toggleSidebar}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>


          <div className={`${activeItem === "dashboard" ? 'bg-white text-d_color' : 'text-white'} py-3 mt-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                navigate('/layout/dashboard');
                setActiveItem("dashboard");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "dashboard" ?
                    <img src={dashboard} className='V_icon_size V_filter' /> :
                    <img src={dashboard} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Dashboard</h5>}
              </div>
            </div>
          </div>

          <div className={`${activeItem === "Product" ? 'bg-white text-d_color' : 'text-white'} py-3 `}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                navigate('/layout/Product');
                setActiveItem("Product");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Product" ?
                    <img src={Product} className=' V_icon_size V_filter' /> :
                    <img src={Product} className=' V_icon_size filter grayscale brightness-0 invert' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Product</h5>}
              </div>
            </div>
          </div>

          {/* Raw Material */}
          <div className={`${activeItem === "RawMaterial" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                navigate('/layout/RawMaterial');
                setActiveItem("RawMaterial");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "RawMaterial" ?
                    <img src={RawMaterial} className='V_icon_size V_filter' /> :
                    <img src={RawMaterial} className='V_icon_size filter grayscale brightness-0 invert' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Raw Material</h5>}
              </div>
            </div>
          </div>


          {/* Expired Products */}
          <div className={`${activeItem === "ExpiredProduct" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/ExpiredProduct');
                setActiveItem("ExpiredProduct");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "ExpiredProduct" ?
                    <img src={ExpiredProduct} className='V_icon_size V_filter' /> :
                    <img src={ExpiredProduct} className='V_icon_size filter grayscale brightness-0 invert' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Expired Products</h5>}
              </div>
            </div>
          </div>


          {/* Low Stocks */}
          <div className={`${activeItem === "LawStocks" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/LawStocks');
                setActiveItem("LawStocks");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "LawStocks" ?
                    <img src={LawStocks} className='V_icon_size V_filter' /> :
                    <img src={LawStocks} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Low Stocks</h5>}
              </div>
            </div>
          </div>


          {/* Category */}
          <div className={`${activeItem === "Catogery" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/Catogery');
                setActiveItem("Catogery");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Catogery" ?
                    <img src={Catogery} className='V_icon_size text-d_color V_filter' /> :
                    <img src={Catogery} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Category</h5>}
              </div>
            </div>
          </div>

          {/* Subcategory */}
          <div className={`${activeItem === "SubCatogery" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/SubCatogery');
                setActiveItem("SubCatogery");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "SubCatogery" ?
                    <img src={SubCatogery} className='V_icon_size text-d_color V_filter' /> :
                    <img src={SubCatogery} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Subcategory</h5>}
              </div>
            </div>
          </div>

          {/* Unit */}
          <div className={`${activeItem === "Unit" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/Unit');
                setActiveItem("Unit");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Unit" ?
                    <img src={Unit} className='V_icon_size text-d_color V_filter' /> :
                    <img src={Unit} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Unit</h5>}
              </div>
            </div>
          </div>

          {/* Variant Attributes */}
          <div className={`${activeItem === "Variant" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/Variant');
                setActiveItem("Variant");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Variant" ?
                    <img src={Variant} className='V_icon_size text-d_color V_filter' /> :
                    <img src={Variant} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Variant Attributes</h5>}
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className={`${activeItem === "warranty" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/warranty');
                setActiveItem("warranty");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "warranty" ?
                    <img src={warranty} className='V_icon_size V_filter' /> :
                    <img src={warranty} className='V_icon_size filter grayscale brightness-0 invert' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Warranty</h5>}
              </div>
            </div>
          </div>


          {/* Sales */}
          <div className={`${activeItem === "sales" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/sales');
                setActiveItem("sales");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "sales" ?
                    <img src={sales} className='V_icon_size text-d_color V_filter' /> :
                    <img src={sales} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Sales</h5>}
              </div>
            </div>
          </div>

          {/* Invoice */}
          <div className={`${activeItem === "invoice" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/invoice');
                setActiveItem("invoice");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "invoice" ?
                    <img src={invoice} className='V_icon_size text-d_color V_filter' /> :
                    <img src={invoice} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Invoice</h5>}
              </div>
            </div>
          </div>

          {/* Return Order */}
          <div className={`${activeItem === "return" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/return');
                setActiveItem("return");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "return" ?
                    <img src={return1} className='V_icon_size text-d_color V_filter' /> :
                    <img src={return1} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Return Order</h5>}
              </div>
            </div>
          </div>

          {/* Quotation */}
          <div className={`${activeItem === "Quotation" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/Quotation');
                setActiveItem("Quotation");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Quotation" ?
                    <img src={Quotation} className='V_icon_size text-d_color V_filter' /> :
                    <img src={Quotation} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Quotation</h5>}
              </div>
            </div>
          </div>





          {/* Expense Dropdown */}
          <div className={`${(activeItem === "Expense" || activeItem === "ExpenseCategory") ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                if (isCollapsed) {
                  navigate('/layout/Expense');
                  setActiveItem("Expense");
                } else {
                  if (!expenseOpen) {
                    setActiveItem("Expense");
                  } else if (!["Expense", "ExpenseCategory"].includes(activeItem)) {
                    setActiveItem("");
                  }
                  setExpenseOpen(!expenseOpen);
                }
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} ${isCollapsed ? 'gap-3' : 'V_pading_icon'} `}>
                <div className={`flex items-center ${isCollapsed ? '' : 'gap-5'}`}>
                  <div>
                    {(activeItem === "Expense" || activeItem === "ExpenseCategory") ?
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
                    className={`py-2 cursor-pointer ${activeItem === "Expense" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("Expense");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Expense</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "ExpenseCategory" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("ExpenseCategory");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Expense Category</h5>
                  </div>
                </li>
              </ul>
            </div>
          }





          {/* Supplier */}
          <div className={`${activeItem === "Supplier" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={`cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/Supplier');
                setActiveItem("Supplier");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Supplier" ?
                    <img src={Supplier} className='V_icon_size text-d_color V_filter' /> :
                    <img src={Supplier} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Supplier</h5>}
              </div>
            </div>
          </div>

          {/* Store */}
          <div className={`${activeItem === "Store" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/Store');
                setActiveItem("Store");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Store" ?
                    <img src={Store} className='V_icon_size text-d_color V_filter' /> :
                    <img src={Store} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Store</h5>}
              </div>
            </div>
          </div>

          {/* Warehouse */}
          <div className={`${activeItem === "Warehouse" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                // navigate('/layout/Warehouse');
                setActiveItem("Warehouse");
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-5 ${isCollapsed ? '' : 'V_pading_icon'}`}>
                <div>
                  {activeItem === "Warehouse" ?
                    <img src={Warehouse} className='V_icon_size text-d_color V_filter' /> :
                    <img src={Warehouse} className='V_icon_size' />
                  }
                </div>
                {!isCollapsed && <h5 className='V_text_size font-fw-lighter'>Warehouse</h5>}
              </div>
            </div>
          </div>

          {/* Payment Gateway */}
          <div className={`${activeItem === "Payment" ? 'bg-white text-d_color' : 'text-white'} py-3`}>
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
          </div>






          {/* Reports Dropdown */}

          <div className={`${(activeItem === "Reports" || activeItem === "PurchaseReport" || activeItem === "InventoryReport" || activeItem === "InvoiceReport" || activeItem === "SupplierReport" || activeItem === "CustomerReport" || activeItem === "ExpenseReport" || activeItem === "IncomeReport" || activeItem === "TaxReport" || activeItem === "ProfitLossReport") ? 'bg-white text-d_color' : 'text-white'} py-3`}>
            <div
              className={` cursor-pointer ${isCollapsed ? 'flex justify-center' : 'ms-3'}`}
              onClick={() => {
                if (isCollapsed) {
                  navigate('/layout/Reports');
                  setActiveItem("Reports");
                } else {
                  if (!reportsOpen) {
                    setActiveItem("Reports");
                  } else if (!["Reports", "PurchaseReport", "InventoryReport", "InvoiceReport", "SupplierReport", "CustomerReport", "ExpenseReport", "IncomeReport", "TaxReport", "ProfitLossReport"].includes(activeItem)) {
                    setActiveItem("");
                  }
                  setReportsOpen(!reportsOpen);
                }
              }}
            >
              <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''} ${isCollapsed ? 'gap-3' : 'V_pading_icon'} `}>
                <div className={`flex items-center ${isCollapsed ? '' : 'gap-5'}`}>
                  <div>
                    {(activeItem === "Reports" || activeItem === "PurchaseReport" || activeItem === "InventoryReport" || activeItem === "InvoiceReport" || activeItem === "SupplierReport" || activeItem === "CustomerReport" || activeItem === "ExpenseReport" || activeItem === "IncomeReport" || activeItem === "TaxReport" || activeItem === "ProfitLossReport") ?
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
                    className={`py-2 cursor-pointer ${activeItem === "Reports" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("Reports");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Sales Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "PurchaseReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("PurchaseReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Purchase Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "InventoryReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("InventoryReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Inventory Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "InvoiceReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("InvoiceReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Invoice Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "SupplierReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("SupplierReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Supplier Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "CustomerReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("CustomerReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Customer Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "ExpenseReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("ExpenseReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Expense Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "IncomeReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("IncomeReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Income  Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "TaxReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("TaxReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Tax  Report</h5>
                  </div>
                </li>
                <li className="relative pl-8 V_circle_dot">
                  <div
                    className={`py-2 cursor-pointer ${activeItem === "ProfitLossReport" ? 'text-white V_text_size' : 'text-gray-300 V_text_size'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveItem("ProfitLossReport");
                    }}
                  >
                    <h5 className='font-fw-lighter'>Profit & Loss Report</h5>
                  </div>
                </li>
              </ul>
            </div>
          }






          <div className={`${(activeItem === "Financial" || activeItem === "BankAccounts" || activeItem === "TaxRates" || activeItem === "Currencies") ? 'bg-white text-d_color' : 'text-white'} py-3`}>
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
          </div>

          {/* Submenu */}
          {!isCollapsed && 
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
          }


        </div>
      </div>
    </div>
  )
}

export default Sidebar