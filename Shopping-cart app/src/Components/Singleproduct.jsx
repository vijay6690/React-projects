import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Context'
import Rating from './Rating'

export default function Singleproduct({ prod }) {
  // console.log(products);
  const { state: { cart }, dispatch } = CartState()
  // console.log(cart);
  return (
    <div className='products'>
      <Card className='cart-image'>
        <Card.Img variant="" src={prod.image ? prod.image : "no image"} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>RS {Math.ceil(prod.price)}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>3 days delivery</div>
            )}
            <Rating rating={prod.rating.rate} />
          </Card.Subtitle>
          {
            cart.some(p => p.id === prod.id) ? (
              <Button onClick={() => { dispatch({ type: "REMOVE_FROM_CART", payload: prod }) }} variant='danger'>Remove From Cart</Button>
            ) : (
              <Button onClick={() => { dispatch({ type: "ADD_TO_CART", payload: prod }) }} >Add To Cart</Button>
            )
          }

        </Card.Body>
      </Card>
    </div>
  )
}
