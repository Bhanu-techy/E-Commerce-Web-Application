import {useState, useEffect} from 'react'
import Product from '../Product'
import Filter from '../Filter'
import "./index.css"

function Home() {
    const [data, setData] = useState([])
    const [loadMore, setLoadMore] = useState(false)
    const [category, setCategory] = useState("")
    const [search, setSearch] = useState("")

    useEffect(()=>{
        const getDetails = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const details = await response.json()
            const someData=details.slice(3,13)
            if (response.ok){
                setData(someData)
            }
        }
        getDetails()
    },[])

    const onClickLoadMore = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products")
            const fullData = await response.json()
            if (response.ok){
                setData(fullData)
            }
            setLoadMore(true)
    }

    const filterData = category!==""? data.filter(each=> each.category.includes(category)) : data

    const onClickSearch = () => {
        const searchResult = data.filter(each => each.title.toLowerCase().includes(search.toLocaleLowerCase()))
        setData(searchResult)
    }

  return (
    <div className='home-div'>
       
        <div className='productlist-div'>
            <Filter setCategory={setCategory} search={search} setSearch={setSearch} onClickSearch={onClickSearch}/>
            <div className='text-center'>
                <div className='text'>
                    <h1 className='heading'>Discover Our Product</h1>
                    <p className='para'>Browse our latest collection of premium design for the modern styles.</p>
                </div>
            <ul className='products-list'>
            {filterData.map(each=>(
                <Product key={each.id} details={each}/>
            ))}
            </ul>
            {!loadMore && <button className='load-more-btn' onClick={onClickLoadMore}>Load More</button>}
            </div>
        </div>
    </div>
  )
}

export default Home