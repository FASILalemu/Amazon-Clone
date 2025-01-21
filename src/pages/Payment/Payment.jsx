import React, { useContext, useState } from 'react';
import Layout from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/product/productCard';
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon
import {
  useStripe, 
  useElements,
  CardElement
} from '@stripe/react-stripe-js';

import './Payment.css';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';

const Payment = () => {
  const { state } = useContext(DataContext);

  if (!state) {
    console.error('DataContext is undefined. Ensure DataProvider wraps the component tree.');
    return null;
  }

  const {user, basket } = state;
  const totalItem = basket?.reduce((amount, item) => amount + (item.amount || 0), 0);
  console.log(user)

  const total = basket.reduce((amount, item) => {
    const itemPrice = item.price || 0;
    const itemAmount = item.amount || 0;
    return itemPrice * itemAmount + amount;
}, 0);
  
  const [cardError, setCardError] = useState(null)
  const [loading, setLoading] = useState(false); 
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message? setCardError(e?.error?.message): setCardError("")
  };
  
  
    const handlePayment = async (e) => {
      e.preventDefault();
      setLoading(true); // Start loading
  
      try {
        // Simulate a delay (replace with actual backend request)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Payment successful!');
      } catch (error) {
        console.error('Payment failed:', error);
      } finally {
        setLoading(false); // End loading
      }
    };
    //1.backend || function ----> contact to the client secret
    
  

  return (
    <Layout>
      <div className='payment_header'>Checkout ({totalItem}) items</div>
      <section className='payment'>
        <div className='flex'>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 Amist Kilo</div>
            <div>Addis Ababa</div>
          </div>
          
        </div>
        <hr />
        <div className='flex'>
          <h3>Review items and delivery</h3>
          <div>
            {
              basket?.map((item)=><ProductCard product={item} flex={true}/>)
            }
          </div>
        </div>
        <hr />
        <div className='flex'>
          <h3>
            payment methods
          </h3>
          <div className='payment_card_container'>
            <div className='payment__details'>
              <form onSubmit={handlePayment} action="">
                {cardError && <small style={{color: 'red'}}>{cardError}</small>}
                <CardElement onChange={handleChange}/>

                <div className='payment__price'>
                  <div>
                    <span style={{display: 'flex', gap: '10px'}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>
                  <button type="submit" disabled={loading}>
                    {loading ? (
                      <FaSpinner className="spinner" />
                    ) : (
                      'Pay Now'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;


