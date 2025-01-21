// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from "./pages/Auth/Auth";
import Landing from './pages/Landing/Landing';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import Results from './pages/Results/Results';
import ProductDetail from './pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Components/ProductRoute/ProductRoute';

const stripePromise = loadStripe('pk_test_51QiXvIH0nSfH6TgZlVbUYDXUZ5rcsOWQzbzX9oVwjugmX8COcLj8AkXEvwpkT8kbnsmdDV6Phmi8INQPaqQkCgeo003BiMYX1r');
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/payments' element={
          <ProtectedRoute msg={'You must be log in to pay'} redirect={'/payments'}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
          
          
          } />
        <Route path='/orders' element={
          <ProtectedRoute msg={'You must be log in to see your orders'} redirect={'/orders'}>
            <Orders />
        </ProtectedRoute>
          
          } />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/products/:productId' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;