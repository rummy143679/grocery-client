import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

interface Props {
  total: number;
  onClose: () => void;
  onPlaceOrder: (deliveryMethod: string, paymentMethod: string) => void;
}

const CheckoutModal = ({ total, onClose, onPlaceOrder }: Props) => {
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  const [paymentOpen, setPaymentOpen] = useState(false);

  const [deliveryMethod, setDeliveryMethod] = useState("Home Delivery");

  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  return (
    <>
      <div
        className="
        fixed inset-0
        bg-black/40
        z-50
      "
        onClick={onClose}
      />

      <div
        className="
        fixed
        bottom-15
        left-0
        right-0
        md:left-1/2
        md:-translate-x-1/2
        md:bottom-auto
        md:top-1/2
        md:-translate-y-1/2
        bg-white
        z-50
        rounded-t-3xl
        md:rounded-3xl
        w-full
        md:max-w-lg
        p-6
      "
      >
        {/* Header */}

        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">Checkout</h2>

          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Delivery */}

        <div className="mt-6 border-b pb-4">
          <button
            className="w-full flex justify-between"
            onClick={() => setDeliveryOpen(!deliveryOpen)}
          >
            <span>Delivery</span>

            {deliveryOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          <p className="text-sm text-gray-500 mt-1">{deliveryMethod}</p>

          {deliveryOpen && (
            <div className="mt-3 space-y-2">
              {["Home Delivery", "Express Delivery", "Store Pickup"].map(
                (method) => (
                  <label key={method} className="flex gap-2">
                    <input
                      type="radio"
                      checked={deliveryMethod === method}
                      onChange={() => setDeliveryMethod(method)}
                    />

                    {method}
                  </label>
                ),
              )}
            </div>
          )}
        </div>

        {/* Payment */}

        <div className="mt-4 border-b pb-4">
          <button
            className="w-full flex justify-between"
            onClick={() => setPaymentOpen(!paymentOpen)}
          >
            <span>Payment</span>

            {paymentOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          <p className="text-sm text-gray-500 mt-1">{paymentMethod}</p>

          {paymentOpen && (
            <div className="mt-3 space-y-2">
              {["Cash On Delivery", "UPI", "Credit Card", "Debit Card"].map(
                (method) => (
                  <label key={method} className="flex gap-2">
                    <input
                      type="radio"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />

                    {method}
                  </label>
                ),
              )}
            </div>
          )}
        </div>

        {/* Total */}

        <div className="flex justify-between mt-6">
          <span className="font-medium">Total Cost</span>

          <span className="font-bold">₹{total}</span>
        </div>

        {/* Terms */}

        <p className="text-xs text-gray-500 mt-5 leading-5">
          By placing an order you agree to our{" "}
          <span className="font-semibold text-black">Terms</span> and{" "}
          <span className="font-semibold text-black">Conditions</span>.
        </p>

        {/* Place Order */}

        <button
          onClick={() => onPlaceOrder(deliveryMethod, paymentMethod)}
          className="
            w-full
            mt-6
            h-14
            bg-[#53B175]
            text-white
            rounded-2xl
            font-semibold
          "
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default CheckoutModal;
