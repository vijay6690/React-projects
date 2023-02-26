import React from 'react'
import { useContext } from 'react'
import { Cart } from '../Context'
import SingleProduct from './SingleProduct'

export default function CartPage() {
    const {cart,setCart} = useContext(Cart)
    console.log(useContext(Cart));
  return (
    <div className='productContainer'>
        prod
        {
            cart.map((prod)=>{
                return <SingleProduct prod={prod}/>
            })
        }
    </div>
  )
}




