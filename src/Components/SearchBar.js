import React, { useState } from 'react';


// Sample data for search (this would typically be fetched once or be static)
const sampleData = [
  { id: 1, name: 'New York', latitude: 40.7128, longitude: -74.0060 },
  { id: 2, name: 'Los Angeles', latitude: 34.0522, longitude: -118.2437 },
  { id: 3, name: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
  // Add more sample locations as needed
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);


  const handleSearchInput = (event) => {
    const input = event.target.value;
    setQuery(input);
    console.log(input);

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
    console.log(`Final search term: ${searchTerm}`); // Logs the final search term
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query) {
      handleFinalSearch(query);
    }
  };

  return (
    <div className="bg-dark-gray p-4 w-full">
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search for places..."
            value={query}
            onChange={handleSearchInput}
            onKeyPress={handleKeyPress} 
            className="flex-grow p-2 bg-gray-800 text-white rounded-lg outline-none"
            autoFocus
          />
        </div>


      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full bg-gray-800 text-white rounded-lg shadow-lg">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                handleFinalSearch(suggestion.name)
              }}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
