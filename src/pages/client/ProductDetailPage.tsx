import { FaStar } from "react-icons/fa";
import { useState } from "react";
import DividerItem from "../../components/client/DividerItem";
import TitleItem from "../../components/client/TitleItem";
import CommentItem from "../../components/client/CommentItem";
import Pagination from "../../components/client/Pagination";
import RecommenderSection from "../../components/client/RecommenderSection";

export default function ProductDetailPage() {
  const images = [
    "https://vietmartjp.com/wp-content/uploads/2022/11/sup-lo-vietmart-sieu-thi-do-viet-tai-nhat.jpg",
    "https://orfarm.com.vn/images/products/2020/07/14/original/bapcaithao-2-2_1594715914.jpg",
    "https://dalatfarm.net/wp-content/uploads/2022/03/bong-cai-xanh.jpg",
    "https://dalatfarm.net/wp-content/uploads/2022/03/bong-cai-xanh-da-lat.jpg",
    "https://vn-test-11.slatic.net/p/2b1c82488652b0838e501facccecefa1.jpg",
  ];

  const optionsRate = [
    "Tất cả",
    "5 sao (700)",
    "4 sao (400)",
    "3 sao (80)",
    "2 sao (10)",
    "1 sao (10)",
  ];

  const comments = [
    {
      avt: "",
      email: "tuan@gmail.com",
      comment: "Very good",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
    },
    {
      avt: "",
      email: "thuy@gmail.com",
      comment:
        "NiceLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
    },
    {
      avt: "",
      email: "dong@gmail.com",
      comment: "Very good",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
    },
    {
      avt: "",
      email: "vu@gmail.com",
      comment: "NIce",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
    },
    {
      avt: "",
      email: "tuan@gmail.com",
      comment: "Cool",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
    },
  ];
  // const comments = [];

  const [isActive, setIsActive] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full h-full flex flex-col items-center space-y-5 bg-backgroundColor pb-5">
      <div className="w-[1200px] grid grid-cols-12 gap-3 mt-[20px] bg-white rounded">
        <div className="w-full col-span-5 p-3">
          <img
            src={images[0]}
            alt="product-images"
            className="w-[469px] h-[469px] border border-secondColor"
          />
          <div className="w-full flex justify-between mt-3">
            {images.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt=""
                  className="w-[85px] h-[85px] border border-secondColor"
                />
              );
            })}
          </div>
        </div>
        <div className="w-full col-span-7 p-3 space-y-5">
          <div className="space-y-2">
            <h1 className="text-xl text-primaryColor font-medium">
              Súp lơ xanh
            </h1>
            <div className="flex items-center space-x-5">
              <p className="text-textGray text-base line-through">20000 đ</p>
              <p className="text-3xl text-priceColor font-medium">14000 đ</p>
              <span className="text-sm text-primaryColor px-2 py-0.5 bg-secondColor rounded">
                -30%
              </span>
            </div>
            <span className="text-sm">1,2k đã bán</span>
          </div>
          <DividerItem />
          <div className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-base font-medium">Mô tả</h2>
              <p className="text-base">
                Súp lơ xanh (hay bông cải xanh, cải bông xanh) là loại cây thuộc
                loài Cải bắp dại có nguồn gốc từ vùng Địa Trung Hải. Tuy được
                tìm thấy vào thời La Mã nhưng phải đến năm 1920, các nông dân ở
                Hoa Kỳ mới bắt đầu trồng cây rau này. Về đặc điểm, loại cây này
                có thân nhỏ mọc thẳng, cao khoảng 30cm. Lá cây hình bầu dục, có
                phần mép uốn lượn, gân nổi rõ trên mặt xếp thành từng tầng xung
                quanh. Trên đầu là bông cải với hình dạng một đóa hoa lớn, có
                nhiều cành nhỏ dính sát.
              </p>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-base font-medium">Số lượng</h2>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="w-8 h-8 border border-borderColor rounded-l"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  className="w-12 h-8 border-y border-borderColor outline-none text-center"
                />
                <button
                  onClick={() => {
                    if (quantity < 10) {
                      setQuantity(quantity + 1);
                    }
                  }}
                  className="w-8 h-8 border border-borderColor rounded-r"
                >
                  +
                </button>
              </div>
            </div>
            <div className="space-x-5">
              <button className="w-[200px] h-[50px] bg-secondColor rounded border border-primaryColor text-primaryColor">
                Thêm vào giỏ hàng
              </button>
              <button className="w-[200px] h-[50px] bg-primaryColor rounded text-white">
                Mua ngay
              </button>
            </div>
          </div>
          <DividerItem />
          <div className="space-y-1.5">
            <h2 className="text-base font-medium">Nhà cung cấp</h2>
            <p>TFarm</p>
          </div>
        </div>
      </div>
      <div className="w-[1200px] bg-white rounded px-3">
        <div className="space-y-4 py-3">
          <TitleItem title="Đánh giá sản phẩm" />
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <p className="text-3xl font-medium">
                9.8/
                <span className="text-lg font-medium">5</span>
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-[#FFCD3B] text-xl" />
                  <FaStar className="text-[#FFCD3B] text-xl" />
                  <FaStar className="text-[#FFCD3B] text-xl" />
                  <FaStar className="text-[#FFCD3B] text-xl" />
                  <FaStar className="text-[#FFCD3B] text-xl" />
                </div>
                <p className="text-sm text-textGray">
                  {comments.length} đánh giá
                </p>
              </div>
            </div>
            <div className="space-x-1.5">
              {optionsRate.map((item, index) => {
                return (
                  <button
                    onClick={() => setIsActive(index)}
                    className={`w-[100px] h-[32px] rounded ${
                      isActive == index
                        ? "bg-primaryColor text-white"
                        : "bg-secondColor text-primaryColor"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {comments.length ? (
          <>
            <div className="space-y-1">
              {comments.map((item, index) => {
                return <CommentItem key={index} item={item} />;
              })}
            </div>
            <div className="px-1 py-3 flex justify-center">
              <Pagination />
            </div>
          </>
        ) : (
          <div className="h-[200px] flex items-center justify-center">
            <div>
              <p>Chưa có đánh giá nào</p>
            </div>
          </div>
        )}
      </div>
      <RecommenderSection title="Có thể bạn cũng thích" />
    </div>
  );
}
