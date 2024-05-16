import { FaUser } from "react-icons/fa";
import { RiMapPinFill, RiLockFill } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function NavbarProfile() {
  return (
    <div className="col-span-2 p-2 space-y-2">
      <div className="flex flex-1 items-center space-x-3">
        <img
          src={
            "https://bookingagentinfo.com/wp-content/uploads/2024/02/ab6761610000e5eb006ff3c0136a71bfb9928d34.jpg"
          }
          alt="avt"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col overflow-hidden">
          <p className="font-medium">Username</p>
          <p className="text-sm text-textGray line-clamp-1">tuan@gmail.com</p>
        </div>
      </div>
      <div>
        <Link to="/profile" className="flex items-center space-x-3 py-2">
          <FaUser size={16} />
          <p>Thông tin tài khoản</p>
        </Link>
        <Link to="/my-order" className="flex items-center space-x-3 py-2">
          <CgMenuBoxed size={16} />
          <p>Đơn hàng</p>
        </Link>
        <Link to="/address" className="flex items-center space-x-3 py-2">
          <RiMapPinFill size={16} />
          <p>Địa chỉ</p>
        </Link>
        <Link
          to="/change-password"
          className="flex items-center space-x-3 py-2"
        >
          <RiLockFill size={16} />
          <p>Đổi mật khẩu</p>
        </Link>
      </div>
    </div>
  );
}
