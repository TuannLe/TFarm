import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

export default function Header() {
  return (
    <div className="w-full h-[120px] bg-primaryColor flex justify-center z-20 fixed">
      <div className="w-[1200px] h-full flex items-center justify-between">
        <img src={Logo} className="w-[90px] h-[90px]" />
        <div className="flex w-[800px] h-[40px] bg-white p-1 rounded">
          <input
            type="text"
            className="flex-1 outline-none px-2"
            placeholder="Tìm kiếm..."
          />
          <button className="py-1.5 px-6 rounded bg-primaryColor">
            <IoSearchSharp className="text-xl text-white" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="profile" className="flex items-center space-x-2">
            <FaRegUser className="text-xl text-white" />
            <p className="text-base text-white">Tài khoản</p>
          </Link>
          <div className="w-[1px] h-5 bg-slate-300"></div>
          <Link to="cart">
            <LuShoppingCart className="text-xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
