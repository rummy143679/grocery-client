import {
  FaStore,
  FaCompass,
  FaShoppingCart,
  FaHeart,
  FaUser,
} from "react-icons/fa";

export const navItems = [
  {
    label: "Shop",
    path: "/home",
    icon: FaStore,
  },
  {
    label: "Explore",
    path: "/explore",
    icon: FaCompass,
  },
  {
    label: "Cart",
    path: "/cart",
    icon: FaShoppingCart,
  },
  {
    label: "Favorite",
    path: "/favorites",
    icon: FaHeart,
  },
  {
    label: "Account",
    path: "/account",
    icon: FaUser,
  },
];
