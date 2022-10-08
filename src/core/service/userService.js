import { USER_AXIOS_INSTANCE as AXIOS_INSTANCE } from "./configURL";

const USER_SERVICE = {
  login: (data) => AXIOS_INSTANCE.post(`/DangNhap`, data),
};

export default USER_SERVICE;
