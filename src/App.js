import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login.js'

function App() {
  return (
  <div>
   <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/layout">
           
        </Route>
      </Routes>
    </div>
  );
}

export default App;
