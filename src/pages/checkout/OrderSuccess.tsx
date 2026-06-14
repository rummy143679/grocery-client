import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const handleTrackOrder = () => {
    if (!orderId) return;
    navigate(`/track-order/${orderId}`);
  };

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] flex items-center justify-center px-6">
      <div className="w-full max-w-lg text-center">
        {/* Illustration */}
        <div className="relative flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
            alt="Celebration"
            className="w-40 h-40 md:w-52 md:h-52 object-contain animate-bounce"
          />

          <FaCheckCircle
            className="
              absolute
              bottom-2
              right-[32%]
              text-[#53B175]
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
            Your Order Has Been Accepted
          </h1>

          <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
            Your items have been placed and are on their way to being processed.
          </p>

          {orderId && (
            <div className="mt-5 inline-flex px-4 py-2 rounded-full bg-green-50 text-[#53B175] font-semibold">
              Order #{orderId}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-12 space-y-4">
          <button
            onClick={handleTrackOrder}
            disabled={!orderId}
            className="w-full h-14 rounded-2xl bg-[#53B175] text-white font-semibold text-lg transition hover:opacity-90 disabled:opacity-50"
          >
            Track Order
          </button>

          <button
            onClick={handleHome}
            className="w-full h-14 rounded-2xl border border-gray-300 text-[#181725] font-semibold text-lg bg-white transition hover:bg-gray-50"
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
