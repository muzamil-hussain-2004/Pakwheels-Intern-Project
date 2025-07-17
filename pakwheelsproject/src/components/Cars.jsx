import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const cars = () => {
  const cars = useSelector((state)=> state.car.cars)
  const query = useSelector((state)=>state.search.query)

  const filteredCars = query 
  ? cars.filter((car)=> 
    car.name.toLowerCase().includes(query.toLowerCase())
  )
  :cars

  return ( 
    <>
    <Navbar/>

    <div className="grid grid-cols-1 ms-20 sm:grid-cols-2 md:grid-cols-4 p-4 ">
      {filteredCars.length === 0 ? (
        <p className="text-center col-span-full text-red-600 font-semi-bold">
          no cars founds. 
        </p>
      ) : (
          filteredCars.map((car) => (
        <Link to={`/car/${car.id}`} key={car.id} className="text-center w-48">
          <div className="bg-gray-100 mt-10 text-gray-700 p-4 rounded-md shadow-xl hover:shadow-lg transition">
            <h2 className="text-lg  font-bold">{car.name}</h2>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
          </div>
            </Link>
          ))
        )}
      </div>
    </>
  )
}
export default cars