import React from 'react';
import Total from '../Images/Parth/col_1.png';
import '../CSS/Parth/Dashboard.css';
import up from '../Images/Parth/up.png';
import down from '../Images/Parth/down.png';
import Expense from '../Images/Parth/Totalexpense.png';
import Customer from '../Images/Parth/Totalcustomer.png';
import Supplier from '../Images/Parth/Totalsupplier.png';
import { FaAngleDown } from 'react-icons/fa';
// import  from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Purchase: 40,
    Sales: 70,
    amt: 24,
  },
  {
    name: 'Fab',
    Purchase: 40,
    Sales: 70,
    amt: 22,
  },
  {
    name: 'Mar',
    Purchase: 65,
    Sales: 85,
    amt: 22,
  },
  {
    name: 'Apr',
    Purchase: 40,
    Sales: 70,
    amt: 20,
  },
  {
    name: 'May',
    Purchase: 40,
    Sales: 70,
    amt: 21,
  },
  {
    name: 'Jun',
    Purchase: 40,
    Sales: 70,
    amt: 25,
  },
  {
    name: 'Jul',
    Purchase: 40,
    Sales: 70,
    amt: 21,
  },
  {
    name: 'Aug',
    Purchase: 65,
    Sales: 85,
    amt: 21,
  },
  {
    name: 'Sep',
    Purchase: 40,
    Sales: 70,
    amt: 21,
  },
  // {
  //   name: 'Oct',
  //   Purchase: 34,
  //   Sales: 43,
  //   amt: 21,
  // },
  // {
  //   name: 'Nov',
  //   Purchase: 34,
  //   Sales: 43,
  //   amt: 21,
  // },
  // {
  //   name: 'Dec',
  //   Purchase: 34,
  //   Sales: 43,
  //   amt: 21,
  // },
];


const Dashboard = () => {

  // static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  return (
    <div>
      <div className='bg-[#f5f5f5]'>
        <div className='p-10'>

          <div>
            <h2 className='text-d_color text-[24px] font-medium'>Dashboard</h2>
          </div>

          <div class="V_main_flex gap-5 py-3">
            <div className='V_flex_with_width '>
              <div class="w-full   bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div>
                      <img src={Total} alt="" className='V_col_img_size' />
                    </div>
                    <div className='ms-3'>
                      <p className='text-[#727272]  V_col_text'>Total Income</p>
                      <p className='text-d_color  V_col_number'>$ 1,20,000</p>
                    </div>
                  </div>
                  <div>
                    <div className=' flex justify-center items-center bg-[#DBE5D6] gap-2 V_col_radius'>
                      <img src={up} alt="" className='V_col_img_up_size' />
                      <p className='text-[#3AA409] V_col_persent'>10%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div>
                      <img src={Expense} alt="" className='V_col_img_size' />
                    </div>
                    <div className='ms-3'>
                      <p className='text-[#727272] V_col_text'>Total Expense</p>
                      <p className='text-d_color V_col_number'>$ 1,01,000</p>
                    </div>
                  </div>
                  <div>
                    <div className=' flex justify-center items-center bg-[#FAE1E1] gap-2 V_col_radius'>
                      <img src={down} alt="" className='V_col_img_up_size' />
                      <p className='text-[#FF0000] V_col_persent'>10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='V_flex_with_width'>
              <div class="w-full bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div>
                      <img src={Customer} alt="" className='V_col_img_size' />
                    </div>
                    <div className='ms-3'>
                      <p className='text-[#727272] V_col_text'>Total Customers</p>
                      <p className='text-d_color V_col_number'>150</p>
                    </div>
                  </div>
                  <div>
                    <div className=' flex justify-center items-center bg-[#DBE5D6] gap-2 V_col_radius'>
                      <img src={up} alt="" className='V_col_img_up_size' />
                      <p className='text-[#3AA409] V_col_persent'>20%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div>
                      <img src={Supplier} alt="" className='V_col_img_size' />
                    </div>
                    <div className='ms-3'>
                      <p className='text-[#727272] V_col_text'>Total Suppliers</p>
                      <p className='text-d_color V_col_number'>53</p>
                    </div>
                  </div>
                  <div>
                    <div className=' flex justify-center items-center bg-[#FAE1E1] gap-2 V_col_radius'>
                      <img src={down} alt="" className='V_col_img_up_size' />
                      <p className='text-[#FF0000] V_col_persent'>16%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='V_chart_width'>
            <div className='bg-white p-5 '>
              <div className='V_chart_heading flex justify-between'>
                <p className='text-d_color'>Sales & Purchase</p>
                <div className='flex gap-2 bg-[#DFEBF1] p-2 rounded-lg'>
                  <p className='V_months'>Months</p>
                  <FaAngleDown className='V_months_icon' />
                </div>
              </div>
              {/* <div className='V_chart_container'>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                  </BarChart>
                </ResponsiveContainer>
              </div> */}
              <div className="w-full h-[400px] overflow-x-auto ">
                <ResponsiveContainer className='pt-10 V_chart_container'>
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      bottom: 20, // Increased bottom margin to create space between bars and x-axis
                    }}
                  >
                    <CartesianGrid strokeDasharray="" horizontal={true} vertical={false} />
                      <XAxis dataKey="name" margin={{ top: 20 }} axisLine={{ strokeWidth: 1, y: 5 }} />
                    <YAxis 
                      tickFormatter={(value) => `${value}`}
                      domain={[0, 120]}
                      ticks={[ 30, 60, 90, 120]}
                      axisLine={false}
                    />
                    <Tooltip />
                    <Legend iconType="circle" />
                    <Bar
                      dataKey="Purchase"
                      fill="#1958B4" // Changed to a vibrant blue
                      activeBar={<Rectangle fill="#8884d8" stroke="#4318FF" />}
                      barSize={10}
                    />
                    <Bar
                      dataKey="Sales" 
                      fill="#16325B" // Changed to a lighter blue
                      activeBar={<Rectangle fill="#82ca9d" stroke="#6AD2FF" />}
                      barSize={10}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
