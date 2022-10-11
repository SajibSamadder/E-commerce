import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'

function ProductElement({ product, selectProduct }) {
    const { img, name } = product
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <button onClick={() => selectProduct(product)}>Add Shoe</button>
            </div>
        </div>
    )
}

export default ProductElement