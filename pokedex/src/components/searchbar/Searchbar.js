import React, { useState } from "react";

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClickSearch = async (e) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={handleChangeSearch} />
      </div>

      <div className="searchbar-btn">
        <button onClick={onClickSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
