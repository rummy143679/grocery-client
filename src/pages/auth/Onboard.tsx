import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/onboard.jpg";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-end justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-md px-8 pb-12 text-center">
        {/* Title */}
        <h1 className="text-white text-4xl leading-tight font-semibold">
          Welcome <br />
          to our store
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-sm mt-4">
          Get your groceries in as fast as one hour
        </p>

        {/* CTA */}
        <button
          onClick={handleGetStarted}
          className="w-full mt-8 bg-[#53B175] text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
