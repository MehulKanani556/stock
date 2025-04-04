import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Layout from './Components/Layout.jsx';
import Dashboard from './Components/Pages/Dashboard.jsx';
import Product from './Components/Pages/Product.jsx';
import RawMaterial from './Components/Pages/RawMaterial.jsx';
function App() {
  return (
  <div>
   <Routes>
       <Route path='/' element={<Login />} />
        <Route path="/layout" element={<Layout />}>
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="Product" element={<Product />} />
           <Route path="RawMaterial" element={<RawMaterial />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
