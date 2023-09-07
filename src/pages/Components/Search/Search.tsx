import { useState } from 'react';

const SearchComponent = () => {
  const [selectedOption, setSelectedOption] = useState('hospitals'); // Default option
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle the search action here based on selectedOption and searchText
    console.log(`Searching for ${selectedOption}: ${searchText}`);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col">
        <label htmlFor="searchType" className="text-gray-600 text-sm">
          Hospital or City:
        </label>
        <select
          id="searchType"
          name="searchType"
          className="border p-2 rounded-md focus:outline-none"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="hospitals">Hospitals</option>
          <option value="city">City</option>
          <option value="doctor">Doctor</option>
          <option value="speciality">Speciality</option>
        </select>
      </div>

      <div className="flex-grow">
        <label htmlFor="searchText" className="text-gray-600 text-sm">
          {selectedOption === 'hospitals' || selectedOption === 'city'
            ? 'Search Hospitals or City'
            : 'Search Doctor or Speciality'}
        </label>
        <input
          type="text"
          id="searchText"
          name="searchText"
          className="border p-2 rounded-md w-full focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
