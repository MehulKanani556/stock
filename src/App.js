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
import ReportIncomeReport from './Components/Pages/ReportIncomeReport.js';
import ReportExpenseReport from './Components/Pages/ReportExpenseReport.js';
import ReportCustomerReport from './Components/Pages/ReportCustomerReport.js';
import ReportSupplierPayment from './Components/Pages/ReportSupplierPayment.js';
import ReportSupplierReturn from './Components/Pages/ReportSupplierReturn.js';
import ReportSupplierPurchase from './Components/Pages/ReportSupplierPurchase.js';
import ReportInvoiceReport from './Components/Pages/ReportInvoiceReport.js';
import ReportsInventoryReport from './Components/Pages/ReportsInventoryReport.js';
import Notification from './Components/Pages/Notification.jsx';
import EditProfile from './Components/Pages/EditProfile.jsx';

function App() {
  return (
  <div>
   <Routes>
       <Route path='/' element={<Login />} />
        <Route path="/Layout" element={<Layout />}>
           <Route path="Dashboard" element={<Dashboard />} />
           <Route path="Notification" element={<Notification />} />
           <Route path="EditProfile" element={<EditProfile />} />
           <Route path="Product" element={<Product />} />
           <Route path="RawMaterial" element={<RawMaterial />} />
           <Route path="taxrated" element={<FInancial_Setting_TaxRated/>} />
           <Route path="addtaxrate" element={<AddTaxRates/>} />
           <Route path="edittaxrate" element={<EditTaxRates/>} />
           <Route path="reportprofit" element={<ReportProfitLoss/>} />
           <Route path="expense" element={<Expense />} />
           <Route path="ReportTaxReport" element={<ReportTaxReport/>} />
           <Route path="ReportIncomeReport" element={<ReportIncomeReport/>} />
           <Route path="ReportExpenseReport" element={<ReportExpenseReport/>} />
           <Route path="ReportCustomerReport" element={<ReportCustomerReport/>} />
           <Route path="ReportSupplierReturn" element={<ReportSupplierReturn/>} />
           <Route path="ReportSupplierPayment" element={<ReportSupplierPayment/>} />
           <Route path="ReportSupplierPurchase" element={<ReportSupplierPurchase/>} />
           <Route path="ReportInvoiceReport" element={<ReportInvoiceReport/>} />
           <Route path="ReportInventoryReport" element={<ReportsInventoryReport/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
