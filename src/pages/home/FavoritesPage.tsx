import { FaArrowLeft, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useFavoriteStore } from "../../store/favoriteStore";
// optional if you have cart store
import { useCartStore } from "../../store/cartStore";

const FavoritesPage = () => {
  const navigate = useNavigate();

  const { favorites, removeFavorite } = useFavoriteStore();

  const { addToCart } = useCartStore();

  const handleRemove = (id: number) => {
    removeFavorite(id);
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    // optional UX feedback
    alert("Added to cart");
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] pb-24 md:pb-8">
      {/* Header */}
      <div className="sticky top-0 bg-white z-20 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FaArrowLeft />
          </button>

          <h1 className="text-xl font-bold text-[#181725]">
            Favourite Products
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FaHeart className="text-6xl text-gray-300" />

            <h2 className="mt-4 text-xl font-semibold text-gray-600">
              No Favourite Products
            </h2>

            <p className="mt-2 text-gray-400 text-center">
              Save products you like and they will appear here.
            </p>

            <button
              onClick={() => navigate("/home")}
              className="
                mt-6
                bg-[#53B175]
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
              "
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="
                  bg-white
                  rounded-2xl
                  border border-green-100
                  p-4
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                <div className="flex items-center gap-4">
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-20 h-20 sm:w-24 sm:h-24
                      object-contain
                      flex-shrink-0
                    "
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-[#181725]">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {product.description}
                    </p>

                    <p className="mt-2 text-lg font-bold text-[#53B175]">
                      ₹{product.price}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3">
                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="
                        h-10 w-10
                        rounded-xl
                        bg-red-50
                        text-red-500
                        flex items-center justify-center
                        hover:bg-red-100
                        transition
                      "
                    >
                      <FaHeart />
                    </button>

                    {/* Add to cart */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="
                        h-10 w-10
                        rounded-xl
                        bg-[#53B175]
                        text-white
                        flex items-center justify-center
                        hover:opacity-90
                        transition
                      "
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
