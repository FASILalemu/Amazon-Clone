import React, {useState, useEffect} from 'react'
import Layout from '../../Components/LayOut/LayOut'
import "./Orders.css"
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'

const Orders = () => {
  // const { state, dispatch } = useContext(DataContext);
  // const { user } = state;
  const [orders, setOrders] = useState([])
  // useEffect(() => {
  //   if(user){

  //   }else{

  //   }
  
    
  // }, [])
  
  return (
    <Layout>
      <section className='container'>
        <div className='orders_container'>
          <h2>Yours Orders</h2>
          {/* order items */}
          <div></div>
        </div>
      </section>
    </Layout>
  )
}

export default Orders