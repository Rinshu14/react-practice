import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const Pagination = () => {

  const [totalPage, setTotalPage] = useState(0)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const productPerPage = 8;


  const fetchProduct = async () => {
    let res = await fetch(`https://dummyjson.com/products/?limit=${productPerPage}&skip=${productPerPage * currentPage}`);

    let data = await res.json();

    setTotalPage(Math.ceil(data.total / productPerPage));
    setProducts(data.products)

  }

  useEffect(() => {
    fetchProduct();
  }, [currentPage])
  let handlePageClick = (index) => {

    setCurrentPage(index)
  }
  return (



    <div>
      <div className='flex flex-wrap'>
        {products.map((product) => <ProductCard product={product} />)}

      </div>
      <div>

        <button className={`border-2 border-gray-500 px-2 `}
          onClick={() => { setCurrentPage((currentPage) => { if (currentPage == 0) { return totalPage - 1 } else { return currentPage - 1 }} )}}>
        Previous
      </button>
      {[...Array(totalPage).keys()].map((item, index) => <span key={index} className={`inline-block mx-2 cursor-pointer w-5 text-center rounded-md ${currentPage === index ? 'bg-emerald-200' : ''}`} onClick={() => { handlePageClick(index) }}  >{index + 1}</span>)}
      <button className={`border-2 border-gray-500 px-2 ${currentPage === totalPage - 1 ? 'hidden' : ''}`} onClick={() => { setCurrentPage((currentPage) => currentPage + 1) }}>
        Next
      </button>
    </div>

    </div >
  )
}

// ${currentPage === 0 ? 'hidden' : ''}

export default Pagination