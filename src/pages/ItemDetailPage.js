import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItemDetailPage = ( {addToCart } ) => {
    let { id } = useParams()
    let [item, setItem] = useState(null)
    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value))
    }
      
    let getItem = async () => {
        let response = await fetch(`/api/product-list/${id}`)
        let data = await response.json();
        setItem(data);
        console.log(data);
    }

    useEffect(() => {
        getItem();
    }, [id]);

    return(
        <div className='grid'>
            <div className='single-item-container'>
                <div className='item-np-card'>
                    <hr></hr> 
                    <h3>{item?.name}</h3>
                    <h2>${item?.price}</h2>
                    <p>Lorem is a meaningless text used by programmers to fill space.</p>
                    <label>Quantity</label>
                    <input id="quantity-input" type={'number'} min={'1'} value={quantity} onChange={handleQuantityChange}></input>
                </div>
                <button onClick={() => addToCart(item, quantity)} className='add-cart-btn-bg'>Add To Cart</button>
            </div> 
        </div>
    );
}

export default ItemDetailPage