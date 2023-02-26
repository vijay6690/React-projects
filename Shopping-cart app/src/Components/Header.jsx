import React from 'react'

import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { AiFillDelete } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../Context/Context'

export default function Header() {
    const { state: { cart }, dispatch } = CartState()
    return (
    <Navbar bg="dark" variant='dark' style={{ height: 80 }} className="header" sticky='top'>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl className='m-auto' style={{ width: 500 }} placeholder="Seach a product"></FormControl>
            </Navbar.Text>
            
            <Nav className='drop'>
                <Dropdown >
                    <Dropdown.Toggle variant='success'  id="dropdown-basic-button">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge >{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <DropdownMenu style={{ minWidth: 370 }}>
                        {cart.length > 0 ? (
                            <>
                                {
                                    cart.map((prod) => (
                                        <span className='cartitem' key={prod.id}>
                                            <img src={prod.image} className="cartItemImage" alt={prod.name} />
                                            <div className="cardItemDetail">
                                                <span>{prod.title}</span>
                                                <span>{Math.ceil(prod.price)}</span>
                                            </div>
                                            <AiFillDelete fontSize="20px" style={{ cursor: "pointer" }} onClick={() => dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                            })} />
                                        </span>
                                    ))
                                }
                                <Link to="/cart">
                                    <Button style={{width: "95%",margin:"0 10px"}}>Go To Cart</Button>
                                </Link>
                            </>
                        ) : (
                            <span style={{ padding: 10 }}>Cart is empty</span>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </Nav>
            </Container>

        </Navbar>
    )
}
