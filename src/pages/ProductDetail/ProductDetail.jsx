import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/product/ProductCard';
import Loader from '../../Components/Loader/Loader';

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);


  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false)
        
      });
  }, [productId]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <Layout>
      {isLoading? (<Loader/>):(<ProductCard 
      product={product}
      flex={true}
      renderDesc={true}
      
    />)}
      
    </Layout>
  );
}

export default ProductDetail;