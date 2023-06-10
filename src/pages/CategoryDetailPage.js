import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryProducts from '../components/CategoryProducts';


const CategoryDetailPage = () => {
    let { id } = useParams()
    let [category, setCategory] = useState(null)

    useEffect(() => {
        let getCategory = async () => {
            let response = await fetch(`/api/category-list/${id}/`)
            let data = await response.json();
            console.log(data);
            setCategory(data);
        }
        getCategory();
    }, [id]);
    
    if (!category){
        return (
            <h3>Loading categories</h3>
        )
    }

    return(
    <div className='grid'>
        <hr></hr>
        <h1>{category.name}</h1>
        <p>Lorem is a meaningless text used by programmers to fill space.</p>
        <div> <CategoryProducts id={id}/> </div>
    </div>
    );
}
 
export default CategoryDetailPage