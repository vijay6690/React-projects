import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import { CartState } from '../Context/Context'
import Filters from './Filters';
import Singleproduct from './Singleproduct';
import './style.css'

export default function Home() {

  const [data, setData] = useState([])
  // const { state: { products } } = CartState()
  // console.log(products);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const prodData = await response.json()
    setData(prodData)
    // console.log(prodData);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='home'>
      <Filters />
      <div className="productContainer">
        {
          data.map((prod) => {
            // console.log(prod);
            return <Singleproduct prod={prod} key={prod.id} />
          })
        }


        {/* {
        products.map((prod)=>{
          return <Singleproduct prod={prod} key={prod.id}/>
        })
      } */}
      </div>
    </div>
  )
}
