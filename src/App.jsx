import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './pages/Landing/Landing';
import Routing from './Router';
// import Carousel from './Components/Carousel/Carousel';
// import Category from './Components/Category/Category';
// import Product from './Components/Product/Product';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header/> */}
      {/* <Landing /> */}
      <Routing />
    </div>
  );
}

export default App;