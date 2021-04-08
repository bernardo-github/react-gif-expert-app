import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Piece' ]);
  const addCategory = ( category ) => {
    setCategories([ category, ...categories ]);
  }
  return (
        <>
          <h2 className="animate__animated animate__fadeIn">GifExpertApp</h2>
          <AddCategory add= { addCategory }/>
          <hr /> 
          
          <ol>
            {
              categories.map( category => (
                <GifGrid key = { category } category = { category }/>
               ))
            }
          </ol>
        </>
    )
}

export default GifExpertApp