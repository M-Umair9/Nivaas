import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Sample data for search
const sampleData = [
  { id: 1, name: 'New York', latitude: 40.7128, longitude: -74.0060 },
  { id: 2, name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
  { id: 3, name: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
];

export default function SearchBar({ className = '' }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setQuery(input);

    // Filter the sample data based on input
    if (input) {
      const filteredSuggestions = sampleData.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleFinalSearch = (searchTerm) => {
    setQuery(searchTerm);
    setSuggestions([]);
    console.log(`Final search term: ${searchTerm}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query) {
      handleFinalSearch(query);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type in city, address"
          value={query}
          onChange={handleSearchInput}
          onKeyPress={handleKeyPress}
          className={`w-full p-3 pl-10 bg-gray-800 text-white rounded-lg outline-none`}
          autoFocus
        />
        {/* Search Icon */}
        <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white" size={20} />
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute z-10 left-0 w-full bg-gray-800 text-white rounded-lg shadow-lg mt-1">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleFinalSearch(suggestion.name)}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
