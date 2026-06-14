import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
  FaMinus,
  FaPlus,
  FaChevronRight,
  FaChevronDown,
  FaStar,
} from "react-icons/fa";
import { useProductStore } from "../../store/productStore";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const products = useProductStore((state) => state.products);

  const product = useMemo(
    () => products.find((item) => item.id === Number(id)),
    [products, id],
  );

  const [quantity, setQuantity] = useState<number>(1);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const [showDetails, setShowDetails] = useState(true);
  const [showNutrition, setShowNutrition] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product Not Found
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-[#FCFCFC] pb-28 lg:pb-10">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="text-xl">
            <FaArrowLeft />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[500px_1fr] lg:gap-12">
        {/* IMAGE */}
        <div>
          <div className="bg-[#F2F3F2] rounded-b-[40px] flex items-center justify-center h-[320px] sm:h-[400px] lg:h-[550px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="px-5 lg:px-0 py-6">
          {/* Name + Favourite */}
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-[#181725]">
                {product.name}
              </h1>

              <p className="text-gray-500 mt-2">1kg, Price</p>
            </div>

            <button
              onClick={() => setIsFavourite((prev) => !prev)}
              className="text-xl"
              aria-label="Toggle favorite"
            >
              {isFavourite ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-400" />
              )}
            </button>
          </div>

          {/* Rating */}
          <div className="mt-5">
            <div className="inline-flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-full">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">{product.rating ?? "0.0"}</span>
              <span className="text-gray-500">(287 Reviews)</span>
            </div>
          </div>

          {/* Stock */}
          <div className="mt-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              In Stock
            </span>
          </div>

          {/* Delivery */}
          <div className="mt-4 text-sm text-gray-600">
            🚚 Delivery in 10-15 mins
          </div>

          {/* Quantity */}
          <div className="flex justify-between items-center py-8 mt-4">
            <div className="flex items-center gap-5">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="text-xl text-gray-400"
              >
                <FaMinus />
              </button>

              <div className="h-12 w-12 rounded-xl border flex items-center justify-center font-semibold">
                {quantity}
              </div>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-xl text-[#53B175]"
              >
                <FaPlus />
              </button>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold">
              ₹{totalPrice.toFixed(2)}
            </h2>
          </div>

          {/* Product Details */}
          <div>
            <button
              onClick={() => setShowDetails((prev) => !prev)}
              className="w-full py-5 flex justify-between items-center"
            >
              <span className="font-semibold">Product Details</span>
              {showDetails ? <FaChevronDown /> : <FaChevronRight />}
            </button>

            {showDetails && (
              <p className="pb-5 text-gray-500 leading-7">
                {product.description}
                <br />
                <br />
                Freshly sourced and delivered directly to your doorstep.
                Carefully selected for quality and freshness.
              </p>
            )}
          </div>

          {/* Nutrition */}
          <div>
            <button
              onClick={() => setShowNutrition((prev) => !prev)}
              className="w-full py-5 flex justify-between items-center"
            >
              <span className="font-semibold">Nutrition</span>
              {showNutrition ? <FaChevronDown /> : <FaChevronRight />}
            </button>

            {showNutrition && (
              <div className="pb-5 text-gray-500">
                Calories: 89 kcal
                <br />
                Carbs: 22.8g
                <br />
                Protein: 1.1g
                <br />
                Fiber: 2.6g
              </div>
            )}
          </div>

          {/* Reviews */}
          <div>
            <button
              onClick={() => setShowReviews((prev) => !prev)}
              className="w-full py-5 flex justify-between items-center"
            >
              <span className="font-semibold">Reviews</span>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">287</span>
                {showReviews ? <FaChevronDown /> : <FaChevronRight />}
              </div>
            </button>

            {showReviews && (
              <div className="pb-5 space-y-4">
                <div className="bg-white p-4 rounded-xl border">
                  ⭐⭐⭐⭐⭐ Excellent quality.
                </div>

                <div className="bg-white p-4 rounded-xl border">
                  ⭐⭐⭐⭐⭐ Fresh and tasty.
                </div>

                <div className="bg-white p-4 rounded-xl border">
                  ⭐⭐⭐⭐ Good packaging.
                </div>
              </div>
            )}
          </div>

          {/* Desktop CTA */}
          <button className="hidden lg:block mt-8 w-full h-14 rounded-2xl bg-[#53B175] text-white font-semibold text-lg hover:opacity-90 transition">
            Add To Basket • ₹{totalPrice.toFixed(2)}
          </button>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white px-5 py-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <button className="w-full h-14 rounded-2xl bg-[#53B175] text-white font-semibold text-lg">
          Add To Basket • ₹{totalPrice.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
