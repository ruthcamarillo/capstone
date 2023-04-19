// import React from "react";
import React, { useState, useEffect } from "react";

const Card = [
  {
    "id": 1,
    "title": "title one",
    "description": "description one",
    "image": "image one"
  },
  {
    "id": 2,
    "title": "title two",
    "description": "description two",
    "image": "image two"
  },
  {
    "id": 3,
    "title": "title three",
    "description": "description three",
    "image": "image three"
  },
  {
    "id": 4,
    "title": "title four",
    "description": "description four",
    "image": "image four"
  },
];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = Card.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;