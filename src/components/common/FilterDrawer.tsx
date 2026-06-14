import { FaTimes, FaFilter } from "react-icons/fa";
import React from "react";
import type { FilterState } from "../../types/Filter";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  desktop?: boolean;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const categories = [
  "fruits",
  "vegetables",
  "dairy",
  "bakery",
  "snacks",
  "beverages",
  "staples",
  "spices",
  "household",
];

const defaultFilters: FilterState = {
  categories: [],
  maxPrice: 1000,
  rating: 0,
};

const FilterDrawer = ({
  isOpen,
  onClose,
  desktop = false,
  filters,
  setFilters,
}: FilterDrawerProps) => {
  // ✅ SAFE FALLBACK (prevents undefined crash)
  const safeFilters: FilterState = filters ?? defaultFilters;

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const updatePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: Number(e.target.value),
    }));
  };

  const updateRating = (rating: number) => {
    setFilters((prev) => ({
      ...prev,
      rating,
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const content = (
    <div className="flex flex-col h-full">
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b shrink-0">
        <div className="flex items-center gap-2">
          <FaFilter />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        {!desktop && (
          <button onClick={onClose} className="p-1">
            <FaTimes />
          </button>
        )}
      </div>

      {/* BODY (SCROLLABLE) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>

          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={safeFilters.categories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span className="capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="font-semibold mb-3">
            Max Price: ₹{safeFilters.maxPrice}
          </h3>

          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={safeFilters.maxPrice}
            onChange={updatePrice}
            className="w-full"
          />
        </div>

        {/* Rating */}
        <div>
          <h3 className="font-semibold mb-3">Rating</h3>

          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rating"
                  checked={safeFilters.rating === rating}
                  onChange={() => updateRating(rating)}
                />
                <span>{rating}★ & Above</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex gap-3 p-4 border-t shrink-0 bg-white">
        <button
          onClick={clearFilters}
          className="flex-1 border border-gray-300 rounded-xl py-3"
        >
          Clear
        </button>

        <button
          onClick={onClose}
          className="flex-1 bg-[#53B175] text-white rounded-xl py-3"
        >
          Apply
        </button>
      </div>
    </div>
  );

  /* DESKTOP */
  if (desktop) {
    return (
      <div className="bg-white h-screen w-full max-w-sm border-r flex flex-col">
        {content}
      </div>
    );
  }

  /* MOBILE */
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-96 max-w-md bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {content}
      </div>
    </>
  );
};

export default FilterDrawer;
