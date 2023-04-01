import React from 'react'
import { useState } from 'react';
import "../Components/style.css"
import Modal from './Modal';

export default function Card({ book }) {
  const [show, setShow] = useState(false)
  const [bookItem ,setBookItem] =useState()

  console.log(book);
  return (
    <>
      {
        book.map((element,index) => {
          let image = element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.smallThumbnail ;
          let amount = element.saleInfo.listPrice && element.saleInfo.listPrice.amount
          if (image!= undefined) {
          return (<>
            <div className="card" key={index} onClick={()=> {setShow(true);setBookItem(element) }}>
              <img src={image} alt="" />
              <div className="bottom">
                <h3 className='title'>{element.volumeInfo.title}</h3>
                <p className='amount'>&#8377; {!amount ? "500" :amount }</p>
              </div>
            </div>
            <Modal show={show} element={bookItem} onClose={()=> setShow(false)}/>
          </>)
          }
        })
      }

    </>
  )
}
