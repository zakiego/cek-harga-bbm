import type { NextApiRequest, NextApiResponse } from "next";

import { getPriceHistoryByName } from "~/utils/api";
import { getLocationById } from "~/utils/dictionaryLocation";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const locationQuery = getLocationById(req.query.location as string)?.name;

  if (!locationQuery) {
    return res.json({ error: "Location not found" });
  }

  const data = await getPriceHistoryByName(locationQuery);

  res.status(200).json({ location: locationQuery, data: data });
};

export default Handler;
