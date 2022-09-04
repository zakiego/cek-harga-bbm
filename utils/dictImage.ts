import { getURL } from "./getUrl";

export const getFuelImage = (fuel: string) => {
  return dictionaryImage.find((f) => f.type === fuel)?.imageEdit;
};

const dictionaryImage = [
  {
    type: "Pertamax Turbo",
    image: "https://mypertamina.id/assets/img/products/turbo.png",
    imageEdit: `/static/images/turbo.png`,
  },
  {
    type: "Pertamax",
    image: "https://mypertamina.id/assets/img/products/1.png",
    imageEdit: `/static/images/pertamax.png`,
  },
  {
    type: "Pertalite",
    image: "https://mypertamina.id/assets/img/products/lite.png",
    imageEdit: `/static/images/pertalite.png`,
  },
  {
    type: "Dex",
    image: "https://mypertamina.id/assets/img/products/dex.png",
    imageEdit: `/static/images/dex.png`,
  },
  {
    type: "Dexlite",
    image: "https://mypertamina.id/assets/img/products/dexlite.png",
    imageEdit: `/static/images/dex-lite.png`,
  },
  {
    type: "Bio Solar",
    image: "https://mypertamina.id/assets/img/products/biosolar.png",
    imageEdit: `/static/images/bio-solar.png`,
  },
];
