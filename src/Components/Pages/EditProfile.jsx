import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../Images/Parth/edit_profile_image.png'
import '../CSS/Parth/editprofile.css'

const EditProfile = () => {
    return (
        <div>
            <div className='bg-[#f5f5f5] V_notification_height'>
                <div className='p-4 md:p-7 lg:p-10'>
                    <h2 className='text-d_color text-[24px] font-medium'>Edit Profile</h2>
                    <p className='cursor-pointer'><span className='text-[#727272]'> <Link to="/layout/Dashboard" >Dashboard </Link>/</span> <span className='text-d_color '>Edit Profile</span></p>


                    <div className='bg-white V_all_padding flex '>
                        <div className='V_profile_img_width'>
                            <div className=''>
                                <img src={profile} alt="" className='V_profile_img mx-auto' />
                                <p className='V_profile_img_text  mx-auto'>Upload New Image</p>
                            </div>
                        </div>
                        <div className='V_profile_edit_width '>
                            <div className='w-full'>
                                <div className='V_input_flex gap-5 '>
                                    <div className='V_profile_content_width mx-auto'>
                                        <p className='V_profile_label mb-1'>First Name</p>
                                        <input type="text" placeholder='Enter Name' className='ds_main_input' />
                                    </div>
                                    <div className='V_profile_content_width sm:mt-0 mt-2 mx-auto'>
                                        <p className='V_profile_label mb-1'>Last Name</p>
                                        <input type="text" placeholder='Enter Name' className='ds_main_input' />
                                    </div>
                                </div>
                                <div className='V_input_flex gap-5 mt-5'>
                                    <div className='V_profile_content_width mx-auto mt-2'>
                                        <p className='V_profile_label mb-1'>Email</p>
                                        <input type="email" placeholder='Enter Email' className='ds_main_input' />
                                    </div>
                                    <div className='V_profile_content_width mx-auto mt-2'>
                                        <p className='V_profile_label mb-1'>Contact No.</p>
                                        <input type="text" placeholder='Enter Contact No.' className='ds_main_input' />
                                    </div>
                                </div>
                                <div className='mt-5 flex justify-center'>
                                    <div className='V_input_flex1 gap-5'>
                                        <p className='V_profile_Cancel_button'>Cancel</p>
                                        <p className='V_profile_Update_button'>Update</p>
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

export default EditProfile
