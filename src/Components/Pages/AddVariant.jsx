import React from 'react'
import { Link, useNavigate, } from 'react-router-dom';

const AddVariant = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='ds_main'>
                <div className='sm:px-8 px-4 pt-7'>
                    <div>
                        <h2 className='text-d_color text-[24px] font-medium'>Add Variant Attributes</h2>
                        <p className='cursor-pointer'><Link to="/Layout/Dashboard" className='text-[#727272]'>Dashboard /</Link> <Link to="/Layout/Variant" className='text-[#727272]'> Variant Attributes /</Link> <span className='text-d_color font-semibold'>Add Variant Attributes</span></p>
                    </div>
                    <div className='pt-7'>
                        <div className='ds_main_box'>
                            <div className='sm:px-8 px-2 pb-7 pt-8'>


                                <div>



                                    <div className="flex flex-wrap">
                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <div>
                                                <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">SKU</label>
                                                <input type="text" id="text" className="ds_main_input" placeholder="S0001" required />
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <div>
                                                <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Variant Name</label>
                                                <input type="text" id="text" className="ds_main_input" placeholder="Enter Variant name" required />
                                            </div>
                                        </div>
                                        <div className="lg:w-1/3 md:1/3 sm:w-full w-full mb-5 px-4 pt-1">
                                            <div>
                                                <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Status</label>
                                                <select className='ds_Select'>
                                                    <option value="">Select Status</option>
                                                    <option value="">supply 1</option>
                                                    <option value="">supply 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="w-full mb-5 px-4 pt-1">
                                            <div>
                                                <label htmlFor="email" className="block mb-1 text-md font-medium text-d_color dark:text-white">Value</label>
                                                <input type="text" id="text" className="ds_main_input" placeholder="Enter Value" required />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='flex justify-center mt-8 mb-3'>
                                        <button className='ds_cancel_btn me-5'
                                            onClick={() => {
                                                navigate('/Layout/Variant');
                                            }}
                                        >Cancel</button>
                                        <button
                                            className='ds_add_btn'
                                            onClick={() => navigate("/Layout/Variant")}

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



export default AddVariant

