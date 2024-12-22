import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Catagory from '../../Components/Category/Category'
import Product from '../../Components/product/product'
import LayOut from '../../Components/LayOut/LayOut'

const Landing = () => {
  return (
    <LayOut >
        <Carousel/>
        <Catagory/>
        <Product />
    </LayOut>
  )
}

export default Landing