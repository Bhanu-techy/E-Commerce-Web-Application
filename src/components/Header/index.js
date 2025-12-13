import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import "./index.css"

function Header() {
  return (
    <div className='header-div'>
        <p>Lumina Store</p>
        <nav className='nav-items'>
            <p>Shop</p>
            <p>Account</p>
            <p>Contact US</p>
        </nav>
        <div className='icons'>
            <CiSearch size={20}/>
            <FiShoppingCart size={20}/>
        </div>
    </div>
  )
}

export default Header