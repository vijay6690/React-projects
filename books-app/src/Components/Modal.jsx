import React from 'react'
import "../Components/style.css"
export default function Modal({show,element,onClose}) {
    if (!show) {
        return null
    }
    let image = element.volumeInfo.imageLinks && element.volumeInfo.imageLinks.smallThumbnail ;

    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className='close' onClick={onClose}><i class='fas fa-times'></i></button>
                    <div className="inner-box">
                        <img src={image} alt="" />+
                        <div className="info">
                            <h1>{element.volumeInfo.title}</h1>
                            <h3>{element.volumeInfo.authors} </h3>
                            <h4>{element.volumeInfo.publisher} <span>{element.volumeInfo.publishedDate}</span> </h4>
                            <a href={element.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className='description'>{element.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
