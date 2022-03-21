import { useState } from 'react'

function SearchPlayer(props) {

    const [search, setSearch] = useState("")

    const handleChange = (e) =>{
        setSearch(e.target.value)
        props.searchPlayers(e.target.value)
    }

  return (
    <div>
    <label htmlFor="search"></label>
    <input type="text" name='search' value={search} onChange={handleChange} />

    </div>
  )
}

export default SearchPlayer