import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function CarList() {
    const cars = useSelector((state)=>state.car.cars);
    const query = useSelector((state)=> state.search.query);

    const filteredCars = cars.filter((car)=>
    car.name.toLowerCase().includes(query?.toLowerCase())
    )

  return (
   <div className='grid grid-cols-2 gap-4 p-4' >
    {filteredCars.map((car)=>(
      <Link to={`/car/${car.id}`} key={car.id}>
        <div className='bg-gray-700 text-white p-4 rounded hover:shadow-lg transition'>
          <h2 className='text-lg font-bold'>{car.name}</h2>
          <p>Model: {car.model}</p>
          <p>Year:  {car.year}</p>
          <p>Color: {car.color}</p>

        </div>
      </Link>
    ))}

   </div>
  );
}

export default CarList