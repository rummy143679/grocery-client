import { Routes, Route } from "react-router-dom";

import Splash from "../pages/auth/Splash";
import Onboarding from "../pages/auth/Onboard";
import Signin from "../pages/auth/Signin";
import MobileNumber from "../pages/auth/MobileNumber";
import Verification from "../pages/auth/Verification";
import Location from "../pages/auth/Location";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Home from "../pages/home/Home";
import ProductDetails from "../components/common/ProductDetails";
import Explore from "../pages/home/Explore";
import ProductsPage from "../pages/home/ProductPage";
import CartPage from "../pages/home/CartPage";
import FavoritesPage from "../pages/home/FavoritesPage";
import ProfilePage from "../pages/home/ProfilePage";
import OrderSuccess from "../pages/checkout/OrderSuccess";
import OrderFailed from "../pages/checkout/OrderFailed";

import AppLayout from "../components/layout/AppLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Onboarding />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/mobile-number" element={<MobileNumber />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/location" element={<Location />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 🔒 Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:category" element={<ProductsPage />} />
          <Route path="/explore/search/:query" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/order-success/:orderId" element={<OrderSuccess />} />
          <Route path="/order-failed/:orderId" element={<OrderFailed />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
