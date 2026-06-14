import { useState } from "react";
import CategoryCard from "../../components/common/CategoryCard";
import SearchBar from "../../components/common/SearchBar";

const categories = [
  {
    id: 1,
    title: "Fruits",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300",
    bgColor: "#53B17520",
  },
  {
    id: 2,
    title: "Vegetables",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300",
    bgColor: "#F8A44C20",
  },
  {
    id: 3,
    title: "Dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300",
    bgColor: "#F7A59320",
  },
  {
    id: 4,
    title: "Bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
    bgColor: "#D3B0E020",
  },
  {
    id: 5,
    title: "Snacks",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=300",
    bgColor: "#FDE59820",
  },
  {
    id: 6,
    title: "Beverages",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300",
    bgColor: "#B7DFF520",
  },
  {
    id: 7,
    title: "Staples",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300",
    bgColor: "#836AF620",
  },
  {
    id: 8,
    title: "Spices",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300",
    bgColor: "#F7A59320",
  },
  {
    id: 9,
    title: "Household",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300",
    bgColor: "#53B17520",
  },
];

const Explore = () => {
  const [search] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 pb-24 md:pb-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#181725] mb-6">
          Find Products
        </h1>

        {/* Search */}
        <SearchBar />

        {/* Categories */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              bgColor={category.bgColor}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center mt-20">
            <h3 className="text-lg font-semibold text-gray-600">
              No Categories Found
            </h3>
            <p className="text-gray-400 mt-2">
              Try searching another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
