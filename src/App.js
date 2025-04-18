
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Layout from "./Components/Layout.jsx";
import Dashboard from "./Components/Pages/Dashboard.jsx";
import Product from "./Components/Pages/Product.jsx";
import RawMaterial from "./Components/Pages/RawMaterial.jsx";
import AddTaxRates from "./Components/Pages/AddTaxRates.js";
import FInancial_Setting_TaxRated from "./Components/Pages/FInancial_Setting_TaxRated.js";
import EditTaxRates from "./Components/Pages/EditTaxRates.js";
import "./Components/CSS/Dhruvin/login.css";
import ReportProfitLoss from "./Components/Pages/ReportProfitLoss.js";
import ReportTaxReport from "./Components/Pages/ReportTaxReport.js";
import ReportIncomeReport from "./Components/Pages/ReportIncomeReport.js";
import ReportExpenseReport from "./Components/Pages/ReportExpenseReport.js";
import ReportCustomerReport from "./Components/Pages/ReportCustomerReport.js";
import ReportSupplierPayment from "./Components/Pages/ReportSupplierPayment.js";
import ReportSupplierReturn from "./Components/Pages/ReportSupplierReturn.js";
import ReportSupplierPurchase from "./Components/Pages/ReportSupplierPurchase.js";
import ReportInvoiceReport from "./Components/Pages/ReportInvoiceReport.js";
import ReportsInventoryReport from "./Components/Pages/ReportsInventoryReport.js";
import Notification from "./Components/Pages/Notification.jsx";
import EditProfile from "./Components/Pages/EditProfile.jsx";
import ReportPurchaseReport from "./Components/Pages/ReportPurchaseReport.js";
import ReportSalesReport from "./Components/Pages/ReportSalesReport.js";
import Warehouse from "./Components/Pages/Warehouse.js";
import AddWarehouse from "./Components/Pages/AddWarehouse.js";
import EditWarehouse from "./Components/Pages/EditWarehouse.js";
import ViewWarehouse from "./Components/Pages/ViewWarehouse.js";
import Store from "./Components/Pages/Store.js";
import AddStore from "./Components/Pages/AddStore.js";
import EditStore from "./Components/Pages/EditStore.js";
import AddProduct from "./Components/Pages/AddProduct.jsx";
import EditProduct from "./Components/Pages/EditProduct.jsx";
import ReportSalesTaxReport from "./Components/Pages/ReportSalesTaxReport.js";
import Supplier from "./Components/Pages/Supplier.js";
import AddSuppliers from "./Components/Pages/AddSuppliers.js";
import EditSuppliers from "./Components/Pages/EditSuppliers.js";
import ViewSuppliers from "./Components/Pages/ViewSuppliers.js";
import ExpensesCategory from "./Components/Pages/ExpensesCategory.js";
import AddExpensesCategory from "./Components/Pages/AddExpensesCategory.js";
import ViewProduct from "./Components/Pages/ViewProduct.jsx";
import AddRawMaterial from "./Components/Pages/AddRawMaterial.jsx";
import EditRawMaterial from "./Components/Pages/EditRawMaterial.jsx";
import ViewRawMaterial from "./Components/Pages/ViewRawMaterial.jsx";
import ExpiredProduct from "./Components/Pages/ExpiredProduct.jsx";
import EditExpiredProduct from "./Components/Pages/EditExpiredProduct.jsx";
import EditExpensesCategory from "./Components/Pages/EditExpensesCategory.js";
import Expenses from "./Components/Pages/Expenses.js";
import AddExpense from "./Components/Pages/AddExpense.js";
import EditExpense from "./Components/Pages/EditExpense.js";
import Quotation from "./Components/Pages/Quotation.js";
import AddQuotation from "./Components/Pages/AddQuotation.js";
import EditQuotation from "./Components/Pages/EditQuotation.js";
import SalesReturn from "./Components/Pages/SalesReturn.js";
import AddSalesReturn from "./Components/Pages/AddSalesReturn.js";
import Category from "./Components/Pages/Category.jsx";
import AddCategory from "./Components/Pages/AddCategory.jsx";
import EditCategory from "./Components/Pages/EditCategory.jsx";
import LowStocks from "./Components/Pages/LowStocks.jsx";
import EditLowStocks from "./Components/Pages/EditLowStocks.jsx";
import SubCategory from "./Components/Pages/SubCategory.jsx";
import AddSubCategory from "./Components/Pages/AddSubCategory.jsx";
import EditSubCategory from "./Components/Pages/EditSubCategory.jsx";
import Unit from "./Components/Pages/Unit.jsx";
import AddUnit from "./Components/Pages/AddUnit.jsx";
import EditUnit from "./Components/Pages/EditUnit.jsx";
import EditSalesReturn from "./Components/Pages/EditSalesReturn.js";
import Invoice from "./Components/Pages/Invoice.js";
import Sales from "./Components/Pages/Sales.js";
import AddSales from "./Components/Pages/AddSales.js";
import EditSales from "./Components/Pages/EditSales.js";
import ViewSales from "./Components/Pages/ViewSales.js";
import Variant from "./Components/Pages/Variant.jsx";
import AddVariant from "./Components/Pages/AddVariant.jsx";
import EditVariant from "./Components/Pages/EditVariant.jsx";
import Warranty from "./Components/Pages/Warranty.jsx";
import AddWarranty from "./Components/Pages/AddWarranty.jsx";
import EditWarranty from "./Components/Pages/EditWarranty.jsx";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Layout" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Notification" element={<Notification />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="Product" element={<Product />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="EditProduct" element={<EditProduct />} />
          <Route path="ViewProduct" element={<ViewProduct />} />
          <Route path="RawMaterial" element={<RawMaterial />} />
          <Route path="AddRawMaterial" element={<AddRawMaterial />} />
          <Route path="EditRawMaterial" element={<EditRawMaterial />} />
          <Route path="ViewRawMaterial" element={<ViewRawMaterial />} />
          <Route path="ExpiredProduct" element={<ExpiredProduct />} />
          <Route path="EditExpiredProduct" element={<EditExpiredProduct />} />
          <Route path="LowStocks" element={<LowStocks />} />
          <Route path="EditLowStocks" element={<EditLowStocks />} />
          <Route path="Category" element={<Category />} />
          <Route path="AddCategory" element={<AddCategory />} />
          <Route path="EditCategory" element={<EditCategory />} />
          <Route path="SubCategory" element={<SubCategory />} />
          <Route path="AddSubCategory" element={<AddSubCategory />} />
          <Route path="EditSubCategory" element={<EditSubCategory />} />
          <Route path="Unit" element={<Unit />} />
          <Route path="AddUnit" element={<AddUnit />} />
          <Route path="EditUnit" element={<EditUnit />} />
          <Route path="Variant" element={<Variant />} />
          <Route path="AddVariant" element={<AddVariant />} />
          <Route path="EditVariant" element={<EditVariant />} />
          <Route path="Warranty" element={<Warranty />} />
          <Route path="AddWarranty" element={<AddWarranty />} />
          <Route path="EditWarranty" element={<EditWarranty />} />
          <Route path="TaxRated" element={<FInancial_Setting_TaxRated />} />
          <Route path="AddTaxRate" element={<AddTaxRates />} />
          <Route path="EditTaxrate" element={<EditTaxRates />} />
          <Route path="ReportProfit" element={<ReportProfitLoss />} />
          <Route path="ReportTaxReport" element={<ReportTaxReport />} />
          <Route path="ReportSalesTaxReport" element={<ReportSalesTaxReport />} />
          <Route path="ReportIncomeReport" element={<ReportIncomeReport />} />
          <Route path="ReportExpenseReport" element={<ReportExpenseReport />} />
          <Route path="ReportCustomerReport" element={<ReportCustomerReport />} />
          <Route path="ReportSupplierReturn" element={<ReportSupplierReturn />} />
          <Route path="ReportSupplierPayment" element={<ReportSupplierPayment />} />
          <Route path="ReportSupplierPurchase" element={<ReportSupplierPurchase />} />
          <Route path="ReportInvoiceReport" element={<ReportInvoiceReport />} />
          <Route path="ReportInventoryReport" element={<ReportsInventoryReport />} />
          <Route path="ReportPurchaseReport" element={<ReportPurchaseReport />} />
          <Route path="ReportSalesReport" element={<ReportSalesReport />} />
          <Route path="Warehouse" element={<Warehouse />} />
          <Route path="AddWarehouse" element={<AddWarehouse />} />
          <Route path="EditWarehouse" element={<EditWarehouse />} />
          <Route path="ViewWarehouse" element={<ViewWarehouse />} />
          <Route path="Store" element={<Store />} />
          <Route path="AddStore" element={<AddStore />} />
          <Route path="EditStore" element={<EditStore />} />
          <Route path="Supplier" element={<Supplier />} />
          <Route path="AddSupplier" element={<AddSuppliers />} />
          <Route path="EditSupplier" element={<EditSuppliers />} />
          <Route path="ViewSupplier" element={<ViewSuppliers />} />
          <Route path="ExpenseCategory" element={<ExpensesCategory />} />
          <Route path="AddExpenseCategory" element={<AddExpensesCategory />} />
          <Route path="EditExpenseCategory" element={<EditExpensesCategory/>} />
          <Route path="Expense" element={<Expenses/>} />
          <Route path="AddExpense" element={<AddExpense/>} />
          <Route path="EditExpense" element={<EditExpense/>} />
          <Route path="Quotation" element={<Quotation/>} />
          <Route path="AddQuotation" element={<AddQuotation/>} />
          <Route path="EditQuotation" element={<EditQuotation/>} />
          <Route path="SalesReturn" element={<SalesReturn/>} />
          <Route path="AddSalesReturn" element={<AddSalesReturn/>} />
          <Route path="EditSalesReturn" element={<EditSalesReturn/>} />
          <Route path="Invoice" element={<Invoice/>} />
          <Route path="Sales" element={<Sales/>} />
          <Route path="AddSales" element={<AddSales/>} />
          <Route path="EditSales" element={<EditSales/>} />
          <Route path="ViewSales" element={<ViewSales/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
