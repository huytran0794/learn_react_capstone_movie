import moment from "moment";
import { TIME_FORMAT_CONST } from "../constant/global.const";

const convertTimeOnlyYear = (timeString) =>
  moment(timeString).format(TIME_FORMAT_CONST.ONLY_YEAR_FORMAT);

export { convertTimeOnlyYear };
