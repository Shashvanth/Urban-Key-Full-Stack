import React, { useState } from 'react';

function SearchBox() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Flat');
  const [budget, setBudget] = useState('Budget');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleSearch = () => {
    // Add your search logic here, e.g., making an API call with the selected parameters
    console.log('Searching for:', { location, propertyType, budget });
  };

  return (
    <div className="search-box">
      <div className="location-input">
        <span className="icon">📍</span>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter location"
        />
        <span className="add-more">Add more...</span>
      </div>

      <div className="dropdown">
        <span className="icon">🏠</span>
        <select value={propertyType} onChange={handlePropertyTypeChange}>
          <option value="Flat">Flat</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Plot">Plot</option>
        </select>
      </div>

      <div className="dropdown">
        <span className="icon">₹</span>
        <select value={budget} onChange={handleBudgetChange}>
          <option value="Budget">Budget</option>
          <option value="Under 50 Lakhs">Under 50 Lakhs</option>
          <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
          <option value="Above 1 Crore">Above 1 Crore</option>
        </select>
      </div>

      <button className="search-button" onClick={handleSearch}>
        <span className="search-icon">🔍</span> Search
      </button>
    </div>
  );
}

export default SearchBox;
