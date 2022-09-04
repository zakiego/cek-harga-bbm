export const getLocationById = (location: string) => {
  return dictionaryLocations.find((loc) => loc.id === location);
};

export const getLocationByName = (location: string) => {
  return dictionaryLocations.find((loc) => loc.name === location);
};

export interface DictionaryLocations {
  id: string;
  name: string;
}

export const dictionaryLocations = [
  {
    id: "aceh",
    name: "Prov. Nanggroe Aceh Darussalam",
  },
  { id: "sumatera-utara", name: "Prov. Sumatera Utara" },
  { id: "sumatera-barat", name: "Prov. Sumatera Barat" },
  { id: "riau", name: "Prov. Riau" },
  { id: "kepulauan-riau", name: "Prov. Kepulauan Riau" },
  { id: "batam", name: "Kodya Batam (FTZ)" },
  { id: "jambi", name: "Prov. Jambi" },
  { id: "bengkulu", name: "Prov. Bengkulu" },
  { id: "sumatera-selatan", name: "Prov. Sumatera Selatan" },
  { id: "bangka-belitung", name: "Prov. Bangka-Belitung" },
  { id: "lampung", name: "Prov. Lampung" },
  { id: "jakarta", name: "Prov. DKI Jakarta" },
  { id: "banten", name: "Prov. Banten" },
  { id: "jawa-barat", name: "Prov. JawaBarat" },
  { id: "jawa-tengah", name: "Prov. Jawa Tengah" },
  { id: "yogyakarta", name: "Prov. DI Yogyakarta" },
  { id: "jawa-timur", name: "Prov. Jawa Timur" },
  { id: "bali", name: "Prov. Bali" },
  { id: "nusa-tenggara-barat", name: "Prov. Nusa Tenggara Barat" },
  { id: "nusa-tenggara-timur", name: "Prov. Nusa Tenggara Timur" },
  { id: "kalimantan-barat", name: "Prov. Kalimantan Barat" },
  { id: "kalimantan-tengah", name: "Prov. Kalimantan Tengah" },
  { id: "kalimantan-selatan", name: "Prov. Kalimantan Selatan" },
  { id: "kalimantan-timur", name: "Prov. Kalimantan Timur" },
  { id: "kalimantan-utara", name: "Prov. Kalimantan Utara" },
  { id: "sulawesi-utara", name: "Prov. Sulawesi Utara" },
  { id: "gorontalo", name: "Prov. Gorontalo" },
  { id: "sulawesi-tengah", name: "Prov. Sulawesi Tengah" },
  { id: "sulawesi-tenggara", name: "Prov. Sulawesi Tenggara" },
  { id: "sulawesi-selatan", name: "Prov. Sulawesi Selatan" },
  { id: "sulawesi-barat", name: "Prov. Sulawesi Barat" },
  { id: "maluku", name: "Prov. Maluku" },
  { id: "maluku-utara", name: "Prov. Maluku Utara" },
  { id: "papua", name: "Prov. Papua" },
  { id: "papua-barat", name: "Prov. Papua Barat" },
];
