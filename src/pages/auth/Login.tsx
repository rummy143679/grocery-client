import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import loginImage from "../../assets/images/login-image.png";
import { useAuthStore } from "../../store/authStore";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const currentUser = useAuthStore((state) => state.currentUser);

  const handleLogin = () => {
    // basic validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const success = login(email, password);
    console.log("uceess from login", success);
    if (success) {
      navigate("/signin");
    } else {
      alert("Login Failed");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen bg-white flex justify-center">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-full flex flex-col">
        {/* Image Section */}
        <div className="h-[35%] w-full">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="h-[65%] px-6 sm:px-8 flex flex-col">
          {/* Heading */}
          <h1 className="text-3xl font-semibold text-[#181725]">Login</h1>

          <p className="mt-2 text-sm text-gray-400">
            Enter your email and password
          </p>

          {/* Email */}
          <div className="mt-6">
            <label className="block text-sm text-gray-400 mb-2">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                w-full
                border-b
                border-gray-300
                pb-3
                outline-none
                text-[#181725]
                placeholder:text-gray-400
              "
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="block text-sm text-gray-400 mb-2">Password</label>

            <div className="flex items-center border-b border-gray-300 pb-3">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="
                  flex-1
                  outline-none
                  text-[#181725]
                  placeholder:text-gray-400
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500"
              >
                {showPassword ? (
                  <IoEyeOffOutline size={22} />
                ) : (
                  <IoEyeOutline size={22} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mt-4 flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-[#181725] hover:text-[#53B175]"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            className="
              w-full
              mt-6
              bg-[#53B175]
              text-white
              py-4
              rounded-2xl
              font-semibold
            "
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Signup */}
          <div className="mt-auto pb-4 text-center">
            <p className="text-sm text-[#181725]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#53B175] font-semibold">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
