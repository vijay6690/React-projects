import React from 'react'
import { CartState } from '../Context/Context'
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Col, Row,Image, Form } from 'react-bootstrap'
import { useState } from 'react';
import { useEffect } from 'react';
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai';


export default function Cart() {
  const {state : {cart} , dispatch} =CartState()
  const [total,setTotal] = useState()

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price)*curr.qty , 0))
  },[cart])

  return (
    <div className='home'>
      <div className="productContainer ">
        <ListGroup>
          {cart.map((prod)=>(
            <ListGroup.Item key={prod.id}>
              <Row className='prodextra'>
                <Col>
                  <Image src={prod.image} style={{height:180,width:150}} alt={prod.title} fluid rounded/>
                </Col>
                <Col md={2}>
                  <span>{prod.title}</span>
                </Col>
                <Col>rs {Math.ceil(prod.price)}</Col>
                <Col md={2}>
                  <Rating rating={prod.rating.rate}/>
                </Col>
                <Col>
                  <Form.Control as="select" value={prod.qty}
                  onChange={(e)=> dispatch({type:"CHANGE_CART_QTY",payload:{id:prod.id,qty:e.target.value}})}
                  >
                     {[...Array(5).keys()].map((x)=>(
                      <option key={x + 1}>{x + 1}</option>
                     ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button type='button' variant='light' onClick={()=> dispatch({type:"REMOVE_FROM_CART",payload:prod})}>
                    <AiFillDelete fontSize="20px"/>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className='title'> Subtotal ({cart.length}) items</span>
        <span style={{fontWeight: 700,fontSize:20}}>Total: rs {Math.ceil(total)}</span>
        <Button type="button" disabled={cart.length === 0}>
          proceed to checkout
        </Button>
      </div>
      
    </div>
  )
}
