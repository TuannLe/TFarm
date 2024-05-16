import { FaStar } from "react-icons/fa";

export default function CommentItem({ item }: any) {
  return (
    <div className="flex space-x-2 py-3 border-b border-secondColor">
      <img
        src={
          "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg"
        }
        alt="avt"
        className="w-10 h-10 rounded-full border border-secondColor"
      />
      <div className="flex w-full justify-between space-x-2">
        <div className="space-y-3 flex-1">
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              <FaStar className="text-[#FFCD3B] text-base" />
              <FaStar className="text-[#FFCD3B] text-base" />
              <FaStar className="text-[#FFCD3B] text-base" />
              <FaStar className="text-[#FFCD3B] text-base" />
              <FaStar className="text-[#FFCD3B] text-base" />
            </div>
            <p className="text-sm text-textGray">{item.email}</p>
          </div>
          <p className="flex-1">{item.comment}</p>
          <img
            src={item.image}
            alt="Product image"
            className="w-[80px] h-[80px]"
          />
        </div>
        <p className="text-sm text-textGray">2024-02-03 10.30</p>
      </div>
    </div>
  );
}
