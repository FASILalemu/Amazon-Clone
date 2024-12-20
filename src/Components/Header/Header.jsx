import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader.jsx'

const Header = () => {
  return (
    <>
    
        <div className={classes.header_container}>
        <div className={classes.logo_container}>
            {/* logo */}
            <a href="">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </a>
            {/* delevery */}
            <div className={classes.delivery}>
            <span>
                <SlLocationPin />
            </span>
            <div> 
                <p>Delivered to</p>
                <span>Ethiopia</span>
            </div>
            </div>
        </div>
        <div className={classes.search}>
            {/* search */}
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={25}/>
            
        </div>
        <div className={classes.order_container}>
            <a href="" className={classes.language}>
                <img src="USA1.jpg" alt="" />
                <select>
                    <option value="">EN</option>
                </select>
            </a>
            {/* three components */}
            <a href="">
                <div>
                    <p>Hello,Sign In</p>
                    <span>Account & Lists</span>
                </div>
            </a>
            {/* orders */}
            <a href="">
                <p>Returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a href='' className={classes.cart}>
                <BiCart size={35}/>
                <span>0</span>
            </a>
        </div>
    </div>
    <LowerHeader/>

    </>
  )
}

export default Header