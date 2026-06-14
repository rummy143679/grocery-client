import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-[#53B175] flex items-center justify-center">
      <div className="text-center">
        <img
          src={logo}
          alt="Nectar logo"
          className="w-40 mx-auto"
          loading="eager"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Splash;
