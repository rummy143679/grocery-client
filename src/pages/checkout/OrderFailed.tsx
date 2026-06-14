import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const OrderFailed = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/cart");
  };

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] flex items-center justify-center px-6">
      <div className="w-full max-w-lg text-center">
        {/* Illustration */}
        <div className="relative flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="Order Failed"
            className="w-40 h-40 md:w-52 md:h-52 object-contain"
          />

          <FaExclamationCircle
            className="
              absolute
              bottom-2
              right-[32%]
              text-red-500
              bg-white
              rounded-full
              text-5xl
              md:text-6xl
            "
          />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#181725]">
            Oops! Order Failed
          </h1>

          <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
            Something went terribly wrong while placing your order. Please try
            again in a few moments.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-12 space-y-4">
          <button
            onClick={handleTryAgain}
            className="w-full h-14 rounded-2xl bg-[#53B175] text-white font-semibold text-lg transition hover:opacity-90"
          >
            Try Again
          </button>

          <button
            onClick={handleGoHome}
            className="w-full h-14 rounded-2xl border border-gray-300 bg-white text-[#181725] font-semibold text-lg transition hover:bg-gray-50"
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFailed;
