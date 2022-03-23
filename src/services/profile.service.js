import axios from "axios";
const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/profile`,
});

//* config let send the token on every request.
service.interceptors.request.use((config) => {
  //*  search the token in localstorage.
  const storedToken = localStorage.getItem("authToken");
  //* if the token exist, add to the header of the request.
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});

const getPlayersAllService = () => {
    return service.get("/profile");
  };

const getUserService = () =>{
  return service.get(`/profile`)
}

  export{getPlayersAllService, getUserService}

