import { AXIOS_INSTANCE_GENERATOR, BASE_CINEMA_URL } from "./configURL";

const CINEMA_SERVICE = {
  getSingleMovieSchedule: (movieId) =>
    AXIOS_INSTANCE_GENERATOR(BASE_CINEMA_URL).get(
      `/LayThongTinLichChieuPhim?MaPhim=${movieId}`
    ),
};

export default CINEMA_SERVICE;
