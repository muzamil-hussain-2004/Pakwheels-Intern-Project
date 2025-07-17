import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from './Navbar'


function CarDetails() {
    const {id} = useParams()
    const cars =useSelector((state)=>state.car.cars)
    const car = cars.find((c)=>c.id === id)

    if(!car){
        return <div className='p-4 text-red-600'>car not found</div>
    }

  return (
    <>
    <NavBar/>  
      <div className='p-4 mt-10 max-w-xl mx-auto  bg-gray-100 rounded shadow'>
        <h2 className='text-2xl font-bold mb-2'>{car.name}</h2>
        <p><strong>Model:</strong>{car.model}</p>
        <p><strong>Year:</strong>{car.year}</p>
        <p><strong>Color:</strong>{car.color}</p>
    </div>
    </>

  )
}

export default CarDetails