import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaTags, FaListUl } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { RiUserSearchFill } from 'react-icons/ri';


const AddCategory = () => {

    const navigate = useNavigate();



    return (
        <div>
            <div className='ds_main'>
                <div className='sm:px-8 px-4 pt-7'>
                    <div>
                        <h2 className='text-d_color text-[24px] font-medium'>Add Category</h2>
                        <p className='cursor-pointer'><Link to="/Layout/Dashboard" className='text-[#727272]'>Dashboard /</Link> <Link to="/Layout/Category" className='text-[#727272]'>Category /</Link> <span className='text-d_color font-semibold'>Add Category</span></p>
                    </div>
                    <div className='pt-7'>
                        <div className='ds_main_box'>
                            <div className='sm:px-8 px-2 pb-7 pt-8'>


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
                                                navigate('/Layout/Category');
                                            }}
                                        >Cancel</button>
                                        <button
                                            className='ds_add_btn'
                                            onClick={() => navigate("/Layout/Category")}

                                        >Add</button>
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


export default AddCategory

