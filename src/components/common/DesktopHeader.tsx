import { NavLink } from "react-router-dom";
import { navItems } from "../../data/navItems";
import logo from "../../assets/images/logo.png";

const DesktopHeader = () => {
  return (
    <header
      className="
        hidden md:block
        sticky top-0
        z-50
        border-b
        border-green-200
        shadow-sm
        bg-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <img className="w-12 h-12" src={logo} alt="App Logo" />

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center transition ${
                    isActive ? "text-green-600" : "text-gray-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`p-1 rounded-full transition ${
                        isActive ? "bg-green-100" : ""
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <span className="text-xs mt-1">{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;
