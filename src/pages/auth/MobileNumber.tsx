import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack, IoArrowForward } from "react-icons/io5";
import { useAuthStore } from "../../store/authStore";

const MobileNumber = () => {
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState<string>("+91");
  const [mobile, setMobile] = useState<string>("");

  const updateContact = useAuthStore((state) => state.updateContact);

  const handleNext = () => {
    if (!mobile.trim()) return;

    const fullNumber = `${countryCode} ${mobile}`;

    const success = updateContact(fullNumber);

    if (success) {
      navigate("/verification");
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl px-6 py-6 flex flex-col">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="w-fit">
          <IoChevronBack className="text-2xl text-[#181725]" />
        </button>

        {/* Heading */}
        <div className="mt-12">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-[#181725]">
            Enter your mobile number
          </h1>
        </div>

        {/* Input Section */}
        <div className="mt-10">
          <label className="block text-sm text-gray-400 mb-3">
            Mobile Number
          </label>

          <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
            {/* Flag */}
            <span className="text-xl">🇮🇳</span>

            {/* Country Code */}
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="outline-none bg-transparent text-[#181725]"
            >
              <option value="+91">+91</option>
              <option value="+880">+880</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>

            {/* Mobile Input */}
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
              className="
                flex-1
                outline-none
                text-[#181725]
                placeholder:text-gray-400
              "
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-auto flex justify-end pb-6">
          <button
            onClick={handleNext}
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
            "
          >
            <IoArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNumber;
