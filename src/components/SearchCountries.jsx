import { TextField } from "@mui/material";
import { useState } from "react";
function SearchCountries(props) {
  
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
    props.searchCountries(e.target.value);
  };
  return (
    <div className="container-search">
      <TextField error id="outlined-disabled" label="Search here..." variant="standard" type="text" name="search" value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchCountries;
