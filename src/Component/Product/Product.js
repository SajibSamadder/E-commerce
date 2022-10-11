import React, { useEffect, useState } from 'react'
import ProductElement from './ProductElement/ProductElement'
import './Product.css'
import ProductSumery from './productSumery/ProductSumery'
function Product() {
    const [products, setProduct] = useState([])
    const [selectProducts, setSelectProduct] = useState([])
    useEffect(() => {
        fetch("product.json")
            .then(res => res.json())
            .then(res => setProduct(res))
    }, [])
    function selectProduct(product) {
        if (selectProducts.length == 4) {
            setSelectProduct([...selectProducts])
            alert("Mama Your card is full")
        } else {
            const findeSameProduct = selectProducts.find(selectProduct => selectProduct.id == product.id)
            if (findeSameProduct) {
                if (findeSameProduct.id === product.id) {
                    alert("You All Redy Add this product")
                }
            }
            else {
                setSelectProduct([...selectProducts, product])
            }
        }

    }

    return (
        <section className='product-container'>
            <div className="product-wrapper">
                {
                    products.map(product => {

                        return (
                            <ProductElement key={product.id} product={product} selectProduct={selectProduct}></ProductElement>
                        )
                    })
                }
            </div>
            <div className="product-add-summery">
                <ProductSumery selectProducts={selectProducts} key={Math.random()}></ProductSumery>
            </div>
        </section>
    )
}

export default Product