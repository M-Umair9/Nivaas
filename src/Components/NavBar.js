import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="bg-dark-gray text-white flex items-center justify-between p-4 relative">
      {/* Conditional Rendering for Navbar or SearchBar */}
      {searchOpen ? (
        // Full-width SearchBar covering the Navbar
        <div className="flex items-center w-full bg-dark-gray">
          <input
            type="text"
            placeholder="Search for places..."
            className="flex-grow p-2 bg-gray-800 text-white rounded-lg outline-none"
            autoFocus
          />
          <X className="ml-2 cursor-pointer" size={24} onClick={toggleSearch} />
        </div>
      ) : (
        <>
          {/* Menu Icon on the left side */}
          <div className="cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          {/* Centered Title */}
          <p className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
            Nivaas
          </p>

          {/* Search Icon on the right side */}
          <div className="cursor-pointer" onClick={toggleSearch}>
            <Search size={24} />
          </div>
        </>
      )}

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-start p-4 space-y-2 z-10">
          <a href="/list-property" className="w-full py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>
            List a Property
          </a>
          <a href="/Signin" className="w-full py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>
            SignIn
          </a>
          <a href="/signup" className="w-full py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>
            Signup
          </a>
          <a href="/payments" className="w-full py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>
            Payments
          </a>
          <a href="/screening" className="w-full py-2 px-4 hover:bg-gray-700" onClick={toggleMenu}>
            Screening
          </a>
        </div>
      )}
    </div>
  );
}
