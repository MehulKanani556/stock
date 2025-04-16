import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaTags, FaListUl } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import Trash from '../Images/Dhruvin/trash.svg'
import Red from '../Images/Dhruvin/trash_red.svg';
import plus from '../Images/Parth/Plus.svg';
import '../CSS/Parth/Product.css';

const steps = [
  { label: "Product Information", icon: <FaInfoCircle /> },
  { label: "Price & Stock", icon: <LiaFileInvoiceDollarSolid /> },
  { label: "Custom Fields", icon: <FaListUl /> },
];

const AddProduct2 = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [productType, setProductType] = useState('');
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [isAddVariationOpen, setIsAddVariationOpen] = useState(false);
  const [images, setImages] = useState([]);

  
  const toggleAddVariationModal = () => setIsAddVariationOpen(!isAddVariationOpen);
  const closeAddVariationModal = () => {
    setIsAddVariationOpen(false);
    // Clean up object URLs when modal closes
    images.forEach(image => URL.revokeObjectURL(image.preview));
    setImages([]);
  };

  const handleImageUpload = (e, inputId) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      document.getElementById(inputId).value = fileName;
      setImages(prev => [...prev, {
        file: file,
        preview: URL.createObjectURL(file),
        inputId: inputId
      }]);
    }
  };

  const handleImageRemove = (index) => {
    const imageToRemove = images[index];
    URL.revokeObjectURL(imageToRemove.preview);
    document.getElementById(imageToRemove.inputId).value = '';
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.productType) {
      setProductType(location.state.productType);
    }
  }, [location.state]);

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
              <div className='sm:px-8 md:px-3 px-2 pb-7 pt-8'>

                <div>
                  <div className="w-full max-w-4xl mx-auto py-10 px-4">
                    <div className="flex justify-between items-center relative">
                      {steps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center relative">
                          {/* Line connector */}
                          {index === 0 && (
                            <div className={`absolute h-[2px] w-full top-5 left-1/2 border-dashed border-t-2 border-[#36454F]`}></div>
                          )}
                          {index === 1 && (
                            <div className={`absolute h-[2px] w-full top-5 left-1/2 border-dashed border-t-2 border-gray-400`}></div>
                          )}

                          {/* Step circle */}
                          <div
                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center relative z-10
                              ${index <= 1
                                ? "bg-[#36454F] text-white border-[#36454F]"
                                : "bg-white text-gray-500 border-gray-500"
                              }
                            `}
                          >
                            {React.cloneElement(step.icon, {
                              className: index <= 1
                                ? "text-white"
                                : "text-gray-500"
                            })}
                          </div>

                          {/* Step label */}
                          <div
                            className={`mt-2 text-sm w-12 text-center ${index <= 1
                              ? "text-[#36454F] font-medium"
                              : "text-gray-500"
                              }`}
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
                  {productType === 'single' && (
                    <div id='single' className='w-full'>
                      <div className="flex flex-wrap">
                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Quantity</label>
                            <input type="email" id="text" className="ds_main_input" placeholder="Enter quantity" required />
                          </div>
                        </div>
                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Price</label>
                            <input type="text" id="text" className="ds_main_input" placeholder="$" required />
                          </div>
                        </div>
                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Tax </label>
                            <input type="text" id="text" className="ds_main_input" placeholder="Enter Tax" required />
                          </div>
                        </div>
                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Discount Type</label>
                            <select className='ds_Select'>
                              <option value="">Select discount type</option>
                              <option value="">weekly</option>
                              <option value="">daily</option>
                            </select>
                          </div>
                        </div>
                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                          <div>
                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Qty. Alert</label>
                            <input type="text" id="text" className="ds_main_input" placeholder="Enter quantity alert" required />
                          </div>
                        </div>
                      </div>

                      <div className='flex justify-center mt-8 mb-3'>
                        <button className='ds_cancel_btn me-5'
                          onClick={() => {
                            goPrev();
                            navigate('/layout/addproduct', { state: { productType } });
                          }}
                        >Cancel</button>
                        <button className='ds_add_btn'
                          onClick={() => {
                            goNext();
                            navigate('/layout/addproduct3', { state: { productType } });
                          }}
                        >Next</button>
                      </div>
                    </div>
                  )}

                  {productType === 'variant' && (
                    <div id='variant' className='w-full'>
                      <div className="flex flex-wrap justify-between items-center p-2 sm:p-5">
                        <div className="lg:w-1/3 md:w-1/2  sm:w-1/3 w-full mb-5 px-4 pt-10">
                          <div>
                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Variant Attributes</label>
                            <select className='ds_Select'>
                              <option value="">Select variant attributes</option>
                              <option value="">weekly</option>
                              <option value="">daily</option>
                            </select>
                          </div>
                        </div>
                        <div className='ms-4 sm:ms-0 md:pt-3 sm:mt-10 md:mt-8' onClick={() => setIsAddVariationOpen(true)}>
                          <button className='ds_add_currency lg:mx-5' >+ Add More</button>
                        </div>
                      </div>

                      <div className='pt-7'>
                        <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] bg-white'>
                          <div className='relative overflow-x-auto'>
                            <table className='w-full ds_income_table'>
                              <thead>
                                <tr>
                                  <th>Variation</th>
                                  <th>Variation Value</th>
                                  <th>SKU</th>
                                  <th>Price</th>
                                  <th>Qty.</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Color</td>
                                  <td>Red</td>
                                  <td>P1234</td>
                                  <td>$120</td>
                                  <td>5</td>
                                  <td>
                                    <div className='flex'>
                                      <button className='V_plus_btn p-2 me-3'>
                                        <img src={plus} alt="" />
                                      </button>
                                      <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                                        <img src={Red} alt="" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Color</td>
                                  <td>Green</td>
                                  <td>P1234</td>
                                  <td>$120</td>
                                  <td>5</td>
                                  <td>
                                    <div className='flex'>
                                      <button className='V_plus_btn p-2 me-3'>
                                        <img src={plus} alt="" />
                                      </button>
                                      <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                                        <img src={Red} alt="" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr style={{ borderBottom: 'none' }}>
                                  <td>Color</td>
                                  <td>Blue</td>
                                  <td>P1234</td>
                                  <td>$120</td>
                                  <td>5</td>
                                  <td>
                                    <div className='flex'>
                                      <button className='V_plus_btn p-2 me-3'>
                                        <img src={plus} alt="" />
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
                        </div>
                      </div>


                      <div className="flex flex-wrap justify-between items-center pt-10 p-5">
                        <div className="lg:w-1/3 md:w-2/3  sm:w-1/3 w-full mb-5 px-4 pt-10">
                          <div>
                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Variant Attributes</label>
                            <select className='ds_Select'>
                              <option value="">Select variant attributes</option>
                              <option value="">weekly</option>
                              <option value="">daily</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className='pt-7'>
                        <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] bg-white'>
                          <div className='relative overflow-x-auto'>
                            <table className='w-full ds_income_table'>
                              <thead>
                                <tr>
                                  <th>Variation</th>
                                  <th>Variation Value</th>
                                  <th>SKU</th>
                                  <th>Price</th>
                                  <th>Qty.</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Color</td>
                                  <td>Red</td>
                                  <td>P1234</td>
                                  <td>$120</td>
                                  <td>5</td>
                                  <td>
                                    <div className='flex'>
                                      <button className='V_plus_btn p-2 me-3'>
                                        <img src={plus} alt="" />
                                      </button>
                                      <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                                        <img src={Red} alt="" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Color</td>
                                  <td>Green</td>
                                  <td>P1234</td>
                                  <td>$120</td>
                                  <td>5</td>
                                  <td>
                                    <div className='flex'>
                                      <button className='V_plus_btn p-2 me-3'>
                                        <img src={plus} alt="" />
                                      </button>
                                      <button onClick={() => setDeleteToggle(true)} className='ds_crud_btn'>
                                        <img src={Red} alt="" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr style={{ borderBottom: 'none' }}>
                                  <td>Color</td>
                                  <td>Blue</td>
                                  <td>P1234</td>
                                  <td>$120</td>
                                  <td>5</td>
                                  <td>
                                    <div className='flex'>
                                      <button className='V_plus_btn p-2 me-3'>
                                        <img src={plus} alt="" />
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
                        </div>
                      </div>


                      <div className='flex justify-center mt-12 mb-3 '>
                        <button className='ds_cancel_btn me-5'
                          onClick={() => {
                            goPrev();
                            navigate('/layout/addproduct', { state: { productType } });
                          }}
                        >Cancel</button>
                        <button className='ds_add_btn'
                          onClick={() => {
                            goNext();
                            navigate('/layout/addproduct3', { state: { productType } });
                          }}
                        >Next</button>
                      </div>


                    </div>
                  )}
                </div>



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
                      Variant Product ?

                    </p>
                  </div>
                  <div className='text-center mt-10 mb-6'>
                    <button type="button" className='ds_cancel_btn me-4' onClick={() => setDeleteToggle(false)}>Cancel
                    </button>
                    <button type="button" className='ds_deletePopup' data-autofocus onClick={() => setDeleteToggle(false)}>Delete
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>



        {/* Modal */}
        {isAddVariationOpen && (
          <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen  overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:px-7 lg:px-8 V_border_niche">
                  <h3 className="V_chnage_main_heading">
                    Add Variation
                  </h3>
                  <button
                    type="button"
                    onClick={closeAddVariationModal}
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
                    <div className="w-full mb-3">
                      <div>
                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Variant Thumbnail</label>
                        <div className='flex justify-between V_image_input1'>
                          <input
                            type="text"
                            id="fileDisplay1"
                            className="outline-none w-2/3"
                            placeholder="Select Image"
                            readOnly
                            required
                          />
                          <input
                            type="file"
                            id="fileInput1"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, 'fileDisplay1')}
                            accept="image/*"
                          />
                          <button
                            className='V_browse_btn w-1/3'
                            onClick={() => document.getElementById('fileInput1').click()}
                          >
                            Browse
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-3">
                      <div>
                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Variant Thumbnail</label>
                        <div className='flex justify-between V_image_input1'>
                          <input
                            type="text"
                            id="fileDisplay2"
                            className="outline-none w-2/3"
                            placeholder="Select Image"
                            readOnly
                            required
                          />
                          <input
                            type="file"
                            id="fileInput2"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, 'fileDisplay2')}
                            accept="image/*"
                          />
                          <button
                            className='V_browse_btn w-1/3'
                            onClick={() => document.getElementById('fileInput2').click()}
                          >
                            Browse
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Display selected images */}
                    {images.length > 0 && (
                      <div className="flex flex-wrap gap-4 mt-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative w-24 h-24 border border-black rounded-md">
                            <img
                              src={image.preview}
                              alt={`Selected ${index + 1}`}
                              className="w-full h-full object-cover rounded"
                            />
                            <button
                              className="absolute -top-0 -right-0  text-red-500  p-1"
                              onClick={() => handleImageRemove(index)}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="w-full mb-3">
                      <div>
                        <label for="barcode" className="block mb-1 text-md font-medium text-d_color dark:text-white">Barcode</label>
                        <input type="text" id="text" className="ds_main_input" placeholder="Enter Barcode" required />
                      </div>
                    </div>
                    <div className="w-full mb-3">
                      <div>
                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Quantity</label>
                        <input type="email" id="text" className="ds_main_input" placeholder="Enter quantity" required />
                      </div>
                    </div>
                    <div className="w-full mb-3">
                      <div>
                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Alert Quantity</label>
                        <input type="email" id="text" className="ds_main_input" placeholder="Enter alert quantity" required />
                      </div>
                    </div>
                    <div className="w-full mb-3">
                      <div>
                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Tax</label>
                        <select className='ds_Select'>
                          <option value="">Select tax</option>
                          <option value="">weekly</option>
                          <option value="">daily</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full mb-3">
                      <div>
                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Discount Type</label>
                        <select className='ds_Select'>
                          <option value="">Select discount type</option>
                          <option value="">weekly</option>
                          <option value="">daily</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full mb-3">
                      <div>
                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Discount Value</label>
                        <input type="email" id="text" className="ds_main_input" placeholder="Enter discount value" required />
                      </div>
                    </div>


                    <div className='flex justify-center items-center gap-5 V_margine_top_btn'>
                      <button className='V_change_password_cancel_btn' onClick={closeAddVariationModal}>Cancel</button>
                      <button className='V_change_password_change_btn'>Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}



      </div>
    </div>
  )
}

export default AddProduct2
