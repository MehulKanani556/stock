import React, { useState } from 'react'
import '../CSS/Dhruvin/Login.css'
import laptop from '../Images/Dhruvin/laptop.png'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import lock from '../Images/Dhruvin/lock.svg'

const Login = () => {

const [passToggle, setPassToggle] = useState("password")

  return (
    <div>
       <div className='flex h-screen'>
          <div className='w-1/2'>
             <div className='h-full bg-d_color relative'>
                 <h2 className='text-white text-[28px] p-12 absolute left-11'>LOGO</h2>
                <div className=' h-full flex justify-center items-center p-5'>
                    <div className=''>
                         <img src={laptop} alt="" />
                     </div>
                </div>
                 
             </div>
          </div>
          <div className='w-1/2'>
            <div className='h-full bg-white relative'>
                <div className='flex justify-center items-center h-full'>
                   {/* <div className='xl:w-1/2 lg:w-2/3 md:w-4/5'>
                     <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] p-6'>
                         <h2 className='text-[21px] text-center font-semibold text-d_color'>Login</h2>
                         <form action="" className='mt-4'>
                           <div className='mb-4'>
                              <label className='text-d_color font-medium block mb-1'>Email</label>
                              <input type="text" className='border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter Email'/>
                           </div>
                           <div className='mb-1 relative'>
                              <label className='text-d_color font-medium block mb-1'>Password</label>
                              <input type={passToggle} className='border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter Password'/>
                              {passToggle === "password" ? <FaEyeSlash onClick={()=> setPassToggle("text")} className="absolute top-9 right-3 text-[#999999] text-[20px] cursor-pointer" /> : <FaEye onClick={()=> setPassToggle("password")} className="absolute top-9 right-3 text-[#999999] text-[20px] cursor-pointer" /> }
                           </div>
                           <div className='text-end text-[#FF0000] text-[14px] font-medium'>Forgot Password?</div>
                           <button className='w-full bg-d_color text-white h-[40px] rounded-[5px] mt-10'>Login</button>
                         </form>
                     </div>
                   </div> */}

                   {/* <div className='xl:w-1/2 lg:w-2/3 md:w-4/5'>
                     <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] p-6'>
                         <h2 className='text-[21px] text-center font-semibold text-d_color'>Forgot Password</h2>
                         <p className='text-center text-[#727272] text-[14px]'>Verify your email to reset your password</p>
                         <form action="" className='mt-5'>
                           <div className='mb-4'>
                              <label className='text-d_color font-medium block mb-1'>Email</label>
                              <input type="text" className='border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter Email'/>
                           </div>
                           <button className='w-full bg-d_color text-white h-[40px] rounded-[5px] mt-8'>Send OTP</button>
                         </form>
                     </div>
                   </div> */}

                   {/* <div className='xl:w-1/2 lg:w-2/3 md:w-4/5'>
                     <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] p-6'>
                         <h2 className='text-[21px] text-center font-semibold text-d_color'>Verify</h2>
                         <p className='text-center text-[#727272] text-[14px]'>OTP has been sent to <a href="" className='text-d_color underline '>example@gmail.com</a></p>
                         <form action="" className='mt-5'>
                           <div className='flex justify-center items-center pt-4'>
                              <input type="text" className='lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] text-center text-[20px] border border-d_color rounded-[5px] me-5'/>
                              <input type="text" className='lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] text-center text-[20px] border border-d_color rounded-[5px] me-5'/>
                              <input type="text" className='lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] text-center text-[20px] border border-d_color rounded-[5px] me-5'/>
                              <input type="text" className='lg:h-[50px] lg:w-[50px] md:h-[40px] md:w-[40px] text-center text-[20px] border border-d_color rounded-[5px]'/>
                           </div> 
                           <button className='w-full bg-d_color text-white h-[40px] rounded-[5px] mt-12'>Verify</button>
                           <p className='text-center text-[#727272] mt-3'>Didn’t receive code yet? <span className='text-d_color underline'>Resend</span></p>
                         </form>
                     </div>
                   </div> */}

                   {/* <div className='xl:w-1/2 lg:w-2/3 md:w-4/5'>
                     <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] p-6'>
                         <h2 className='text-[21px] text-center font-semibold text-d_color'>Reset Password</h2>
                         <form action="" className='mt-5'>
                           <div className='mb-4'>
                              <label className='text-d_color font-medium block mb-1'>Create Password</label>
                              <input type="password" className='border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Create new password'/>
                           </div>
                           <div className='mb-1 relative'>
                              <label className='text-d_color font-medium block mb-1'>Confirm Password</label>
                              <input type="password" className='border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter confirm password'/>
                           </div>
                           <button className='w-full bg-d_color text-white h-[40px] rounded-[5px] mt-10'>Reset Password</button>
                         </form>
                     </div>
                   </div> */}


                   <div className='xl:w-1/2 lg:w-2/3 md:w-4/5'>
                     <div className='shadow-[1px_1px_20px_0.5px_rgba(0,0,0,0.06)] p-6'>
                          <div className='flex justify-center'>
                            <img src={lock} alt="" />
                          </div>
                         <h2 className='text-[21px] text-center font-semibold text-d_color mt-3'>Account Locked</h2>
                         <form action="" className='mt-5'>
                           <div className='mb-4'>
                              <label className='text-d_color font-medium block mb-1'>Password</label>
                              <input type="password" className='border border-d_color h-[40px] rounded-[5px] w-full px-3'  placeholder='Enter password'/>
                           </div>
                           <button className='w-full bg-d_color text-white h-[40px] rounded-[5px] mt-7'>Unlock</button>
                         </form>
                     </div>
                   </div>
                </div>
            </div> 
         </div>
       </div>


    </div>
  )
}

export default Login