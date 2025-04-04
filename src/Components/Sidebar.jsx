import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './CSS/Parth/Sidebar.css';
import RawMaterial from './Images/Parth/raw.png';
import Expired from './Images/Parth/expiredproduct.png';
import { FaBookmark, FaBoxOpen } from 'react-icons/fa';
import Law from './Images/Parth/lawstocks.png';
import LawActive from './Images/Parth/lawactive.png';
import catogery from './Images/Parth/catogery.png';
import catogeryActive from './Images/Parth/catogeryActive.png';
import subcatogery from './Images/Parth/subcatogery.png';
import subcatogeryActive from './Images/Parth/subcatogeryActive.png';
import Unit from './Images/Parth/Unit.png';
import UnitActive from './Images/Parth/unitActive.png';
import Variant from './Images/Parth/variant.png';
import VariantActive from './Images/Parth/variantactive.png';
import sales from './Images/Parth/Sales.png';
import salesActive from './Images/Parth/salesActive.png';
import invoice from './Images/Parth/invoice.png';
import invoiceActive from './Images/Parth/invoiceActive.png';
import returnOrder from './Images/Parth/Return.png';
import returnActive from './Images/Parth/returnactive.png';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    setActiveItem(window.location.pathname.split('/')[2])
  }, [window.location.pathname])


  return (
    <div className=''>
      <div className=''>
        <div>
          <h3 className='text-center text-5xl font-fw-bolder py-5'>LOGO</h3>

          <div className={`${activeItem === "dashboard" ? 'bg-white text-black' : 'text-white'} py-3 mt-3`}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                navigate('/layout/dashboard');
                setActiveItem("dashboard");
              }}
            >
              <div className='flex items-center  gap-5  V_pading_icon'>
                <div>
                  {activeItem === "dashboard" ? <AiFillHome className='text-4xl text-d_color' /> : <AiFillHome className='text-4xl' />}
                </div>
                <h5 className='text-2xl font-fw-lighter'>Dashboard</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "Product" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                navigate('/layout/Product');
                setActiveItem("Product");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "Product" ? <FaBoxOpen className='text-4xl text-d_color' /> : <FaBoxOpen className='text-4xl' />}
                </div>
                <h5 className='text-2xl font-fw-lighter'>Product</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "RawMaterial" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                navigate('/layout/RawMaterial');
                setActiveItem("RawMaterial");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "RawMaterial" ?
                    <img src={RawMaterial} className='text-4xl w-9 h-10 V_filter' /> :
                    <img src={RawMaterial} className='text-4xl w-9 h-10 filter grayscale brightness-0 invert' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Raw Material</h5>
              </div>
            </div>
          </div>


          <div className={`${activeItem === "ExpiredProduct" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/ExpiredProduct');
                setActiveItem("ExpiredProduct");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "ExpiredProduct" ?
                    <img src={Expired} className='text-4xl w-9 h-9 V_filter' /> :
                    <img src={Expired} className='text-4xl w-9 h-9 filter grayscale brightness-0 invert' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Expired Products</h5>
              </div>
            </div>
          </div>


          <div className={`${activeItem === "LawStocks" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/LawStocks');
                setActiveItem("LawStocks");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "LawStocks" ?
                    <img src={LawActive} className='text-4xl w-9 h-9 ' /> :
                    <img src={Law} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Low Stocks</h5>
              </div>
            </div>
          </div>


          <div className={`${activeItem === "Catogery" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/Catogery');
                setActiveItem("Catogery");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "Catogery" ?
                    <img src={catogeryActive} className='text-4xl w-9 h-9 text-d_color ' /> :
                    <img src={catogery} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Category</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "SubCatogery" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/SubCatogery');
                setActiveItem("SubCatogery");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "SubCatogery" ?
                    <img src={subcatogeryActive} className='text-4xl w-9 h-9 text-d_color' /> :
                    <img src={subcatogery} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Subcategory</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "Unit" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/Unit');
                setActiveItem("Unit");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "Unit" ?
                    <img src={UnitActive} className='text-4xl w-9 h-9 text-d_color' /> :
                    <img src={Unit} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Unit</h5>
              </div>
            </div>
          </div>


          <div className={`${activeItem === "Variant" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/Variant');
                setActiveItem("Variant");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "Variant" ?
                    <img src={VariantActive} className='text-4xl w-9 h-9 text-d_color' /> :
                    <img src={Variant} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Variant Attributes</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "warranty" ? 'bg-white text-black' : 'text-white'} py-3 mt-3`}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/warranty');
                setActiveItem("warranty");
              }}
            >
              <div className='flex items-center  gap-5  V_pading_icon'>
                <div>
                  {activeItem === "warranty" ? <FaBookmark className='text-4xl text-d_color' /> : <FaBookmark className='text-4xl' />}
                </div>
                <h5 className='text-2xl font-fw-lighter'>Warranty</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "sales" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/sales');
                setActiveItem("sales");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "sales" ?
                    <img src={salesActive} className='text-4xl w-9 h-9 text-d_color' /> :
                    <img src={sales} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Sales</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "invoice" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/invoice');
                setActiveItem("invoice");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "invoice" ?
                    <img src={invoiceActive} className='text-4xl w-9 h-9 text-d_color' /> :
                    <img src={invoice} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>invoice</h5>
              </div>
            </div>
          </div>

          <div className={`${activeItem === "return" ? 'bg-white text-black' : 'text-white'} py-3 `}>
            <div
              className='ms-3 ds_active_pad cursor-pointer'
              onClick={() => {
                // navigate('/layout/return');
                setActiveItem("return");
              }}
            >
              <div className='flex items-center gap-5  V_pading_icon'>
                <div>
                  {activeItem === "return" ?
                    <img src={returnActive} className='text-4xl w-9 h-9 text-d_color ' /> :
                    <img src={returnOrder} className='text-4xl w-9 h-9 ' />
                  }
                </div>
                <h5 className='text-2xl font-fw-lighter'>Return Order</h5>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Sidebar