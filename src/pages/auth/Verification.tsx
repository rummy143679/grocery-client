import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack, IoArrowForward } from "react-icons/io5";

const Verification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleNext = () => {
    if (otp.length < 4) return;

    navigate("/location");
  };

  const handleResendOtp = () => {
    alert("OTP Resent");
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setOtp(value);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl px-6 py-6 flex flex-col">
        {/* Back */}
        <button onClick={() => navigate(-1)} className="w-fit">
          <IoChevronBack className="text-2xl text-[#181725]" />
        </button>

        {/* Heading */}
        <div className="mt-12">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-[#181725]">
            Enter your 4-digit code
          </h1>
        </div>

        {/* OTP Input */}
        <div className="mt-10">
          <label className="block text-sm text-gray-400 mb-3">Code</label>

          <div className="border-b border-gray-300 pb-3">
            <input
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={otp}
              onChange={handleOtpChange}
              placeholder="- - - -"
              className="
                w-full
                outline-none
                text-xl
                tracking-[12px]
                text-[#181725]
                placeholder:text-gray-300
              "
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto flex items-center justify-between pb-6">
          <button
            onClick={handleResendOtp}
            className="
              text-[#53B175]
              font-medium
              text-sm
              px-3
              py-2
              rounded-lg
              border
              border-transparent
              hover:border-[#53B175]
              transition
            "
          >
            Resend Code
          </button>

          <button
            onClick={handleNext}
            disabled={otp.length < 4}
            className="
              w-16
              h-16
              rounded-full
              bg-[#53B175]
              flex
              items-center
              justify-center
              text-white
              shadow-lg
              hover:opacity-90
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            <IoArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
