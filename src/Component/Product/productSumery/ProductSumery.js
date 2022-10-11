import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove, faTrash } from '@fortawesome/free-solid-svg-icons'
function ProductSumery({ selectProducts }) {

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * selectProducts.length))
    const [randomProduct, setRandomChoice] = useState([])
    // console.log(randomNumber)
    function randomChoice() {
        if (selectProducts.length > 0) {
            setRandomNumber(Math.floor(Math.random() * selectProducts.length))
            setRandomChoice([selectProducts[randomNumber]])
        } else {
            alert("Your Card in NO data")
        }
    }
    // console.log(randomProduct)
    return (
        <div className='product-summery-wrapper'>
            <h3>Your Choice Product</h3>
            <div className='select-product'>
                {
                    selectProducts.map(product => {
                        return (
                            <div key={product.id}>
                                <img src={product.img} alt="" />
                                <h4>{product.name}</h4>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={randomChoice}>choose 1 for me</button>
            <button>choose again</button>
            <div className="select-product mt-5">
                {
                    randomProduct.map(product => {
                        return (
                            <div key={product.id}>
                                <img src={product.img} alt="" />
                                <h4>{product.name}</h4>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductSumery