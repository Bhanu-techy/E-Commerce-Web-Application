import {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import "./index.css"

function ProductItem() {

    const [details, setDetails] = useState({})
    const [quantity, setQuantity] = useState(1)
    const {id} = useParams()

    const {addToCart} = useContext(CartContext)

    useEffect(()=>{
        const getDetails = async () => {
            const url =`https://fakestoreapi.com/products/${id}`
            const response = await fetch(url)
            const data = await response.json()
            
            if (response.ok){
                setDetails(data)
            }
        }
        getDetails()
    },[id])

    const onClickPlus = async () => {
        setQuantity(prev => prev+1)
    }

    const onClickMinus = async () => {
        if (quantity>1){
            setQuantity(prev => prev-1)
        }
    }

    const onClickAddToCart = () => {
        addToCart({...details, quantity})
    }

    const {image, title, description, rating={}, price, category}= details

  return (
    <div className='product-item-div'>
        <div className='product-img-div'>
            <img src={image} alt={title} className='product-img'/>
        </div>
        <div className='product-details-div'>
            <h1>{title}</h1>
            <p className='description'>{description}</p>
            <p>Category : {category}</p>
            <p className='price'>$ {price}</p>
            <p>Rating : {rating.rate}</p>
            <p>Rating Count : {rating.count}</p>
            <div className='counter'>
                <button onClick={onClickMinus}>-</button>
                <h2>{quantity}</h2>
                <button onClick={onClickPlus}>+</button>
            </div>
            <button onClick={onClickAddToCart} className='add-to-cart'>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductItem