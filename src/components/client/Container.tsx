import { Route, Routes } from "react-router";
import {
  HomePage,
  LoginPage,
  ProductDetailPage,
  CartPage,
  ProfilePage,
  OrderPage,
  AddressPage,
  ChangePassPage,
} from "../../pages/client";

export default function Container() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-order" element={<OrderPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/change-password" element={<ChangePassPage />} />
      </Routes>
    </div>
  );
}
