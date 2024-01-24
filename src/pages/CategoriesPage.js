import React from 'react'
import { useState, useEffect } from 'react';
import Categories from '../components/Categories';

const CategoriesPage = () => {
    let [category, setCategory] = useState([])
    
    useEffect(()=>{
        getCategory()
    }, [])

    let getCategory = async() => {
        let response = await fetch('/api/category-list/')
        let data = await response.json()
        console.log(data)
        setCategory(data)
    }

  return (
    <div>
        {category.map((cat, index) => (
            <Categories key={index} cat={cat} />
        ))}
    </div>
  )
}

export default CategoriesPage 