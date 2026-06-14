import { IoLocationSharp } from "react-icons/io5";
import { FaCarrot } from "react-icons/fa";

const Header = () => {
  return (
    <header className="pt-6">
      {/* Logo */}
      <div className="flex justify-center">
        <FaCarrot
          className="text-[#53B175] text-4xl sm:text-5xl"
          aria-label="App logo"
        />
      </div>

      {/* Location */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <IoLocationSharp
          className="text-[#4C4F4D] text-lg"
          aria-hidden="true"
        />

        <span className="text-[#181725] font-medium text-base sm:text-lg">
          Dhaka, Banassre
        </span>
      </div>
    </header>
  );
};

export default Header;
