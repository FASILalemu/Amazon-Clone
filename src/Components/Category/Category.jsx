import React from 'react';
import { catagoryInfo } from './catagoryFullInfos';
import CatagoryCard from './catagoryCard'; // Corrected component name
import './catagory.css'
const Category = () => {
  return (
    <section className='catagory_container'>
      {
        catagoryInfo.map((infos) => (
          <CatagoryCard data={infos} key={infos.id} /> // Added key prop for optimization
        ))
      }
    </section>
  );
}

export default Category;