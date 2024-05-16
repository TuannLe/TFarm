import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination() {
  return (
    <div className="flex items-center space-x-2">
      <button className="w-[38px] py-3 bg-white rounded flex items-center justify-center">
        <IoIosArrowBack className="text-[#D1D5DB] text-base" />
      </button>
      <button className="px-4 py-2 bg-primaryColor hover:bg-[#14A376] rounded text-white font-medium">
        1
      </button>
      <button className="px-4 py-2 bg-white hover:bg-[#E6FBD6] rounded text-primaryColor font-medium">
        2
      </button>
      <button className="px-4 py-2 bg-white hover:bg-[#E6FBD6] rounded text-primaryColor font-medium">
        3
      </button>
      <button className="w-[38px] py-3 bg-white rounded flex items-center justify-center hover:bg-[#E6FBD6]">
        <IoIosArrowForward className="text-textGray text-base" />
      </button>
    </div>
  );
}
