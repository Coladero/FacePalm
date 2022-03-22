import { useState } from "react";

function SearchPlayer(props) {
  //!Line5, useState
  const [search, setSearch] = useState("");

  //!Line8, handle check if the user write something in the searchBar
  const handleChange = (e) => {
    setSearch(e.target.value);
    props.searchPlayers(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search"></label>
      <input type="text" name="search" value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchPlayer;
