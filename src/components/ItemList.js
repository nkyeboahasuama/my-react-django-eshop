import React from 'react';
import { Link } from 'react-router-dom';


const ItemList = ({item}) => {
    return(
        <div className='item-container'>
            <div className='item'>
                <div className='item-card-content'>
                    <div className='name-price'>
                        <div className='item-name'>
                            <h3 id='item-name'>{item.name}</h3>
                        </div>
                        <h3>${item.price}</h3>
                    </div>
                    <div>
                        <Link className='view-button' to={`/item/${item.id}`}>
                            <button>View Item</button>
                        </Link>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ItemList