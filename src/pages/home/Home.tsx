import { useEffect, useState } from "react";

import Header from "../../components/common/Header";
import SearchBar from "../../components/common/SearchBar";
import BannerCarousel from "../../components/common/BannerCarousel";
import ProductSection from "../../components/common/ProductSection";
import CategorySection from "../../components/common/CategorySection";
import FilterDrawer from "../../components/common/FilterDrawer";

import { useProductStore } from "../../store/productStore";
import type { FilterState } from "../../types/Filter";

const Home = () => {
  const loadProducts = useProductStore((state) => state.loadProducts);

  const exclusiveOffers = useProductStore((state) => state.exclusiveOffers);

  const bestSelling = useProductStore((state) => state.bestSelling);

  const categoryProducts = useProductStore((state) => state.categoryProducts);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    maxPrice: 1000,
    rating: 0,
  });

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto">
        <main className="flex-1 pb-24 lg:pb-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <Header />

            {/* Search */}
            <SearchBar />

            {/* Banner */}
            <div className="mt-6">
              <BannerCarousel />
            </div>

            {/* ⭐ Exclusive Offers (FROM STORE) */}
            <div className="mt-8">
              <ProductSection
                title="Exclusive Offer"
                products={exclusiveOffers}
              />
            </div>

            {/* 🔥 Best Selling (FROM STORE) */}
            <div className="mt-8">
              <ProductSection title="Best Selling" products={bestSelling} />
            </div>

            {/* Categories */}
            <div className="mt-8">
              <CategorySection />
            </div>

            {/* Category Wise Products */}
            <div className="mt-8">
              {Object.entries(categoryProducts).map(([category, products]) => (
                <ProductSection
                  key={category}
                  title={category}
                  products={products}
                  seeAllLink={`/explore/${category}`}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        desktop={false}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
};

export default Home;
