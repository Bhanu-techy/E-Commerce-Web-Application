import {Link} from 'react-router-dom'
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
          <Link to="/cart">
            <FiShoppingCart size={20}/>
          </Link>
        </div>
    </div>
    <hr className='hr'/>
    </>
  )
}

export default Header