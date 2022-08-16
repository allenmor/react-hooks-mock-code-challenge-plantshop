import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from 'react'

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  const [newPrice, setNewPrice] = useState(false)
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => {
      setPlants(data)
      setFilteredPlants(data)
    })
  },[isNew, newPrice])

  console.log(plants)
  return (
    <main>
      <NewPlantForm setIsNew={setIsNew}/>
      <Search plants={plants} setFilteredPlants={setFilteredPlants}/>
      <PlantList newPrice={newPrice} setNewPrice={setNewPrice} plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
