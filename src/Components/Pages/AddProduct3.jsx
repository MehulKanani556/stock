import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaTags, FaListUl } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import barcode from '../Images/Parth/barcode.svg';


const steps = [
  { label: "Product Information", icon: <FaInfoCircle /> },
  { label: "Price & Stock", icon: <LiaFileInvoiceDollarSolid /> },
  { label: "Custom Fields", icon: <FaListUl /> },
];

const AddProduct3 = () => {
  
  const [currentStep, setCurrentStep] = useState([]);
  const [completedSteps, setCompletedSteps] = useState([2]);
  const [productType, setProductType] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.productType) {
      setProductType(location.state.productType);
    }
  }, [location]);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(completedSteps.filter(step => step !== currentStep - 1));
    }
  };

  const isStepCompleted = (index) => {
    return completedSteps.includes(index);
  };

  return (
    <div>
      <div className='ds_main'>
        <div className='sm:px-8 px-4 pt-7'>
          <div>
            <h2 className='text-d_color text-[24px] font-medium'>Add Product</h2>
            <p className='cursor-pointer'><Link to="/layout/dashboard" className='text-[#727272]'>Dashboard /</Link> <Link to="/layout/product" className='text-[#727272]'>Product /</Link> <span className='text-d_color font-semibold'>Add Product</span></p>
          </div>
          <div className='pt-7'>
            <div className='ds_main_box'>
              <div className='sm:px-8 px-2 pb-7 pt-8'>

                <div>
                  <div className="w-full max-w-4xl mx-auto py-10 px-4">
                    <div className="flex justify-between items-center relative">
                      {steps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center relative">
                          {/* Line connector */}
                          {index < steps.length - 1 && (
                            <div className="absolute h-[2px] w-full top-5 left-1/2 border-dashed border-t-2 border-[#36454F]"></div>
                          )}

                          {/* Step circle */}
                          <div
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center relative z-10 bg-[#36454F] text-white border-[#36454F]"
                          >
                            {React.cloneElement(step.icon, {
                              className: "text-white"
                            })}
                          </div>

                          {/* Step label */}
                          <div
                            className="mt-2 text-sm w-12 text-center text-[#36454F] font-medium"
                          >
                            {step.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    {/* <div className="mt-10 flex justify-between">
                      <button
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        onClick={goPrev}
                        disabled={currentStep === 0}
                      >
                        Previous
                      </button>
                      <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                        onClick={goNext}
                        disabled={currentStep === steps.length - 1}
                      >
                        Next
                      </button>
                    </div> */}
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                    <div>
                      <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Warranty Type</label>
                      <select className='ds_Select'>
                        <option value="">Select warranty type</option>
                        <option value="">category1</option>
                        <option value="">category2</option>
                      </select>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                    <div>
                      <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Manufacture Date</label>
                      <input type="Date" id="text" className="ds_main_input" placeholder="Select Mfg. date" required />
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                    <div>
                      <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Expiry Date</label>
                      <input type="Date" id="text" className="ds_main_input" placeholder="Select Exp. date" required />
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                    <div>
                      <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Product Image</label>
                      <div className='flex justify-between V_image_input1'>
                        <input
                          type="text"
                          id="fileDisplay"
                          className="outline-none w-2/3"
                          placeholder="Select Image"
                          readOnly
                          required
                        />
                        <input
                          type="file"
                          id="fileInput"
                          className="hidden"
                          onChange={(e) => {
                            const fileName = e.target.files[0]?.name;
                            document.getElementById('fileDisplay').value = fileName || '';
                          }}
                          accept="image/*"
                        />
                        <button
                          className='V_browse_btn w-1/3'
                          onClick={() => document.getElementById('fileInput').click()}
                        >
                          Generate
                        </button>
                      </div>

                    </div>
                  </div>
                  <div className="lg:w-1/3 md:1/3 sm:w-full w-full mt-6 px-4 pt-1">
                    <div>
                      <img src={barcode} alt="" />
                    </div>
                  </div>
                </div>

                <div className='flex justify-center mt-8 mb-3'>
                  <button className='ds_cancel_btn me-5'
                    onClick={() => {
                      goPrev();
                      navigate('/layout/addproduct2', { state: { productType } });
                    }}
                  >Previous</button>
                  <button
                    className='ds_add_btn'
                    onClick={() => {
                      goNext();
                      navigate('/layout/product', { state: { productType } });
                    }}
                    disabled={currentStep === steps.length - 1}
                  >Add</button>
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AddProduct3
