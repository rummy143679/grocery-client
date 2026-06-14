import { create } from "zustand";

export interface FavoriteItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface FavoriteStore {
  favorites: FavoriteItem[];

  addFavorite: (item: FavoriteItem) => void;

  removeFavorite: (id: number) => void;

  isFavorite: (id: number) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],

  addFavorite: (item) =>
    set((state) => ({
      favorites: [...state.favorites, item],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),

  isFavorite: (id) => get().favorites.some((item) => item.id === id),
}));
