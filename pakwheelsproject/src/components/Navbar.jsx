import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery } from '../features/cars/searchSlice';
import { useState } from "react";
import Logo from "../assets/Black and Red Car Animated Logo.png"
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(setQuery(value)); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchInput)); 
    navigate("/cars"); 
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex flex-wrap justify-between items-center">
      <Link to="/" className="text-xl font-bold"><img src={Logo} alt=""  className="w-40"/></Link>

      <div className="space-x-4 text-sm sm:text-base text-gray-200">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cars" className="hover:underline">Cars</Link>
        <Link to="/AddCarForm" className="hover:underline">Add Car</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center mt-2 sm:mt-0">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchInput}
          onChange={handleChange} 
          className="px-3 py-1 rounded-l-md text-black border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-r-md text-white font-semibold"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
