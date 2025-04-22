import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import Toast from './Toast';

const EditExpiredProduct = () => {
    const [showToast, setShowToast] = useState(false);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const clearFile = () => {
        setFile(null);
        fileInputRef.current.value = null;
    };

    const dateInputRef = useRef(null);
    const dateInputRef1 = useRef(null);

    const handleIconClick = () => {
        dateInputRef.current.showPicker();
    };

    const handleIconClick1 = () => {
        dateInputRef1.current.showPicker();
    };

    const handleUpdate = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const navigate = useNavigate();


    return (
        <div>
            <div className='ds_main'>
                <div className='sm:px-8 px-4 pt-7'>
                    <div>
                        <h2 className='text-d_color text-[24px] font-medium'>Edit Expired Product</h2>
                        <p className='cursor-pointer'><Link to="/Layout/Dashboard" className='text-[#727272]'>Dashboard /</Link> <Link to="/Layout/ExpiredProduct" className='text-[#727272]'>Expired Product /</Link> <span className='text-d_color font-semibold'>Edit Expired Product</span></p>
                    </div>
                    <div className='pt-7'>
                        <div className='ds_main_box'>
                            <div className='sm:px-8 px-2 pb-7 pt-8'>


                                <div>



                                    <div className="flex flex-wrap">
                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <div>
                                                <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">SKU</label>
                                                <input type="text" id="text" className="ds_main_input" placeholder="P1234" required />
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Product Image</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={file ? file.name : ""}
                                                    readOnly
                                                    className="ds_main_input"
                                                />
                                                {file && (
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt="preview"
                                                        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded object-cover border"
                                                    />
                                                )}
                                                {file && (
                                                    <button
                                                        onClick={clearFile}
                                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                                                    >
                                                        ×
                                                    </button>
                                                )}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                />
                                            </div>
                                        </div>

                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <div>
                                                <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Product Name</label>
                                                <input type="text" id="text" className="ds_main_input" placeholder="Pen" required />
                                            </div>
                                        </div>

                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <div>
                                                <div className='relative'>
                                                    <label className='text-d_color font-medium block mb-1'>Manufacturing Date</label>
                                                    <input ref={dateInputRef} type="date" className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3' placeholder='Enter Manufacturing date' required />
                                                    <FaCalendarAlt onClick={handleIconClick} className='absolute top-[39px] right-[15px] cursor-pointer' fill='#36454F' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <div>
                                                <div className='relative'>
                                                    <label className='text-d_color font-medium block mb-1'>Expiry Date</label>
                                                    <input ref={dateInputRef1} type="date" className='ds_report_date border border-d_color h-[40px] rounded-[5px] w-full px-3' placeholder='Enter Expiry date' required />
                                                    <FaCalendarAlt onClick={handleIconClick1} className='absolute top-[39px] right-[15px] cursor-pointer' fill='#36454F' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-center mt-8 mb-3'>
                                        <button className='ds_cancel_btn me-5' onClick={() => navigate("/Layout/ExpiredProduct")}>Cancel</button>
                                        <button className='ds_update_btn' onClick={handleUpdate}>Update</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showToast && (
                    <Toast
                        message="Item Updated Successfully!"
                        onClose={() => setShowToast(false)}
                    />
                )}
            </div >
        </div >
    )
}

export default EditExpiredProduct