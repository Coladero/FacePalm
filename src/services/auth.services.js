import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`,
});

//* config let send the token on every request.
service.interceptors.request.use((config) => {
  //*  search the token in localstorage.
  const storedToken = localStorage.getItem("authToken");
  //* if the token exist, add to the header of the request.
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});

const signupService = (user) => {
  return service.post("/signup", user);
};

const loginService = (user) => {
  return service.post("/login", user);
};

const checkUserService = () => {
  return service.get("/verify");
};

const getPlayersAll = () => {
  return service.get("/profile");
};
export { signupService, loginService, checkUserService, getPlayersAll };
