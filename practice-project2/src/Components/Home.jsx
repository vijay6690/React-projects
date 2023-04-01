import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../Context'
// import Cart from './Cart'
import SingleProduct from './SingleProduct'

export default function Home() {
    const [product, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        let name = sessionStorage.getItem("name")
        if (name === "" || name === null) {
            navigate("/login")
        }
    },[])

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
        // console.log(data);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='productContainer' >
            {
                product.map((prod, index) => {
                    return <SingleProduct prod={prod} key={index}/>
                })
            }
        </div>
    )
}
