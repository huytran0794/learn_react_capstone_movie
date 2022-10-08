import {
  MOVIE_AXIOS_INSTANCE,
  MOVIE_BY_THEATER_AXIOS_INSTANCE,
} from "./configURL";

const MOVIE_SERVICE = {
  getAllMovie: (groupId = "GP09") =>
    MOVIE_AXIOS_INSTANCE.get(`/LayDanhSachPhim?maNhom=${groupId}`),
  getMovieByTheater: (groupId = "GP09") =>
    MOVIE_BY_THEATER_AXIOS_INSTANCE.get(
      `/LayThongTinLichChieuHeThongRap?maNhom=${groupId}`
    ),
};

export default MOVIE_SERVICE;
