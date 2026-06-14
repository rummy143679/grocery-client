import { create } from "zustand";
import type { Product } from "../types/Product";
import { products as productData } from "../data/Product";

interface ProductStore {
  products: Product[];
  categoryProducts: Record<string, Product[]>;
  exclusiveOffers: Product[];
  bestSelling: Product[];

  getProductsByCategory: (category: string) => Product[];
  getProductById: (id: number) => Product | undefined;

  loadProducts: () => void;
}

// ------------------------------
// GROUP BY CATEGORY
// ------------------------------
const groupProductsByCategory = (
  products: Product[],
): Record<string, Product[]> => {
  return products.reduce(
    (acc, product) => {
      const category = product.category || "Others";

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(product);

      return acc;
    },
    {} as Record<string, Product[]>,
  );
};

// ------------------------------
// BEST SELLING (2 per category)
// ------------------------------
const getBestSelling = (grouped: Record<string, Product[]>) => {
  const result: Product[] = [];

  Object.keys(grouped).forEach((category) => {
    const products = grouped[category];
    result.push(...products.slice(0, 2));
  });

  return result;
};

// ------------------------------
// EXCLUSIVE OFFERS (1 random per category)
// ------------------------------
const getExclusiveOffers = (grouped: Record<string, Product[]>) => {
  const result: Product[] = [];

  Object.keys(grouped).forEach((category) => {
    const products = grouped[category];

    if (products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      result.push(products[randomIndex]);
    }
  });

  return result;
};

// ------------------------------
// STORE
// ------------------------------
export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  categoryProducts: {},
  exclusiveOffers: [],
  bestSelling: [],

  // LOAD DATA
  loadProducts: () => {
    const grouped = groupProductsByCategory(productData);

    set({
      products: productData,
      categoryProducts: grouped,
      exclusiveOffers: getExclusiveOffers(grouped),
      bestSelling: getBestSelling(grouped),
    });
  },

  // GET BY CATEGORY
  getProductsByCategory: (category: string) => {
    return get().categoryProducts[category] || [];
  },

  // GET BY ID
  getProductById: (id: number) => {
    return get().products.find((product) => product.id === id);
  },
}));
