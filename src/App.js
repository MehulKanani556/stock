import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Layout from './Components/Layout.jsx';
import Dashboard from './Components/Pages/Dashboard.jsx';
import Product from './Components/Pages/Product.jsx';
import RawMaterial from './Components/Pages/RawMaterial.jsx';
import AddTaxRates from './Components/Pages/AddTaxRates.js';
import FInancial_Setting_TaxRated from './Components/Pages/FInancial_Setting_TaxRated.js';
import EditTaxRates from './Components/Pages/EditTaxRates.js';
import './Components/CSS/Dhruvin/login.css'
import ReportProfitLoss from './Components/Pages/ReportProfitLoss.js';
import Expense from './Components/Pages/Expense.jsx';
import ReportTaxReport from './Components/Pages/ReportTaxReport.js';

function App() {
  return (
  <div>
   <Routes>
       <Route path='/' element={<Login />} />
        <Route path="/Layout" element={<Layout />}>
           <Route path="Dashboard" element={<Dashboard />} />
           <Route path="Product" element={<Product />} />
           <Route path="RawMaterial" element={<RawMaterial />} />
           <Route path="taxrated" element={<FInancial_Setting_TaxRated/>} />
           <Route path="addtaxrate" element={<AddTaxRates/>} />
           <Route path="edittaxrate" element={<EditTaxRates/>} />
           <Route path="reportprofit" element={<ReportProfitLoss/>} />
           <Route path="expense" element={<Expense />} />
           <Route path="ReporTaxReport" element={<ReportTaxReport/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
