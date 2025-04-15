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
import ReportPurchaseReport from './Components/Pages/ReportPurchaseReport.js';
import ReportSalesReport from './Components/Pages/ReportSalesReport.js';
import Warehouse from './Components/Pages/Warehouse.js';
import AddWarehouse from './Components/Pages/AddWarehouse.js';
import EditWarehouse from './Components/Pages/EditWarehouse.js';
import ViewWarehouse from './Components/Pages/ViewWarehouse.js';
import Store from './Components/Pages/Store.js';
import AddStore from './Components/Pages/AddStore.js';
import EditStore from './Components/Pages/EditStore.js';
import AddProduct from './Components/Pages/AddProduct.jsx';
import AddProduct2 from './Components/Pages/AddProduct2.jsx';
import AddProduct3 from './Components/Pages/AddProduct3.jsx';
import ReportSalesTaxReport from './Components/Pages/ReportSalesTaxReport.js';

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
           <Route path="AddProduct" element={<AddProduct />} />
           <Route path="AddProduct2" element={<AddProduct2 />} />
           <Route path="AddProduct3" element={<AddProduct3 />} />
           <Route path="RawMaterial" element={<RawMaterial />} />
           <Route path="TaxRated" element={<FInancial_Setting_TaxRated/>} />
           <Route path="AddTaxRate" element={<AddTaxRates/>} />
           <Route path="EditTaxrate" element={<EditTaxRates/>} />
           <Route path="ReportProfit" element={<ReportProfitLoss/>} />
           <Route path="ReportTaxReport" element={<ReportTaxReport/>} />
           <Route path="ReportSalesTaxReport" element={<ReportSalesTaxReport/>} />
           <Route path="ReportIncomeReport" element={<ReportIncomeReport/>} />
           <Route path="ReportExpenseReport" element={<ReportExpenseReport/>} />
           <Route path="ReportCustomerReport" element={<ReportCustomerReport/>} />
           <Route path="ReportSupplierReturn" element={<ReportSupplierReturn/>} />
           <Route path="ReportSupplierPayment" element={<ReportSupplierPayment/>} />
           <Route path="ReportSupplierPurchase" element={<ReportSupplierPurchase/>} />
           <Route path="ReportInvoiceReport" element={<ReportInvoiceReport/>} />
           <Route path="ReportInventoryReport" element={<ReportsInventoryReport/>} />
           <Route path="ReportPurchaseReport" element={<ReportPurchaseReport/>} />
           <Route path="ReportSalesReport" element={<ReportSalesReport/>} />
           <Route path="Warehouse" element={<Warehouse/>} />
           <Route path="AddWarehouse" element={<AddWarehouse/>} />
           <Route path="EditWarehouse" element={<EditWarehouse/>} />
           <Route path="ViewWarehouse" element={<ViewWarehouse/>} />
           <Route path="Store" element={<Store/>} />
           <Route path="AddStore" element={<AddStore/>} />
           <Route path="EditStore" element={<EditStore/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
