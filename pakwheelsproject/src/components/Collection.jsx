import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import { Link } from 'react-router-dom';

const collections = [
  { title: "Honda", image: img1 },
  { title: "Toyota", image: img2 },
  { title: "Kia", image: img3 },
  { title: "Hybrids", image: img4 },
];

export default function Collection() {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Collections</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {collections.map((item, index) => (
          <Link to="/cars" key={index} className="flex flex-col items-center group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 shadow-lg mb-3 group-hover:border-gray-600 group-hover:shadow-2xl transition-all duration-300 ease-in-out">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-700 font-semibold group-hover:text-black transition duration-300">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
