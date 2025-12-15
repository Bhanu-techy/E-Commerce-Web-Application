import {Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import "./index.css"

function Header() {
  return (
    <>
    <div className='header-div'>
        <h3>Lumina Store</h3>
        <nav className='nav-items'>
            <Link to="/">
            <p>Shop</p>
            </Link>
            <p>Account</p>
            <p>Contact US</p>
        </nav>
        <div className='icons'>
            <CiSearch size={20}/>
            <FiShoppingCart size={20}/>
        </div>
    </div>
    <hr className='hr'/>
    </>
  )
}

export default Header