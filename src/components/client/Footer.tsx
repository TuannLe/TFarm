import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const optionsIntroduce = [
    "Giới thiệu",
    "Tuyển dụng",
    "Điều khoản",
    "Chính sách bảo mật",
  ];
  const categories = ["Rau xanh", "Trái cây", "Củ quả", "Các loại hạt"];

  return (
    <div className="w-full flex justify-center bg-white py-5 border-t-[3px] border-primaryColor">
      <div className="w-[1200px] grid grid-cols-4 gap-5">
        <div className="space-y-3">
          <h1 className="font-medium">THÔNG TIN LIÊN HỆ</h1>
          <div className="space-y-1">
            <div className="space-x-1 text-textGray">
              <span>Địa chỉ:</span>
              <span>87 Nguyễn Đình Hiến, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</span>
            </div>
            <div className="space-x-1 text-textGray">
              <span>Email:</span>
              <span>ldatuan.20it7@vku.udn.vn</span>
            </div>
            <div className="space-x-1 text-textGray">
              <span>Hotline:</span>
              <span>1234567890</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="font-medium">THÔNG TIN LIÊN HỆ</h1>
          <div className="flex flex-col space-y-1 items-start">
            {optionsIntroduce.map((item, index) => {
              return (
                <button key={index} className="text-textGray">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="font-medium">DANH MỤC</h1>
          <div className="flex flex-col space-y-1 items-start">
            {categories.map((item, index) => {
              return (
                <button key={index} className="text-textGray">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="font-medium">THEO DÕI CHÚNG TÔI</h1>
          <div className="space-y-1">
            <button className="flex items-center space-x-1 text-textGray">
              <FaFacebook className="text-lg" />
              <span>Facebook</span>
            </button>
            <button className="flex items-center space-x-1 text-textGray">
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </button>
            <button className="flex items-center space-x-1 text-textGray">
              <FaTiktok className="text-lg" />
              <span>Tiktok</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
