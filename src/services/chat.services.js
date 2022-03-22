import axios from "axios";
const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/chat`,
});

//* config let send the token on every request.
service.interceptors.request.use((config) => {
  //*  search the token in localstorage.
  const storedToken = localStorage.getItem("authToken");
  //* if the token exist, add to the header of the request.
  config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

  return config;
});


const getAllUsersService = () => {
  return service.get(`/users`);
};

const newChatService = (userId) =>{
  return service.post(`/messenger/${userId}`)
}

const getAllMessagesServices = (chatId) =>{
  return service.get(`/messages/${chatId}`)
}
export{getAllUsersService, newChatService, getAllMessagesServices}