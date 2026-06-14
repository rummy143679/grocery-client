import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import ProductCard from "../../components/common/ProductCard";
import FilterDrawer from "../../components/common/FilterDrawer";
import { useProductStore } from "../../store/productStore";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const ProductsPage = () => {
  const { category, query } = useParams<{ category: string; quey: string }>();

  const navigate = useNavigate();

  const products = useProductStore((state) => state.products);
  const loadProducts = useProductStore((state) => state.loadProducts);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    categories: [],
    maxPrice: 1000,
    rating: 0,
  });

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category) {
      result = result.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase(),
      );
    }

    if (filters.categories.length) {
      result = result.filter((p) =>
        filters.categories.includes(p.category.toLowerCase()),
      );
    }

    result = result.filter((p) => p.price <= filters.maxPrice);

    if (filters.rating > 0) {
      result = result.filter((p) => Number(p.rating) >= filters.rating);
    }

    return result;
  }, [products, category, filters]);

  //   const filteredProducts = useMemo(() => {
  //     let result = [...products];

  //     if (category) {
  //       result = result.filter(
  //         (p) => p.category?.toLowerCase() === category.toLowerCase(),
  //       );
  //     }

  //     if (query) {
  //       result = result.filter(
  //         (p) =>
  //           p.name.toLowerCase().includes(query.toLowerCase()) ||
  //           p.description.toLowerCase().includes(query.toLowerCase()),
  //       );
  //     }

  //     return result;
  //   }, [products, category, query]);

  return (
    <div className="min-h-screen bg-[#FCFCFC] pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="
                p-2
                rounded-lg
                hover:bg-gray-100
                transition
              "
            >
              <FaArrowLeft />
            </button>

            <h1
              className="
                text-xl
                md:text-2xl
                font-bold
                text-[#181725]
                capitalize
              "
            >
              {category}
            </h1>
          </div>

          {/* <button
            onClick={() => setIsFilterOpen(true)}
            className="
              px-4
              py-2
              bg-[#53B175]
              text-white
              rounded-xl
              hover:opacity-90
              transition
            "
          >
            Filter
          </button> */}
          {/* Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            aria-label="Open Filters"
            className="
          h-14
          w-14
          flex-shrink-0
          flex
          items-center
          justify-center
          rounded-xl
          bg-[#53B175]
          text-white
          hover:opacity-90
          active:scale-95
          transition
        "
          >
            <HiOutlineAdjustmentsHorizontal className="text-2xl" />
          </button>
        </div>

        {/* Product Count */}
        <div className="mb-4 text-gray-500 text-sm">
          {filteredProducts.length} Products Found
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-4
            "
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              py-24
            "
          >
            <h2 className="text-xl font-semibold text-gray-600">
              No Products Found
            </h2>

            <p className="text-gray-400 mt-2 text-center">
              No products available in this category.
            </p>
          </div>
        )}
      </div>

      {/* Filter Drawer */}
      {/* <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        desktop={false}
      /> */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        desktop={false}
      />
    </div>
  );
};

export default ProductsPage;
