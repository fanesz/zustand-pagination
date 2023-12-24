import { create } from "zustand";

export const useCurrentPage = create((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
}));

export const useItemsPerPage = create((set) => ({
  limit: 10,
  setLimit: (limit) => set({ limit }),
}));