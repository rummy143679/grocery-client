import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  bgColor?: string;
}

const CategoryCard = ({ title, image, bgColor }: CategoryCardProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/explore/${title.toLowerCase()}`);
  }, [navigate, title]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        flex-shrink-0
        w-[180px]
        rounded-2xl
        border
        border-gray-200
        p-4
        cursor-pointer
        hover:shadow-md
        transition-all
        text-left
      "
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-20 h-20 mx-auto object-contain"
      />

      <h3 className="text-center mt-3 font-semibold">{title}</h3>
    </button>
  );
};

export default CategoryCard;
