import {
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaMapMarkerAlt,
  FaBell,
  FaCreditCard,
  FaQuestionCircle,
  FaInfoCircle,
  FaChevronRight,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const ProfilePage = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const menuItems = [
    {
      title: "My Orders",
      icon: <FaShoppingBag />,
      path: "/orders",
    },
    {
      title: "Favourite Products",
      icon: <FaHeart />,
      path: "/favorites",
    },
    {
      title: "Delivery Address",
      icon: <FaMapMarkerAlt />,
      path: "/addresses",
    },
    {
      title: "Notifications",
      icon: <FaBell />,
      path: "/notifications",
    },
    {
      title: "Payment Methods",
      icon: <FaCreditCard />,
      path: "/payments",
    },
    {
      title: "Help Center",
      icon: <FaQuestionCircle />,
      path: "/help",
    },
    {
      title: "About App",
      icon: <FaInfoCircle />,
      path: "/about",
    },
  ];

  const handleLogout = () => {
    const success = logout();
    if (success) {
      navigate("/welcome");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div
              className="
                h-20
                w-20
                rounded-full
                bg-[#53B175]
                text-white
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              <FaUser />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-xl font-bold text-[#181725]">
                Ramesh Matteda
              </h1>

              <p className="text-gray-500">ramesh@gmail.com</p>

              <button
                className="
                  mt-2
                  text-[#53B175]
                  text-sm
                  font-medium
                "
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div
          className="
            grid
            grid-cols-3
            gap-4
          "
        >
          <div className="bg-white rounded-2xl p-4 text-center">
            <h3 className="text-xl font-bold text-[#53B175]">12</h3>
            <p className="text-sm text-gray-500">Orders</p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center">
            <h3 className="text-xl font-bold text-[#53B175]">8</h3>
            <p className="text-sm text-gray-500">Favourites</p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center">
            <h3 className="text-xl font-bold text-[#53B175]">3</h3>
            <p className="text-sm text-gray-500">Addresses</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="bg-white rounded-2xl overflow-hidden">
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className="
                w-full
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                last:border-b-0
                hover:bg-gray-50
                transition
              "
            >
              <div className="flex items-center gap-4">
                <div className="text-[#53B175] text-lg">{item.icon}</div>

                <span className="font-medium text-[#181725]">{item.title}</span>
              </div>

              <FaChevronRight className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <button
          className="
            w-full
            bg-red-50
            text-red-500
            rounded-2xl
            py-4
            flex
            items-center
            justify-center
            gap-3
            font-semibold
            hover:bg-red-100
            transition
          "
          onClick={() => handleLogout()}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* App Version */}
      <div className="text-center mt-8 text-sm text-gray-400">
        Grocery App v1.0.0
      </div>
    </div>
  );
};

export default ProfilePage;
