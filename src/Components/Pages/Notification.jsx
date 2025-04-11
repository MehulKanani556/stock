import React from 'react';
import '../CSS/Parth/Notification.css';
import Alert from '../Images/Parth/alert.svg';

const Notification = () => {
    return (
        <div>
            <div className='bg-[#f5f5f5] V_notification_height'>
                <div className='p-4 md:p-7 lg:p-10'>

                    <div>
                        <h2 className='text-d_color text-[24px] font-medium'>Notification</h2>
                    </div>
                    <div className='V_shadow'>
                        <div className=' flex gap-3 V_border_bottom  bg-white p-5 mt-5'>
                            <div className='V_not_1_width flex justify-center items-center'>
                                <img src={Alert} alt="" className='V_not_1_img ' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className="flex  justify-between">
                                    <p className='V_notification_text1'>Stock Alert</p>
                                    <p className='V_timing_text '>5 min ago</p>
                                </div>
                                <div className='V_not_2_width'>
                                    <p className='V_notification_text2'>Lorem ipsum dolor sit amet consectetur. Consequat tortor sit id tincidunt nec euismod lectus in diam. Cras neque faucibus lorem convallis. Turpis ut purus sed ipsum ut risus. Adipiscing convallis egestas sagittis nec viverra diam libero aliquam eu.</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex gap-3 V_border_bottom  bg-white p-5'>
                            <div className='V_not_1_width flex justify-center items-center'>
                                <img src={Alert} alt="" className='V_not_1_img ' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className="flex  justify-between">
                                    <p className='V_notification_text1'>Stock Alert</p>
                                    <p className='V_timing_text'>5 min ago</p>
                                </div>
                                <div className='V_not_2_width'>
                                    <p className='V_notification_text2'>Lorem ipsum dolor sit amet consectetur. Consequat tortor sit id tincidunt nec euismod lectus in diam. Cras neque faucibus lorem convallis. Turpis ut purus sed ipsum ut risus. Adipiscing convallis egestas sagittis nec viverra diam libero aliquam eu.</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex gap-3   bg-white p-5'>
                            <div className='V_not_1_width flex justify-center items-center'>
                                <img src={Alert} alt="" className='V_not_1_img ' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className="flex  justify-between">
                                    <p className='V_notification_text1'>Stock Alert</p>
                                    <p className='V_timing_text'>5 min ago</p>
                                </div>
                                <div className='V_not_2_width'>
                                    <p className='V_notification_text2'>Lorem ipsum dolor sit amet consectetur. Consequat tortor sit id tincidunt nec euismod lectus in diam. Cras neque faucibus lorem convallis. Turpis ut purus sed ipsum ut risus. Adipiscing convallis egestas sagittis nec viverra diam libero aliquam eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
