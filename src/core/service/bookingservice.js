import { BOOKING_TICKET_AXIOS_INSTANCE } from "./configURL";

const BOOKING_SERVICE = {
  getMovieScheduleById: (scheduleId) =>
    BOOKING_TICKET_AXIOS_INSTANCE.get(
      `/LayDanhSachPhongVe?MaLichChieu=${scheduleId}`
    ),
};

export default BOOKING_SERVICE;
