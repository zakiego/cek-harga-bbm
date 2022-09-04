import { DateTime } from "luxon";

export const FORMAT_DATE = "d-M-yyyy";

export const dateToIndonesiaLocalString = (date: string) => {
  return DateTime.fromFormat(date, FORMAT_DATE).toFormat("d MMMM yyyy", {
    locale: "id",
  });
};
