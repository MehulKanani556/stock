import React from 'react';
// import Total from '../Images/Parth/col_1.png';
import '../CSS/Parth/Dashboard.css';
import up from '../Images/Parth/up.png';
import down from '../Images/Parth/down.png';
import Expense from '../Images/Parth/Expense1.png';
import Customer from '../Images/Parth/totalCustomer.svg';
import Law from '../Images/Parth/Lawstocks1.png'
import Supplier from '../Images/Parth/totalSupplier.svg';
// import  from 'react';
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Alert from '../Images/Parth/alert.svg';

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

const pieData = [
  { name: "Product 1", color: "#517889", value: 45 },
  { name: "Product 2", color: "#6C93A4", value: 25 },
  { name: "Product 3", color: "#36454F", value: 30 },
];

const COLORS = ["#1E2A5E", "#55679C", "#7C93C3", "#CCD6EB"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className='m-auto'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboard = () => {

  // static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  return (
    <div>
      <div className='bg-[#f5f5f5]'>
        <div className='p-4 md:p-7 lg:p-10'>

          <div>
            <h2 className='text-d_color text-[24px] font-medium'>Dashboard</h2>
          </div>

          <div className="V_main_flex gap-5 py-4">
            <div className='V_flex_with_width '>
              <div className="w-full   bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div className='V_col_img_back bg-[#DFEBF1]'>
                      <img src={Law} alt="" className='V_col_img_size V_filter p-2 md:p-2 2xl:p-2' />
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
              <div className="w-full bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div className='V_col_img_back bg-[#DFEBF1]'>
                      <img src={Expense} alt="" className='V_col_img_size V_filter p-2 md:p-2 2xl:p-2' />
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
              <div className="w-full bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div className='V_col_img_back bg-[#DFEBF1]'>
                      <img src={Customer} alt="" className='V_col_img_size  p-2 md:p-2 2xl:p-2' />
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
              <div className="w-full bg-white  V_col_box_shadow">
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div className='V_col_img_back bg-[#DFEBF1]'>
                      <img src={Supplier} alt="" className='V_col_img_size p-2 md:p-2 2xl:p-2' />
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
          <div className="V_main_main_flex gap-6">


            <div className='V_chart_width'>

              {/* ========== chart 1 ========== */}
              <div className=' py-3'>
                <div className='bg-white p-5 '>
                  <div className='V_chart_heading flex justify-between'>
                    <p className='text-d_color'>Sales & Purchase</p>
                    <div className='bg-[#DFEBF1]  V_month_div'>
                      <select id="calander" className="V_select">
                        <option selected value="month"><p>Months</p></option>
                        <option value="day"><p>Day</p></option>
                      </select>
                    </div>
                  </div>
                  <div className=" h-[400px] overflow-x-auto ">
                    <ResponsiveContainer className='pt-10 w-full V_chart_container'>
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
                          ticks={[30, 60, 90, 120]}
                          axisLine={false}
                        />
                        <Legend iconType="circle" />
                        <Bar
                          dataKey="Purchase"
                          fill="#6C93A4"
                          barSize={10}
                        />
                        <Bar
                          dataKey="Sales"
                          fill="#36454F"
                          barSize={10}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* ========== stock alert ========== */}
              <div className=' text-[24px] py-3'>
                <div className='overflow-x-auto'>
                  <div className='bg-white p-5'>
                    <p className='text-d_color'>Stock Alert</p>

                    <div className='overflow-x-auto'>
                      <table className='w-full V_stock_alert_table'>
                        <thead>
                          <tr>
                            <th>SKU</th>
                            <th>Item Name</th>
                            <th>Wearhouse</th>
                            <th>Qty.</th>
                            <th>Alert Qty.</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>P1234</td>
                            <td>Pen</td>
                            <td>Wearhouse 1</td>
                            <td>05</td>
                            <td className='V_denger'>10</td>
                          </tr>
                          <tr>
                            <td>P1234</td>
                            <td>Pen</td>
                            <td>Wearhouse 1</td>
                            <td>05</td>
                            <td className='V_denger'>10</td>
                          </tr>
                          <tr>
                            <td>P1234</td>
                            <td>Pen</td>
                            <td>Wearhouse 1</td>
                            <td>05</td>
                            <td className='V_denger'>10</td>
                          </tr>
                          <tr>
                            <td>P1234</td>
                            <td>Pen</td>
                            <td>Wearhouse 1</td>
                            <td>05</td>
                            <td className='V_denger'>10</td>
                          </tr>
                          <tr style={{ border: 'none' }}>
                            <td>P1234</td>
                            <td>Pen</td>
                            <td>Wearhouse 1</td>
                            <td>05</td>
                            <td className='V_denger'>10</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            <div className='V_width_30 '>

              {/* ========== recent notification ========== */}
              <div className='V_recent bg-white w-full'>
                <div className='p-5'>
                  <div className="flex justify-between pb-3">
                    <p className='V_notification_text'>Recent Notification</p>
                    <p className='V_view_all text-nowrap'>View All</p>
                  </div>
                  <div>
                    <div className='flex py-3 border-b border-[#E0E0E0]'>
                      <div className='V_recent_img_back flex justify-center items-center'>
                        <img src={Alert} alt="" className='V_recent_img_size' />
                      </div>
                      <div className='ms-3'>
                        <p className='V_recent_text'>Stock Alert</p>
                        <p className='V_recent_text_2 '>Lorem ipsum dolor sit amet consectetur. Tellus vo....</p>
                      </div>
                    </div>
                    <div className='flex py-3'>
                      <div className='V_recent_img_back flex justify-center items-center'>
                        <img src={Alert} alt="" className='V_recent_img_size' />
                      </div>
                      <div className='ms-3'>
                        <p className='V_recent_text'>Stock Alert</p>
                        <p className='V_recent_text_2'>Lorem ipsum dolor sit amet consectetur. Tellus vo....</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='V_flex_2_chart'>
                {/* ========== top selling pie chart ========== */}
                <div className='V_recent bg-white w-full V_recent_pie_chart_margin'>
                  <div className='p-5 lg:p-3'>
                    <div>
                      <p className='V_notification_text'>Top Selling Products</p>
                    </div>

                    <div className="V_pie_flex items-center">
                      <div className="V_pie_chart_div">
                        <ResponsiveContainer width="100%" >
                          <PieChart>
                            <Pie
                              data={pieData.map(item => ({
                                ...item,
                                value: 1 // Add equal value for each segment
                              }))}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={70}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {pieData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={entry.color} // Use color from pieData
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="V_legent_div pl-1">
                        {pieData.map((category, index) => (
                          <div
                            key={index}
                            className="flex  items-center mb-3"
                          >
                            <div
                              style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: category.color, // Use color from pieData
                                marginRight: "10px",
                              }}
                            ></div>
                            <div className="flex items-center">
                              <span className="text-gray-600 V_legent_text">
                                {category.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>



                {/* ========== top Payment chart 2 ========== */}
                <div className='V_recent bg-white w-full V_recent_pie_chart_margin2'>
                  <div className='p-5 lg:p-3'>
                    <div>
                      <p className='V_notification_text'>Payments</p>
                    </div>

                    <div className="V_pie_flex2 items-center">
                      <div className="V_pie_chart_div2">
                        <ResponsiveContainer width="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              // innerRadius={40}
                              // outerRadius={70}
                              labelLine={false}
                              label={renderCustomizedLabel}
                              className='V_pie_radius'
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {pieData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={entry.color} // Use color from pieData
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="V_legent_div2 pl-1">
                        {pieData.map((category, index) => (
                          <div
                            key={index}
                            className="flex  items-center mb-3"
                          >
                            <div
                              style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: category.color, // Use color from pieData
                                marginRight: "10px",
                              }}
                            ></div>
                            <div className="flex items-center">
                              <span className="text-gray-600 V_legent_text">
                                {category.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>


              </div>

            </div>


          </div>


          <div className=' text-[24px] py-3'>
            <div className='overflow-x-auto'>
              <div className='bg-white p-5'>
                <p className='text-d_color'>Recent Sales</p>

                <div className='overflow-x-auto'>
                  <table className='w-full V_stock_alert_table p-3 md:p-5'>
                    <thead>
                      <tr>
                        <th>Invoice No.</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Due</th>
                        <th>Payment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#12345</td>
                        <td>John Dave</td>
                        <td><p className='text-[#3AA409]'>Completed</p></td>
                        <td>$1205</td>
                        <td>$1205</td>
                        <td>$0</td>
                        <td><p className='text-[#3AA409] bg-[#DBE5D6] py-1 px-5 rounded-sm w-fit'>Paid</p></td>
                      </tr>
                      <tr>
                        <td>#12345</td>
                        <td>John Dave</td>
                        <td><p className='text-[#FF0000]'>Incomplete</p></td>
                        <td>$1205</td>
                        <td>$0</td>
                        <td>$1205</td>
                        <td><p className='text-[#FF0000] bg-[#FAE1E1] py-1 px-5 rounded-sm w-fit'>Due</p></td>
                      </tr>
                      <tr>
                        <td>#12345</td>
                        <td>John Dave</td>
                        <td><p className='text-[#FF0000]'>Incomplete</p></td>
                        <td>$1205</td>
                        <td>$1150</td>
                        <td>$55</td>
                        <td><p className='text-[#FF0000] bg-[#FAE1E1] py-1 px-5 rounded-sm w-fit'>Due</p></td>
                      </tr>
                      <tr>
                        <td>#12345</td>
                        <td>John Dave</td>
                        <td><p className='text-[#FF0000]'>Incomplete</p></td>
                        <td>$1205</td>
                        <td>$995</td>
                        <td>$210</td>
                        <td><p className='text-[#FF0000] bg-[#FAE1E1] py-1 px-5 rounded-sm w-fit'>Due</p></td>
                      </tr>
                      <tr>
                        <td>#12345</td>
                        <td>John Dave</td>
                        <td><p className='text-[#3AA409]'>Completed</p></td>
                        <td>$1205</td>
                        <td>$1205</td>
                        <td>$0</td>
                        <td><p className='text-[#3AA409] bg-[#DBE5D6] py-1 px-5 rounded-sm w-fit'>Paid</p></td>
                      </tr>
                      <tr>
                        <td>#12345</td>
                        <td>John Dave</td>
                        <td><p className='text-[#FF0000]'>Incomplete</p></td>
                        <td>$1205</td>
                        <td>$0</td>
                        <td>$1205</td>
                        <td><p className='text-[#FF0000] bg-[#FAE1E1] py-1 px-5 rounded-sm w-fit'>Due</p></td>
                      </tr>
                      <tr style={{ border: 'none' }}>
                        <td>#12345</td>
                        <td>John Dave</td>
                        <td><p className='text-[#FF0000]'>Incomplete</p></td>
                        <td>$1205</td>
                        <td>$1150</td>
                        <td>$55</td>
                        <td><p className='text-[#FF0000] bg-[#FAE1E1] py-1 px-5 rounded-sm w-fit'>Due</p></td>
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
  )
}

export default Dashboard
