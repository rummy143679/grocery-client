import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoEyeOutline,
  IoEyeOffOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
} from "react-icons/io5";
import signupImage from "../../assets/images/login-image.png";
import { useAuthStore } from "../../store/authStore";

const Signup = () => {
  const register = useAuthStore((state) => state.register);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    contact: "",
  });

  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  function handleInputs(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    // extra safety validation
    if (
      !formData.userName.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !isValidEmail(formData.email)
    ) {
      alert("Please fill all fields correctly");
      return;
    }

    const success = register({
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
      contact: formData.contact,
    });

    if (success) {
      navigate("/login");
    }
  }

  return (
    <div className="h-screen bg-white flex justify-center">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-full flex flex-col">
        {/* Image */}
        <div className="h-[30%] w-full">
          <img
            src={signupImage}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="h-[70%] px-6 sm:px-8 py-4 flex flex-col">
          <h1 className="text-3xl font-semibold text-[#181725]">Sign Up</h1>

          <p className="mt-2 text-sm text-gray-400">
            Enter your credentials to continue
          </p>

          {/* Username */}
          <div className="mt-5">
            <label className="block text-sm text-gray-400 mb-2">Username</label>

            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputs}
              className="w-full border-b border-gray-300 pb-3 outline-none"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="block text-sm text-gray-400 mb-2">Email</label>

            <div className="flex items-center border-b border-gray-300 pb-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputs}
                className="flex-1 outline-none"
              />

              {formData.email.length > 0 &&
                (isValidEmail(formData.email) ? (
                  <IoCheckmarkCircle size={22} className="text-green-500" />
                ) : (
                  <IoCloseCircle size={22} className="text-red-500" />
                ))}
            </div>
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="block text-sm text-gray-400 mb-2">Password</label>

            <div className="flex items-center border-b border-gray-300 pb-3">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputs}
                className="flex-1 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOffOutline size={22} />
                ) : (
                  <IoEyeOutline size={22} />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <p className="mt-5 text-xs text-gray-500 leading-5">
            By continuing you agree to our Terms of Service and Privacy Policy
          </p>

          {/* Button */}
          <button
            disabled={
              !formData.userName.trim() ||
              !formData.password.trim() ||
              !isValidEmail(formData.email)
            }
            className="w-full mt-6 py-4 rounded-2xl font-semibold text-white bg-[#53B175] disabled:bg-gray-300"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          {/* Login */}
          <div className="mt-auto pb-4 text-center">
            <p className="text-sm text-[#181725]">
              Already have an Account?{" "}
              <Link to="/login" className="text-[#53B175] font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
