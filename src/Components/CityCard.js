import React from 'react';

// Import city images
import islamabad from '../assets/isb.webp';
import karachi from '../assets/krachi.jpg';
import lahore from '../assets/lhr.webp';
import multan from '../assets/mltn.webp';

const cities = [
  { name: 'Islamabad', image: islamabad },
  { name: 'Karachi', image: karachi },
  { name: 'Lahore', image: lahore },
  { name: 'Multan', image: multan },
];

const CityCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12">
      {cities.map((city, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
        >
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-40 md:h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">{city.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CityCard;
