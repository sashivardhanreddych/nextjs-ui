import { useState } from 'react';
import { filterHospitalsData } from '../../../jsondata/JsonData'
const SearchComponent = () => {
  const [selectedOption, setSelectedOption] = useState('hospitals'); // Default option
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle the search action here based on selectedOption and searchText
    console.log(`Searching for ${selectedOption}: ${searchText}`);
  };

  return (
    <div className="flex items-center justify-between flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="flex flex-row self-center sm:self-auto w-1/2">
        <label htmlFor="searchType" className="text-gray-600 text-sm mr-2 flex self-center w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
          Hospital or City :
        </label>
        <select
          id="searchType"
          name="searchType"
          className="border p-2 rounded-md w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-1/3 focus:outline-sky-600"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
            {filterHospitalsData.map((item, index)=>(
                <option key={index} value={item.name}>{item.name}</option>
            ))}
        </select>
      </div>

      <div className="flex flex-row py-2 sm:py-4 md:py-4">
        <label htmlFor="searchText" className="text-gray-600 text-sm mr-3 flex self-center w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-full">
            Doctor or Speciality
        </label>
        <input
          type="text"
          id="searchText"
          name="searchText"
          placeholder='Search Doctor or Speciality'
          className="border p-2 rounded-md w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-full focus:outline-sky-600"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white mx-3 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={handleSearch}
      >
        Search <span className='font-semibold'>&#8594;</span>
      </button>
    </div>
  );
};

export default SearchComponent;
