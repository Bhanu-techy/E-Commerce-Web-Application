import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import "./index.css"

function Filter({setCategory}) {
  return (
    <div className='filters-div'>
        <h2><span><IoFilterSharp/> </span>Filters</h2>
        <div className='radio-div'>
            <input type='radio' id="all" />
            <lable htmlFor="all">All Products</lable>
        </div>
        <div className='radio-div'>
            <input type='radio' id="bags" onClick={()=>setCategory('bags')}/>
            <lable htmlFor="bags">Bags</lable>
        </div>
        <div className='radio-div'>
            <input type='radio' id="accessories" onClick={()=>setCategory('accessories')}/>
            <lable htmlFor="accessories">Accesories</lable>
        </div>
        <div className='radio-div'>
            <input type="radio" id="footwear" onClick={()=>setCategory('footwear')}/>
            <label htmlFor='footwear'>Footwear</label>
        </div>
        <h2>Price Range</h2>
        <input type="range" min="$10" max="$100" step="1"></input>
        <div>
            <h2>Sort by</h2>
            <select onChange={(e)=>setCategory(e.target.value)}>
                <option value="">Features</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electonics">Electonics</option>
            </select>
        </div>
    </div>
  )
}

export default Filter