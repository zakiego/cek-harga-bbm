import csv from "csvtojson";
import { chain, omit } from "lodash";
import { DateTime } from "luxon";

export const getPriceHistoryByName = async (locationQuery: string) => {
  const resp = await fetch(
    "https://raw.githubusercontent.com/zakiego/dataset-daftar-harga-bbm-pertamina/main/data-master.csv",
  ).then((resp) => resp.text());

  const jsonArray = await csv().fromString(resp);

  return chain(jsonArray)
    .groupBy("fuelType")
    .map(function (items, fuelType) {
      return {
        fuelType,
        history: chain(items)
          .filter({ prov: locationQuery })
          .map((item) => omit(item, ["fuelType", "prov"]))
          .sortBy((i) => DateTime.fromFormat(i.date, "d-M-yyyy"))
          .reverse()
          .value(),
      };
    });
};
