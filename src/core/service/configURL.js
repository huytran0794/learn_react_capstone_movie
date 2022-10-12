import axios from "axios";
import { LOCAL_SERVICE } from "./localService";

const BASE_URL = "https://movienew.cybersoft.edu.vn";

const BASE_MOVIE_URL = `${BASE_URL}/api/QuanLyPhim`;
const BASE_MOVIE_BY_THEATER_URL = `${BASE_URL}/api/QuanLyRap`;
const BASE_USER_URL = `${BASE_URL}/api/QuanLyNguoiDung`;
const BASE_BOOKING_TICKET_URL = `${BASE_URL}/api/QuanLyDatVe`;
const BASE_CINEMA_URL = `${BASE_URL}/api/QuanLyRap`;
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjA1LzAzLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Nzk3NDQwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc4MTIyMDAwfQ.FunqYipkHrCbBATBzuJXyjGpZZxDekx1oY2qxW3_yfw";

const AXIOS_INSTANCE_GENERATOR = (BASE_URL, accessToken = false) => {
  let config = {
    baseURL: BASE_URL,
    headers: { TokenCybersoft: TOKEN_CYBERSOFT },
  };

  if (accessToken) {
    config.headers.Authorization = `Bearer ${
      LOCAL_SERVICE.user.get()?.accessToken
    }`;
  }

  return axios.create(config);
};

export {
  TOKEN_CYBERSOFT,
  AXIOS_INSTANCE_GENERATOR,
  BASE_USER_URL,
  BASE_MOVIE_URL,
  BASE_MOVIE_BY_THEATER_URL,
  BASE_BOOKING_TICKET_URL,
};
