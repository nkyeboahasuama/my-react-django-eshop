import React from 'react'
import { Link } from 'react-router-dom';

const Categories = ({cat}) => {
  return (
    <div className='grid'>
      <div className='single-item-container'>
          <div className='item-np-card'>
            <hr></hr>
              <h3><Link to={`/category/${cat.id}/`}>{cat.name}</Link></h3>
              <p>Lorem is a meaningless text used by programmers to fill space.</p>
          </div>
      </div> 
    </div>  
  )
}

export default Categories 