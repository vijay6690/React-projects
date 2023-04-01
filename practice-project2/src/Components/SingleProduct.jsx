import React from 'react'
import { useContext } from 'react'
import { Cart } from '../Context'
// import Cart from './Cart'

export default function ({ prod }) {
    
    const { cart, setCart } = useContext(Cart)
    // console.log(useContext(Cart));
    return (
        <div className='product' id={prod.id}>
            <img src={prod.image} alt="" />
            <div className="productDisc">
                <span>{prod.description}</span>
                <span>RS: {prod.price}</span>
            </div>
            {cart.includes(prod) ? (
                <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))} className='add'>Remove From cart</button>

            ) : (
                <button onClick={() => setCart([...cart, prod])} className='add'>Add to cart</button>
            )}
        </div>
    )
}
