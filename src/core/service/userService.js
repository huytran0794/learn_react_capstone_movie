import { AXIOS_INSTANCE_GENERATOR, BASE_USER_URL } from "./configURL";

const USER_SERVICE = {
  login: (data) => 
    AXIOS_INSTANCE_GENERATOR(BASE_USER_URL).post(`/DangNhap`, data),
  
};

export default USER_SERVICE;
