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

const getAllCountries = () => {
  return service.post("/countries");
};

const getAllPlayers = (id) => {
  return service.post(`/countries/${id}/players`);
};

const getPlayerDetails = (id) => {
  return service.post(`/countries/${id}/players/details`);
};
const getPlayerandAdd = (newPlayer, id) => {
  return service.post(`/countries/add/${id}`, newPlayer);
};
const updatePlayerService = (id, updatePlayer) => {
  return service.patch(`/player/${id}/edit`, updatePlayer);
};

const deletePlayerService = (id) => {
  return service.delete(`/player/${id}/delete`);
};

export {
  getAllCountries,
  getAllPlayers,
  getPlayerDetails,
  getPlayerandAdd,
  updatePlayerService,
  deletePlayerService,
};
