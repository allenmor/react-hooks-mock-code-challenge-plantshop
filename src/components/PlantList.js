import React from "react";
import PlantCard from "./PlantCard";
import { useState } from 'react'

function PlantList({plants, setNewPrice, newPrice}) {
  return (
    <ul className="cards">
      {plants.map((el, i) => {
        return <PlantCard key={i} newPrice={newPrice} setNewPrice={setNewPrice} plants={el}/>
      })}
    </ul>
  );
}

export default PlantList;
