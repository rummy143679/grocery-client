import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

interface Category {
  id: number;
  title: string;
  image: string;
  bgColor: string;
}

const categories: Category[] = [
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

const CategorySection = () => {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#181725]">
          Groceries
        </h2>
        <Link
          to="/explore"
          className="text-[#53B175] text-sm sm:text-base font-medium hover:underline"
        >
          See All
        </Link>
      </div>

      {/* Horizontal Scroll Categories */}
      <div
        className="
          flex
          gap-4
          overflow-x-auto
          scroll-smooth
          pb-2
          snap-x
          snap-mandatory
          [&::-webkit-scrollbar]:hidden
        "
      >
        {categories.map((category) => (
          <div key={category.id} className="snap-start">
            <CategoryCard
              title={category.title}
              image={category.image}
              bgColor={category.bgColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
