import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './productCard'; // Corrected component name
import "./product.css"


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section className='product_container'>
            {products && products.map((singleProduct) => (
                <ProductCard product={singleProduct} key={singleProduct.id} />
            ))}
        </section>
    );
}

export default Product;