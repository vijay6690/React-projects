import React from 'react'
import { createContext } from 'react'
import { faker } from '@faker-js/faker';
import { useReducer } from 'react';
import { cartReducer, productReducer } from './Reducers';
import { useContext } from 'react';

const Cart = createContext();
export default function Context({ children }) {


  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    avatar: "https://unsplash.com/photos/_ChgPDRBUeY",
    inStock: Math.floor(Math.random() * 5),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.finance.amount([1, 2, 3, 4, 5])
  }));
  // console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  const {productState ,productDispatch}= useReducer(productReducer,{
      byRating:0,
      searchQuery:""
  })
  return (
    <Cart.Provider value={{ state, dispatch ,productState ,productDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
  return useContext(Cart);
}


