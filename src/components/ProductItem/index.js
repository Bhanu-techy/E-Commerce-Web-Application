import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./index.css"

function ProductItem() {

    const [details, setDetails] = useState({})
    const [count, setCount] = useState(0)
    const {id} = useParams()

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
        setCount(prev => prev+1)
    }

    const onClickMinus = async () => {
        if (count>0){
            setCount(prev => prev-1)
        }
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
                <h2>{count}</h2>
                <button onClick={onClickPlus}>+</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem