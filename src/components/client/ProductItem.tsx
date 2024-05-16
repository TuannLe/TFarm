import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductItem({ item }: any) {
  return (
    <Link
      to="/product-detail"
      className="w-full h-full bg-white shadow-md shadow-[#D1D5DB] rounded overflow-hidden"
    >
      <img
        src={item.image}
        alt="product image"
        className="w-[190px] h-[190px]"
      />
      <div className="p-2 space-y-3">
        <p className="text-lg text-primaryColor font-medium">{item.name}</p>
        <div className="space-y-1">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-textGray line-through">{item.price}</p>
            <p className="text-xl text-[#FF0303] font-medium">{item.price}</p>
          </div>
          <div className="flex items-center space-x-[2px] flex-end justify-end">
            <FaStar className="text-[#FFCD3B] text-sm" />
            <FaStar className="text-[#FFCD3B] text-sm" />
            <FaStar className="text-[#FFCD3B] text-sm" />
            <FaStar className="text-[#FFCD3B] text-sm" />
            <FaStar className="text-[#FFCD3B] text-sm" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-textGray text-sm">{item.supplier}</p>
            <p className="text-textGray text-sm">{item.sell} đã bán</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
