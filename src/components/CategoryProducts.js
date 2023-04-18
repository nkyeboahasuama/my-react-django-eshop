import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const CategoryProducts = ({id}) => {

  let [catproducts, setCatproducts] = useState(null)

  
  
  const getProducts = async() => {
    let response = await fetch(`/api/category-products/${id}/`)
    let data = await response.json()
    setCatproducts(data)
    console.log(data)
  }

  useEffect(() => {
    getProducts();
  }, [id])
  

  if (!catproducts){
    return (
        <h3></h3>
    )
  }
  return (
    <div className='items-list'>
      {catproducts.map((catpro, index) => (
        <div className='item-container'>
          <div className='item'>
            <div className='item-card-content'>
              <Link to={`/item/${catpro.id}`}><div key={index}>{catpro.name}</div>
              </Link>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    
  )
}

export default CategoryProducts


