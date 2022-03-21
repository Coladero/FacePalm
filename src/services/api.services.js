
import axios from "axios";
const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/football-api`
})

const getAllCountries = () =>{
    return service.post("/countries")
}

const getAllPlayers = (id) => {
  return service.post(`/countries/${id}/players`)
}

const getPlayerDetails = (id) =>{
  return service.post(`/countries/${id}/players/details`)
}
const getPlayerandAdd = (newPlayer, id) =>{
  return service.post(`/countries/add/${id}`,newPlayer)
}


export{
    getAllCountries,
    getAllPlayers,
    getPlayerDetails,
    getPlayerandAdd
}