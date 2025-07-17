import React from 'react';
import Navbar from './Navbar';
import navpic from '../assets/navpic.png'; 

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <img
          src={navpic}
          alt="About"
          className="mx-auto rounded-lg shadow-md w-full max-w-md h-auto mb-6 object-cover"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Our Car Platform</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our car listing platform where you can add, view, and explore various car models.
          Whether you're looking to sell your car or find your next vehicle, our platform is built to help 
          you connect with buyers and sellers easily. We're dedicated to providing a smooth and modern experience.
        </p>
      </div>
    </>
  );
}

export default About;
