import {useContext} from 'react'
import CartContext from '../Context/CartContext'
import EmptyCartView from '../EmptyCartView'
import './index.css'

function Cart() {

  const {cartItems, removeFromCart, clearCart} = useContext(CartContext)
  console.log(cartItems)

  return (
      <div className="cart-container">
        <div className='cart-head'>
          <h1 className="cart-heading">My Cart</h1>
        <button
          type="button"
          className="removeAll"
          data-testid="remove"
          onClick={removeFromCart}
        >Remove</button>
        </div>
        <div>
          {cartItems.length ===0 ?
          <EmptyCartView/> :
          <ul>{cartItems.map(each=>(
          <li>{each.category}</li>
        ))}</ul>
          }
        </div>
     </div>
  )
}

export default Cart