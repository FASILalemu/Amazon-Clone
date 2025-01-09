// import React, { useContext } from 'react';
// import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
// import { BiCart } from "react-icons/bi";
// import classes from './Header.module.css';
// import LowerHeader from './LowerHeader.jsx';
// import { Link } from 'react-router-dom';
// import { DataContext } from '../DataProvider/DataProvider.jsx';

// const Header = () => {

//   const { state, dispatch } = useContext(DataContext);
//   const { basket=[] } = state;
//   const basketCount = Array.isArray(basket) ? basket.length : 0;

//   return (
//     <>
//       <div className={classes.header_container}>
//         <div className={classes.logo_container}>
//           {/* logo */}
//           <Link to="/">
//             <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
//           </Link>
//           {/* delivery */}
//           <div className={classes.delivery}>
//             <span>
//               <SlLocationPin />
//             </span>
//             <div>
//               <p>Delivered to</p>
//               <span>Ethiopia</span>
//             </div>
//           </div>
//         </div>
//         <div className={classes.search}>
//           {/* search */}
//           <select name="" id="">
//             <option value="">All</option>
//           </select>
//           <input type="text" placeholder="Search Amazon" />
//           <BsSearch size={25}/>
//         </div>
//         <div className={classes.order_container}>
//           <Link to="" className={classes.language}>
//             <img src="USA1.jpg" alt="" />
//             <select>
//               <option value="">EN</option>
//             </select>
//           </Link>
//           {/* three components */}
//           <Link to="">
//             <div>
//               <p>Hello, Sign In</p>
//               <span>Account & Lists</span>
//             </div>
//           </Link>
//           {/* orders */}
//           <Link to="/orders">
//             <p>Returns</p>
//             <span>& Orders</span>
//           </Link>
//           {/* cart */}
//           <Link to='/cart' className={classes.cart}>
//             <BiCart size={35}/>
//             <span>{basketCount}</span>
//           </Link>
//         </div>
//       </div>
//       <LowerHeader />
//     </>
//   );
// }

// export default Header;


import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader.jsx";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider.jsx";

const Header = () => {
  const { state = {}, dispatch } = useContext(DataContext); // Added fallback for state
  const { basket = [] } = state; // Fallback for basket
  const basketCount = Array.isArray(basket) ? basket.length : 0;

  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
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
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={25} />
        </div>
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img src="USA1.jpg" alt="" />
            <select>
              <option value="">EN</option>
            </select>
          </Link>
          <Link to="">
            <div>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{basketCount}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;






