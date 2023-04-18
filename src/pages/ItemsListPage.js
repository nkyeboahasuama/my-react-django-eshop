import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';

const ItemsListPage = () => {

    let [items, setItems] = useState([])

    useEffect(() => {
        getItems()        
    }, [])

    let getItems = async () => {

        let response = await fetch('/api/product-list/')
        let data = await response.json()
        setItems(data)
    }

    return(
        <div className='items'>
            <div className="items-list">
                {items.map((item, index) => (
                    <ItemList key={index} item={item} />
                ))}
            </div>
        </div>
    ) 
}

export default ItemsListPage