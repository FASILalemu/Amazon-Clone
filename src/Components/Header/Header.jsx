import React, { useContext, useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader.jsx";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider.jsx";
import { auth } from '../../Utility/firebase.js';

const Header = () => {
  const { state = {}, dispatch } = useContext(DataContext); // Added fallback for state
  const { user, basket = [] } = state; // Fallback for basket
  const navigate = useNavigate(); // For navigation

  const [isUserSignedIn, setIsUserSignedIn] = useState(false); // To track sign-in status

  // Monitor the user authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsUserSignedIn(true);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        setIsUserSignedIn(false);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, [dispatch]);

  // Improved basket item total calculation
  const totalItem = basket?.reduce((amount, item) => amount + (item.amount || 0), 0);

  // Handle Sign Out
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        dispatch({
          type: "SET_USER",  // Ensure to dispatch the action to update the context
          user: null,
        });
        setIsUserSignedIn(false); // Set signed in status to false
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

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
          <BsSearch size={38} />
        </div>

        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img src="USA1.jpg" alt="" />
            <select>
              <option value="">EN</option>
            </select>
          </Link>

          <div>
            {isUserSignedIn ? (
              <>
                <p>Hello, {user?.email.split("@")[0]}</p>
                <button 
                onClick={handleSignOut} 
                style={{ backgroundColor: "#026343", color: "white", border: "none", cursor: "pointer" }}
                >
                Sign Out
                </button>

              </>
            ) : (
              <>
                <p>Hello, Sign In</p>
                <Link to="/auth">
                  <span>Account & Lists</span> {/* Redirect to Auth page */}
                </Link>
              </>
            )}
          </div>

          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
};

export default Header;
