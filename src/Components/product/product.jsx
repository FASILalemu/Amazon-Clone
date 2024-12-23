import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './productCard'; // Corrected component name
import "./product.css"
import Loader from '../Loader/Loader';


const Product = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false)
            });
    }, []);

    return (
        <>

            {isLoading?(<Loader/>): (<section className='product_container'>
            {products && products.map((singleProduct) => (
                <ProductCard product={singleProduct} key={singleProduct.id} />
            ))}
        </section>)}
            
        </>
        
    );
}

export default Product;