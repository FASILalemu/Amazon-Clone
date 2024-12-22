import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Catagory from './Components/Category/Category'
import Product from './Components/product/product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Carousel/>
      <Catagory />
      <Product />
    </div>
  )
}

export default App
