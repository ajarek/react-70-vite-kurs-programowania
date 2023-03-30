import React from 'react'
import './Lista.css'
const Lista = ({array}) => {
  
  return (
    <div className='lista'>
      <h2>Liczba kursów {array.length}</h2>
      <ol>
      {array.map((item, index) =>{
        return(
        <li key={index}>{item.name}</li>
        )
      })}
      </ol>
    </div>
  )
}

export default Lista