import { create } from "zustand";

export const useFilter = create((set) => ({
  countryName: "",
  regionName: "",
  findCountry: (name) => set({ countryName: name }),
  filterByRegion: (name) => set({ regionName: name }),
}));
