import React, { useState, useEffect } from 'react';
import Layout from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/product/productCard';
import './Results.css';
import Loader from '../../Components/Loader/Loader';

const Results = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, [categoryName]); // Place the categoryName inside the dependency array

  return (
    <Layout>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category / {categoryName}</p>
        <hr />
        {isLoading? (<Loader/>): (<div className="product_container">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>)}
        
      </section>
    </Layout>
  );
}

export default Results;