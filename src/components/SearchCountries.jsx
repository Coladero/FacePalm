import { useState } from 'react'

function SearchCountries(props) {
    const [search, setSearch] = useState()

    const handleChange = (e) =>{
        setSearch(e.target.value)
        props.searchCountries(e.target.value)
    }

  return (
    <div>
    <label htmlFor="search"></label>
    <input type="text" name='search' value={search} onChange={handleChange} />

    </div>
  )
}

export default SearchCountries