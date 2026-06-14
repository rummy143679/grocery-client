import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaGlobe } from "react-icons/fa";
import topImage from "../../assets/images/signin.jpg";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Signup = () => {
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");

  const navigate = useNavigate();
  const updateContact = useAuthStore((state) => state.updateContact);

  const handleSubmit = () => {
    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    const fullContact = `${countryCode} ${phone}`;

    const success = updateContact(fullContact);

    if (success) {
      navigate("/verification");
    } else {
      alert("Failed to update contact");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-white flex justify-center">
      <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-full">
        {/* Top Image */}
        <img
          src={topImage}
          alt="Groceries"
          className="
            absolute
            -top-20
            -right-32
            w-[320px]
            sm:w-[380px]
            md:w-[420px]
            rotate-[245deg]
            object-cover
            pointer-events-none
            select-none
          "
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-8 pb-8">
          {/* Heading */}
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#181725] leading-tight">
            Get Your Groceries
            <br />
            with nectar
          </h1>

          {/* Phone Input */}
          <div className="mt-8">
            <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
              <FaGlobe className="text-gray-500 text-lg" />

              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="outline-none bg-transparent text-[#181725]"
              >
                <option>+91</option>
                <option>+880</option>
                <option>+1</option>
                <option>+44</option>
              </select>

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="
                  flex-1
                  outline-none
                  text-[#181725]
                  placeholder:text-gray-400
                "
              />
            </div>
          </div>

          {/* Social Text */}
          <p className="text-center text-sm text-gray-400 mt-8 mb-5">
            Or connect with social media
          </p>

          {/* Google */}
          <button className="w-full bg-[#5383EC] text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-medium hover:opacity-90 transition">
            <FaGoogle />
            Continue with Google
          </button>

          {/* Facebook */}
          <button className="w-full mt-4 bg-[#4A66AC] text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-medium hover:opacity-90 transition">
            <FaFacebookF />
            Continue with Facebook
          </button>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-[#53B175] text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
