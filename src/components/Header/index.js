import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import CartContext from '../Context/CartContext';
import "./index.css"

function Header() {

  const {cartItems} = useContext(CartContext)
  const cartLength = cartItems.length

  return (
    <>
    <div className='header-div'>
        <h3>Lumina Store</h3>
        <nav className='nav-items'>
            <Link to="/">
            <p>Shop</p>
            </Link>
        </nav>
          <Link to="/cart" className='cart-icon'>
            <FiShoppingCart size={20}/>
            {cartLength >0 && <p className='cart-count'>{cartLength}</p>}
          </Link>
    </div>
    <hr className='hr'/>
    </>
  )
}

export default Header