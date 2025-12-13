import React from 'react'
import { FaRegStar } from "react-icons/fa";
import "./index.css"

function Product({details}) {
    const {title, price, description, rating, image}=details
    const name=title.split(" ").slice(0,3).join(" ")
    const info=description.slice(0,30)
    
  return (
    <div className='product-div'>
        <img src={image} alt={title} className='image'/>
        <div className='title-div'>
            <p className='title'>{name}</p>
            <p><FaRegStar/> {rating.rate}</p>
        </div>
        <p className='title'>{info}...</p>
        <p className='price'>$ {price}</p>
    </div>
  )
}

export default Product