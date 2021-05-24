import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Forget from './Components/Forget';
import Search from './Components/Search';
// import DashBoard from './Components/DashBoard';
import ProductForm from './Components/ProductForm';
import { ToastContainer, toast } from 'react-toastify';
import CakeDetails from './Components/CakeDetails';
import Details from './Components/Details';
import Cart from "./Components/Cart";
import Buy from './Components/Buy';
import OrderList from './Components/OrderList';
import Addcake from './Components/Addcake';
import Checkout from './Components/Checkout';
import Routes from './Components/Route';
import Address from './Components/Address';
const OtherComponent = React.lazy(() => import('./Components/DashBoard'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />       
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />      
          <Route path='/registration' exact component={Registration} />
          <Route path='/forget' exact component={Forget} />
          <Route path='/search' exact component={Search} />     
          <Route path='/dash' exact><Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense></Route>
          <Route path='/productForm' exact component={ProductForm} />
          <Route exact path="/cakedetails/:id" component={CakeDetails} />
          <Route exact path="/details/:id" component={Details} />
          <Route  path="/cart"exact component={Cart} />          
          <Route path="/address" exact component={Address} />          
          <Route path="/OrderBag" exact component={OrderList} />
          <Route path="/Addcake" exact component={Addcake} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/route" exact component={Routes} />
        </div>
      </BrowserRouter>
      <ToastContainer />
      
      
    </div>
  );
}

export default App;
