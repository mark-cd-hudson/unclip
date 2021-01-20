import React from 'react';

const SearchBar = ({query,setQuery}) => {
  const BarStyling = {
    width:"50%",
    height: "40px",
    borderRadius: '100px',
    paddingLeft: '50px',
    background:"#EEE",
    border:"none",
  };
  return (
    <input 
     style={BarStyling}
     key="searchBar"
     value={query}
     placeholder={"search for something"}
     onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar