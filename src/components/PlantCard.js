import React from "react";
import { useState } from 'react'


function PlantCard({plants, setNewPrice, newPrice}) {

  const [clicked, setClicked] = useState(true)

  function handleClick() {
    setClicked(prev => !prev)
  }

function handleSubmit(e){
  e.preventDefault()

  fetch(`http://localhost:6001/plants/${plants.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({price: e.target.price.value})
  })
  .then(res => res.json())
  .then(data => {
    setNewPrice(prev => !prev)
  })

}

function handleClick(){
  fetch(`http://localhost:6001/plants/${plants.id}`, {
  method: 'DELETE',
})
.then(res => res.json()) // or res.json()
.then(data => {
  setNewPrice(prev => !prev)
})
}
  return (
    <li className="card">
      <button onClick={handleClick}>Delete</button>
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {clicked ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <form onSubmit={handleSubmit}>
        <input name='price' type='text'></input>
        <input type='submit'></input>
      </form>
    </li>
  );
}

export default PlantCard;
