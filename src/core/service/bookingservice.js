import { AXIOS_INSTANCE_GENERATOR, BASE_BOOKING_TICKET_URL } from "./configURL";

const BOOKING_SERVICE = {
  getMovieScheduleById: (scheduleId) =>
    AXIOS_INSTANCE_GENERATOR(BASE_BOOKING_TICKET_URL).get(
      `/LayDanhSachPhongVe?MaLichChieu=${scheduleId}`
    ),
  bookTicket: (data) =>
    AXIOS_INSTANCE_GENERATOR(BASE_BOOKING_TICKET_URL, true).post(
      "/DatVe",
      data
    ),
};

export default BOOKING_SERVICE;
