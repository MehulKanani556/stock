import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BigPen from '../Images/Parth/ViewProduct.png'
import barcode from '../Images/Parth/barcode.svg';
import print from '../Images/Parth/print_icon.svg';

const ViewRawMaterial = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='ds_main'>
                <div className='sm:px-8 px-4 pt-7'>
                    <div>
                        <h2 className='text-d_color text-[24px] font-medium'>View Raw Material</h2>
                        <p className='cursor-pointer'><span onClick={() => navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={() => navigate("/Layout/Raw Material")} className='text-[#727272]'>Raw Material /</span> <span className='text-d_color font-semibold'>View Raw Material</span></p>
                    </div>
                    <div className='pt-7'>
                        <div className='ds_main_box'>
                            <div className='sm:px-10 px-5 pb-10 pt-10'>


                                <div className='w-[100%] lg:w-[70%] px-2 flex flex-col mx-auto'>
                                    <div className='overflow-x-auto'>
                                        <table className='ds_viewWare_table w-full'>
                                            <thead>
                                                <tr>
                                                    <th className='w-[30%]'>
                                                        <span className='text-xl text-d_color whitespace-nowrap'>Raw Material Details</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Supplier</td>
                                                    <td>Milan Enterprise</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Contact Persony</td>
                                                    <td>John Dave</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Contact No.</td>
                                                    <td>+1 23232 32323</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Product Type</td>
                                                    <td>Pen</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Product Name</td>
                                                    <td>Refill</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Unit</td>
                                                    <td>Piece</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Barcode</td>
                                                    <td>123456789012</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Quantity</td>
                                                    <td>100</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Price </td>
                                                    <td>$5</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Tax Type</td>
                                                    <td>Direct</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Discount Type</td>
                                                    <td>Percentage</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ borderRight: "1px solid #727272" }}>Quantity Alert</td>
                                                    <td>10</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewRawMaterial
