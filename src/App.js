import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login.js'
import Layout from './Components/Layout.jsx';

function App() {
  return (
  <div>
   <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/layout" element={<Layout />}>
           
        </Route>
      </Routes>
    </div>
  );
}

export default App;
