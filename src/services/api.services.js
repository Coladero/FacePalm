import axios from "axios";
const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/football-api`,
});

//* config let send the token on every request.
service.interceptors.request.use((config) => {
  //*  search the token in localstorage.
  const storedToken = localStorage.getItem("authToken");
  //* if the token exist, add to the header of the request.
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});

const getAllCountriesService = () => {
  return service.post("/countries");
};

const getAllPlayersService = (id) => {
  return service.post(`/countries/${id}/players`);
};

const getPlayerDetailsService = (id) => {
  return service.post(`/countries/${id}/players/details`);
};


export {getAllCountriesService, getAllPlayersService,getPlayerDetailsService};
