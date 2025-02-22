import React, { useContext } from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './productCard.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

const ProductCard = ({ product, flex, renderDesc,renderAdd }) => {
    const { image, title, id, rating, price, description } = product;
    
    const {state, dispatch } = useContext(DataContext);

    const addToCart = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: { image, title, id, rating, price, description }
        });
    };

    return (
        <div className={`card_container ${flex ? 'flexed' : ''}`}>
            <Link to={`/products/${id}`} key={id}>
                <img src={image} alt={title} />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <div style={{ maxWidth: '750px' }}>{description}</div>}
                <div className='rating'>
                    <Rating value={rating?.rate} precision={0.1} />
                    <small>{rating?.count}</small>
                </div>
                <div>
                    <CurrencyFormat amount={price} />
                </div>
                {
                    renderAdd && <button onClick={addToCart} className='button' >
                    Add to Cart
                </button>
                }

                
            </div>
        </div>
    );
};

export default ProductCard;