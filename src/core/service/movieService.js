import {
  AXIOS_INSTANCE_GENERATOR,
  BASE_MOVIE_URL,
  BASE_MOVIE_BY_THEATER_URL,
} from "./configURL";

const MOVIE_SERVICE = {
  getAllMovie: (groupId = "GP09") =>
    AXIOS_INSTANCE_GENERATOR(BASE_MOVIE_URL).get(
      `/LayDanhSachPhim?maNhom=${groupId}`
    ),
  getMovieByTheater: (groupId = "GP09") =>
    AXIOS_INSTANCE_GENERATOR(BASE_MOVIE_BY_THEATER_URL).get(
      `/LayThongTinLichChieuHeThongRap?maNhom=${groupId}`
    ),
};

export default MOVIE_SERVICE;
