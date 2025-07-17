import React from 'react'
import bannerImg from '../assets/banner.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="relative h-full w-full">
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">Find Your Dream Car</h1>
        <p className="text-lg md:text-xl text-gray-200">Explore the best cars available today</p>

        <Link to="/cars">
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold">
          Browse Cars
        </button>
        </Link>

        </div>
      </div>
    </div>
  )
}

export default Banner
