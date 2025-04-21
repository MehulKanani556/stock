import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaTags, FaListUl } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { RiUserSearchFill } from 'react-icons/ri';


const steps = [
    { label: "Product Information", icon: <RiUserSearchFill /> },
    { label: "Price & Stock", icon: <FaInfoCircle /> },
    { label: "Custom Fields", icon: <LiaFileInvoiceDollarSolid /> },
];


const EditRawMaterial = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);

    const navigate = useNavigate();


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
                        <h2 className='text-d_color text-[24px] font-medium'>Edit Raw Material</h2>
                        <p className='cursor-pointer'><Link to="/Layout/Dashboard" className='text-[#727272]'>Dashboard /</Link> <Link to="/Layout/RawMaterial" className='text-[#727272]'>Raw Material /</Link> <span className='text-d_color font-semibold'>Edit Raw Material</span></p>
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
                                                        <div className={`absolute h-[2px] w-full top-5 left-1/2 border-dashed border-t-2 ${isStepCompleted(index) ? 'border-[#36454F]' : 'border-gray-400'
                                                            }`}></div>
                                                    )}

                                                    {/* Step circle */}
                                                    <div
                                                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center relative z-10
                              ${currentStep === index
                                                                ? "bg-[#36454F] text-white border-[#36454F]"
                                                                : isStepCompleted(index)
                                                                    ? "bg-[#36454F] text-white border-[#36454F]"
                                                                    : "bg-white text-gray-500 border-gray-500"
                                                            }
                            `}
                                                    >
                                                        {React.cloneElement(step.icon, {
                                                            className: currentStep === index || isStepCompleted(index)
                                                                ? "text-white"
                                                                : "text-gray-500"
                                                        })}
                                                    </div>

                                                    {/* Step label */}
                                                    <div
                                                        className={`mt-2 text-sm w-12 text-center ${currentStep === index || isStepCompleted(index)
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

                                    </div>

                                    {currentStep === 0 && (
                                        <>
                                            <div>
                                                <div className="flex flex-wrap">
                                                    <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                        <div>
                                                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Supplier </label>
                                                            <select className='ds_Select'>
                                                                <option value="">Select Supplier</option>
                                                                <option value="">supply 1</option>
                                                                <option value="">supply 2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                        <div>
                                                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Contact Person Name</label>
                                                            <input type="text" id="text" className="ds_main_input" placeholder="Enter Contact person Name" required />
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                        <div>
                                                            <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Contact No.</label>
                                                            <input type="text" id="text" className="ds_main_input" placeholder="Contact No." required />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className='flex justify-center mt-8 mb-3'>
                                                    <button className='ds_cancel_btn me-5'
                                                        onClick={() => {
                                                            navigate('/Layout/RawMaterial');
                                                        }}
                                                    >Cancel</button>
                                                    <button
                                                        className='ds_add_btn'
                                                        onClick={goNext}
                                                        disabled={currentStep === steps.length - 1}
                                                    >Next</button>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 1 && (
                                        <div>
                                            <div className="flex flex-wrap">
                                                <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                    <div>
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Product Type </label>
                                                        <select className='ds_Select'>
                                                            <option value="">Select product type</option>
                                                            <option value="">supply 1</option>
                                                            <option value="">supply 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                    <div>
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Product Name</label>
                                                        <input type="text" id="text" className="ds_main_input" placeholder="Enter Product Name" required />
                                                    </div>
                                                </div>
                                                <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                    <div>
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Unit</label>
                                                        <select className='ds_Select'>
                                                            <option value="">Select Unit</option>
                                                            <option value="">supply 1</option>
                                                            <option value="">supply 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                    <div>
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Barcode</label>
                                                        <input type="text" id="text" className="ds_main_input" placeholder="Enter Barcode" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex justify-center mt-8 mb-3'>
                                                <button
                                                    className='ds_cancel_btn me-5'
                                                    onClick={() => setCurrentStep(currentStep - 1)}
                                                >Previous</button>
                                                <button
                                                    className='ds_add_btn'
                                                    onClick={goNext}
                                                    disabled={currentStep === steps.length - 1}
                                                >Next</button>
                                            </div>
                                        </div>
                                    )}


                                    {currentStep === 2 && (
                                        <div>
                                            <div className="flex flex-wrap">
                                                <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                    <div>
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Quantity</label>
                                                        <input type="text" id="text" className="ds_main_input" placeholder="Enter quantity" required />
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
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Tax Type</label>
                                                        <select className='ds_Select'>
                                                            <option value="">Select Tax type</option>
                                                            <option value="">supply 1</option>
                                                            <option value="">supply 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                    <div>
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Discount Type</label>
                                                        <select className='ds_Select'>
                                                            <option value="">Select discount type</option>
                                                            <option value="">supply 1</option>
                                                            <option value="">supply 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                                    <div>
                                                        <label for="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Discount</label>
                                                        <input type="text" id="text" className="ds_main_input" placeholder="Enter Discount" required />  
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
                                                <button
                                                    className='ds_cancel_btn me-5'
                                                    onClick={() => setCurrentStep(currentStep - 1)}
                                                >Previous</button>
                                                <button
                                                    className='ds_add_btn'
                                                    onClick={() => navigate("/Layout/RawMaterial")}
                                                >Update</button>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditRawMaterial
