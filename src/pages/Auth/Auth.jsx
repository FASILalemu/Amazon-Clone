import React, { useState, useContext } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ClipLoader } from 'react-spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({ signIn: false, signUp: false }); // Correct initialization
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
  const navigate = useNavigate();

  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name === 'signin') {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo,
          });
          setLoading({ ...loading, signIn: false }); // Stop loading on success
          navigate('/')
        })
        .catch((err) => {
          setError(err.message); 
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo,
          });
          setLoading({ ...loading, signUp: false });
          navigate('/')
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className="login">
      <Link to={'/'}>
        <img src="signInLogo.jpg" alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            className="login_signInButton"
            name="signin"
            disabled={loading.signIn} 
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : 'Sign In'}
          </button>
        </form>
        <p>
          By signing in you agree to the Amazon Clone conditions of use & sale. Please see our Privacy Notice, Cookies
          Notice, and Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          className="login_registerButton"
          name="signup"
          disabled={loading.signUp} // Disable button while loading
        >
          {loading.signUp ? <ClipLoader color="#000" size={15} /> : 'Create your Amazon Account'}
        </button>
        {error && <small style={{ paddingTop: '5px', color: 'red' }}>{error}</small>}
      </div>
    </section>
  );
};

export default Auth;
