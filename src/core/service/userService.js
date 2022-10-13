import { AXIOS_INSTANCE_GENERATOR, BASE_USER_URL } from "./configURL";

const USER_SERVICE = {
  login: (data) =>
    AXIOS_INSTANCE_GENERATOR(BASE_USER_URL).post(`/DangNhap`, data),
  getUserProfile: () =>
    AXIOS_INSTANCE_GENERATOR(BASE_USER_URL, true).post("/ThongTinTaiKhoan"),
  updateUserProfile: (data) =>
    AXIOS_INSTANCE_GENERATOR(BASE_USER_URL, true).put(
      "/CapNhatThongTinNguoiDung",
      data
    ),
};

export default USER_SERVICE;
