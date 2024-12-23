import React from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './productCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;

  return (
    <div className='card_container'>
      <Link to={`/products/${id}`}> {/* Corrected path to include a leading slash */}
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className='rating'>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className='button'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;