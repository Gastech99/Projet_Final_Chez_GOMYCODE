import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Home from './pages/Home';
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import ProductsInfos from './pages/ProductsInfos';
import Cart from './pages/Cart';
import './styleSheets/Layout.css'
import './styleSheets/Products.css'
import './styleSheets/Authentification.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
          <Route path='/productsinfos/:productid' exact element={<ProtectedRoutes><ProductsInfos/></ProtectedRoutes>} />
          <Route path='/cart' exact element={<ProtectedRoutes><Cart/></ProtectedRoutes>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/register' exact element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//Creation des routes proteges
export const ProtectedRoutes = ({children}) => {
  if (localStorage.getItem("currentUser")) {
    return children
  } else {
    return <Navigate to='login' />
  }
}
