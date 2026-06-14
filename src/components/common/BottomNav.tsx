import { NavLink } from "react-router-dom";
import { navItems } from "../../data/navItems";

type NavItem = {
  path: string;
  label: string;
  icon: React.ElementType;
};

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md md:hidden">
      <div className="flex justify-between items-center px-2 py-2">
        {navItems.map((item: NavItem) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center w-full transition ${
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
      </div>
    </nav>
  );
};

export default BottomNav;
