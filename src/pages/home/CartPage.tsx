import { useMemo, useState } from "react";
import { FaArrowLeft, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useOrderStore } from "../../store/orderStore";
import { useCartStore } from "../../store/cartStore";
import CheckoutModal from "./CheckoutModal";

const CartPage = () => {
  const navigate = useNavigate();

  const placeOrder = useOrderStore((state) => state.placeOrder);

  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [showCheckout, setShowCheckout] = useState(false);

  // ✅ memoized calculations (prevents recalculation on every render)
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [cartItems]);

  const deliveryFee = cartItems.length > 0 ? 40 : 0;

  const total = useMemo(() => {
    return subtotal + deliveryFee;
  }, [subtotal, deliveryFee]);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    setShowCheckout(true);
  };

  const handlePlaceOrder = () => {
    const orderId = placeOrder(cartItems, total);

    clearCart();
    setShowCheckout(false);

    const success = Math.random() > 0.2;

    if (success) {
      navigate(`/order-success/${orderId}`);
    } else {
      navigate(`/order-failed/${orderId}`);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FCFCFC] flex flex-col items-center justify-center px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-40 h-40 object-contain"
        />
        <h2 className="mt-6 text-2xl font-bold text-[#181725]">
          Your Cart is Empty
        </h2>
        <p className="mt-2 text-gray-500 text-center">
          Looks like you haven't added anything yet.
        </p>

        <button
          onClick={() => navigate("/home")}
          className="mt-6 bg-[#53B175] text-white px-8 py-3 rounded-xl font-medium"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFCFC] pb-32 md:pb-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white border-b">
          <div className="flex items-center gap-4 px-4 py-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FaArrowLeft />
            </button>

            <h1 className="text-xl font-bold text-[#181725]">My Cart</h1>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white mt-4 rounded-2xl p-4 mx-4 shadow-sm">
          <p className="text-sm text-gray-500">Deliver To</p>
          <h3 className="font-semibold mt-1">Home • Hyderabad</h3>
          <p className="text-sm text-gray-500 mt-1">
            Hitech City, Hyderabad, Telangana
          </p>
        </div>

        {/* Cart Items */}
        <div className="mx-4 mt-4 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.name}</h3>

                  <button onClick={() => removeFromCart(item.id)}>
                    <FaTrash className="text-red-500" />
                  </button>
                </div>

                <p className="mt-2 text-[#53B175] font-bold">₹{item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="h-8 w-8 rounded-lg border flex items-center justify-center"
                  >
                    <FaMinus size={12} />
                  </button>

                  <span className="font-medium">{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="h-8 w-8 rounded-lg bg-[#53B175] text-white flex items-center justify-center"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo */}
        <div className="mx-4 mt-6">
          <div className="bg-white rounded-2xl p-4 flex gap-3">
            <input
              type="text"
              placeholder="Enter Promo Code"
              className="flex-1 bg-gray-100 px-4 py-3 rounded-xl outline-none"
            />

            <button className="px-5 bg-[#53B175] text-white rounded-xl">
              Apply
            </button>
          </div>
        </div>

        {/* Bill */}
        <div className="bg-white rounded-2xl p-5 mt-6 mx-4 shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Bill Details</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block px-4 mt-6">
          <button
            onClick={handleCheckout}
            className="w-full h-14 rounded-2xl bg-[#53B175] text-white font-semibold text-lg"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden fixed bottom-16 left-0 right-0 bg-white border-t p-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total</p>
            <h3 className="font-bold text-lg">₹{total}</h3>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-[#53B175] text-white px-8 py-3 rounded-xl font-medium"
          >
            Checkout
          </button>
        </div>
      </div>

      {showCheckout && (
        <CheckoutModal
          total={total}
          onClose={() => setShowCheckout(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
};

export default CartPage;
