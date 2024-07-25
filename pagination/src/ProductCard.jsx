import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='inline-block border-4 m-3 w-36 '>
        <h3>{product.id}</h3>
        <img alt={product.title} src={product.thumbnail} className='w-20 h-16'></img>
        <h3 >{product.title}</h3>
    
        <p>{product.price}</p>
    </div>
  )
}

export default ProductCard