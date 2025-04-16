import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BigPen from '../Images/Parth/ViewProduct.png'
import barcode from '../Images/Parth/barcode.svg';
import print from '../Images/Parth/print_icon.svg';

const ViewProduct = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const productType = location.state?.productType || 'single'

    return (
        <div>
            <div className='ds_main'>
                <div className='sm:px-8 px-4 pt-7'>
                    <div>
                        <h2 className='text-d_color text-[24px] font-medium'>View Product</h2>
                        <p className='cursor-pointer'><span onClick={() => navigate("/Layout/Dashboard")} className='text-[#727272]'>Dashboard /</span> <span onClick={() => navigate("/Layout/Product")} className='text-[#727272]'>Product /</span> <span className='text-d_color font-semibold'>View Product</span></p>
                    </div>
                    <div className='pt-7'>
                        <div className='ds_main_box'>
                            <div className='sm:px-10 px-5 pb-10 pt-10'>
                                <div className='flex xl:flex-row flex-col '>
                                    <div className='xl:w-1/4 flex flex-col items-center gap-4 mb-5'>
                                        <div className=' self-center px-2 mb-5'>
                                            <img src={BigPen} alt="" className='w-[90%] h-[100%] mx-auto' />
                                        </div>
                                        <div className='flex  items-center gap-5    '>
                                            <img src={barcode} alt="" />
                                            <img src={print} alt="" className='' />
                                        </div>
                                    </div>
                                    <div className='xl:w-3/4 px-2 flex flex-col'>
                                        <div className='overflow-x-auto'>
                                            <table className='ds_viewWare_table w-full'>
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <span className='text-xl text-d_color whitespace-nowrap'>Product Details</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Product Name</td>
                                                        <td>Blue Pen</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Category</td>
                                                        <td>Stationary</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Sub Category</td>
                                                        <td>Pen</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Warehouse</td>
                                                        <td>Warehouse 1</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>SKU</td>
                                                        <td>P1234</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Description</td>
                                                        <td>Lorem ipsum dolor sit amet consectetur. Sagittis eros odio et interdum malesuada purus magnis adipiscing. Nec tincidunt et sed aliquet mauris aliquam. Quam vitae libero est in nec. Enim rutrum ipsum magnis adipiscing. Gravida sed eu sed tempor in.
                                                        </td>
                                                    </tr>
                                                    {productType === 'single' && (
                                                        <tr>
                                                            <td style={{ borderRight: "1px solid #727272" }}>Product Type</td>
                                                            <td>Single</td>
                                                        </tr>
                                                    )}
                                                    {productType === 'variant' && (
                                                        <>
                                                            <tr>
                                                                <td style={{ borderRight: "1px solid #727272" }}>Product Type</td>
                                                                <td>Variant</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ borderRight: "1px solid #727272" }}>Variation</td>
                                                                <td>Color</td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ borderRight: "1px solid #727272" }} className='align-top'>Variation Value</td>
                                                                <td>
                                                                    <table className="w-full border border-d_color p-5 rounded-md">
                                                                        <tr>
                                                                            <th className="border border-d_color text-d_color p-5 w-1/5">Variation</th>
                                                                            <th className="border border-d_color text-d_color p-5 w-1/5">Value</th>
                                                                            <th className="border border-d_color text-d_color p-5 w-1/5">SKU</th>
                                                                            <th className="border border-d_color text-d_color p-5 w-1/5">Price</th>
                                                                            <th className="border border-d_color text-d_color p-5 w-1/5">Qty.</th>
                                                                        </tr>
                                                                        <tr className='text-center'>
                                                                            <td className="border border-d_color p-5 w-1/5">Size</td>
                                                                            <td className="border border-d_color p-5 w-1/5">S</td>
                                                                            <td className="border border-d_color p-5 w-1/5">P1234</td>
                                                                            <td className="border border-d_color p-5 w-1/5">$120</td>
                                                                            <td className="border border-d_color p-5 w-1/5">5</td>
                                                                        </tr>
                                                                        <tr className='text-center'>
                                                                            <td className="border border-d_color p-5 w-1/5">Size</td>
                                                                            <td className="border border-d_color p-5 w-1/5">M</td>
                                                                            <td className="border border-d_color p-5 w-1/5">P1234</td>
                                                                            <td className="border border-d_color p-5 w-1/5">$120</td>
                                                                            <td className="border border-d_color p-5 w-1/5">5</td>
                                                                        </tr>
                                                                        <tr className='text-center'>
                                                                            <td className="border border-d_color p-5 w-1/5">Color</td>
                                                                            <td className="border border-d_color p-5 w-1/5">Red</td>
                                                                            <td className="border border-d_color p-5 w-1/5">P1234</td>
                                                                            <td className="border border-d_color p-5 w-1/5">$120</td>
                                                                            <td className="border border-d_color p-5 w-1/5">5</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )}
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Unit</td>
                                                        <td>Pc.</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Quantity</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Price</td>
                                                        <td>$10</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Tax </td>
                                                        <td>0.1 %</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Discount Type</td>
                                                        <td>Percentage</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Quantity Alert</td>
                                                        <td>10</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Warranty Type</td>
                                                        <td>-------</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Manufacturing Date</td>
                                                        <td>12 Jun 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ borderRight: "1px solid #727272" }}>Expiry Date</td>
                                                        <td>12 Jun 2024</td>
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
            </div>
        </div >
    )
}

export default ViewProduct
