import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonItem from "../../components/client/ButtonItem";
import DropdownItem from "../../components/client/DropdownItem";
import Navbar from "../../components/client/Navbar";
import ProductItem from "../../components/client/ProductItem";

export default function HomePage() {
  const [selected, setSelected] = useState("Giá");
  const buttons = ["Tất cả", "Bán chạy", "Mới nhất"];
  const [btnSelected, setBtnSelected] = useState(0);
  const products = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image: "https://cdn.medigoapp.com/product/tao_tay_4_b2a1afe264.jpg",
      price: 30000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://product.hstatic.net/200000325223/product/sau_rieng_new-01_63392fbb5c3d449e913faebc332ae80f_master.png",
      price: 40000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 80000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 5000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
  ];

  return (
    <div className="w-full h-full bg-backgroundColor flex justify-center mb-5">
      <div className="w-[1200px] h-full grid grid-cols-12 gap-3 mt-[20px]">
        <Navbar />
        <div className="col-span-10 space-y-3">
          <div className="flex items-centers justify-between bg-[#EBEBEB] p-2 rounded">
            <div className="flex items-center space-x-4">
              <p>Sắp xếp theo</p>
              {buttons.map((item, index) => {
                return (
                  <ButtonItem
                    key={index}
                    index={index}
                    title={item}
                    btnSelected={btnSelected}
                    setBtnSelected={setBtnSelected}
                  />
                );
              })}
              <DropdownItem selected={selected} setSelected={setSelected} />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-textGray">1/5</span>
              <div className="flex items-center">
                <button className="w-[38px] h-[38px] bg-white border-[0.5px] rounded">
                  <IoIosArrowBack className="text-textGray m-auto" />
                </button>
                <button className="w-[38px] h-[38px] bg-white border-[0.5px] rounded">
                  <IoIosArrowForward className="text-textGray m-auto" />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {products.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
