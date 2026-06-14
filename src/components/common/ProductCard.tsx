import { FaHeart, FaRegHeart, FaPlus, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useCartStore } from "../../store/cartStore";
import { useFavoriteStore } from "../../store/favoriteStore";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  rating?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const addToCart = useCartStore((state) => state.addToCart);

  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const isFavorite = useFavoriteStore((state) => state.isFavorite(product.id));

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    });
  };

  const toggleFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const safeRating =
    product.rating && !Number.isNaN(Number(product.rating))
      ? Number(product.rating).toFixed(1)
      : "0.0";

  return (
    <div
      onClick={handleNavigate}
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-4
        w-[180px]
        sm:w-[200px]
        md:w-[220px]
        flex-shrink-0
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {/* Favorite */}
      <div className="flex justify-end">
        <button
          onClick={toggleFavourite}
          className="text-lg"
          aria-label="Toggle favorite"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-24 w-24 sm:h-28 sm:w-28 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="font-semibold text-sm sm:text-base line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mt-1">
          <FaStar className="text-yellow-400 text-xs" />

          <span className="text-xs text-gray-600 font-medium">
            {safeRating}
          </span>

          <span className="text-[10px] text-gray-400">/ 5</span>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2 h-10">
          {product.description}
        </p>
      </div>

      {/* Price + Add */}
      <div className="mt-5 flex justify-between items-center">
        <span className="text-base sm:text-lg font-bold">₹{product.price}</span>

        <button
          onClick={handleAddToCart}
          className="
            h-10
            w-10
            rounded-xl
            bg-[#53B175]
            text-white
            flex
            items-center
            justify-center
          "
          aria-label="Add to cart"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
