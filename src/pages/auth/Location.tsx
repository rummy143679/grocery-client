import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const Location = () => {
  const navigate = useNavigate();

  const [zone, setZone] = useState<string>("");
  const [area, setArea] = useState<string>("");

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="h-screen overflow-hidden bg-white flex justify-center">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl px-6 py-6 flex flex-col h-full">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="w-fit">
          <IoChevronBack className="text-2xl text-[#181725]" />
        </button>

        {/* Top Section */}
        <div className="flex flex-col items-center mt-4">
          <MdLocationOn
            className="
              text-[#53B175]
              text-[90px]
              sm:text-[110px]
              md:text-[130px]
            "
          />

          <h1 className="mt-4 text-center text-[24px] md:text-[28px] font-semibold text-[#181725]">
            Select Your Location
          </h1>

          <p className="mt-2 text-center text-gray-400 text-sm leading-5 max-w-xs">
            Switch on your location to stay in tune with
            <br />
            what's happening in your area
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-6">
          {/* Zone */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Zone
            </label>

            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="
                w-full
                border-b
                border-gray-300
                pb-3
                outline-none
                bg-transparent
                text-[#181725]
              "
            >
              <option value="">Select Zone</option>
              <option value="Banjara Hills">Banjara Hills</option>
              <option value="Madhapur">Madhapur</option>
              <option value="Gachibowli">Gachibowli</option>
              <option value="Kukatpally">Kukatpally</option>
            </select>
          </div>

          {/* Area */}
          <div className="mt-5">
            <label className="block text-sm text-gray-400 mb-2">
              Your Area
            </label>

            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="
                w-full
                border-b
                border-gray-300
                pb-3
                outline-none
                bg-transparent
                text-[#181725]
              "
            >
              <option value="">Select Area</option>
              <option value="Area 1">Area 1</option>
              <option value="Area 2">Area 2</option>
              <option value="Area 3">Area 3</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-auto pb-4">
          <button
            onClick={handleSubmit}
            className="
              w-full
              bg-[#53B175]
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition
              hover:opacity-90
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
