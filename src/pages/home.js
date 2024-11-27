import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import CityCard from "../Components/CityCard";
import SearchBar from "../Components/SearchBar";
import backGround from "../assets/backGround.webp";

export default function home() {
  return (
    <div className="bg-dark-grey">
      <NavBar />
      {/** Discover your spaces */}
      <div className="relative w-full h-64">
        <img
          src={backGround}
          alt="City view"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Discover Your Space
          </h1>
          <SearchBar />
        </div>
      </div>
      {/**Rent Around pakistan */}
      <div className="py-8 px-4">
        <h2 className="text-center text-white text-xl md:text-3xl font-bold mb-4">
          Rent Around Pakistan
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Find apartments, rooms, and buildings for rent all across Pakistan.
        </p>
      </div>

      <CityCard />

      {/**  list your property */}
      <div className="text-center bg-dark-grey text-white py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          List Your Rental on Nivaas.
        </h2>
        <p className="text-gray-400 mb-6">
          List your property on Nivaas to connect with trusted renters easily.
          Get started today!
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
          <Link to="/ListProperty">List a Property for Free</Link>
        </button>
      </div>
    </div>
  );
}
