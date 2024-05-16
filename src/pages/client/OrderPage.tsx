import { useState } from "react";
import NavbarProfile from "../../components/client/NavbarProfile";
import OrderItem from "../../components/client/OrderItem";
import BtnItem from "../../components/client/BtnItem";

export default function OrderPage() {
  const options = ["Tất cả", "Chờ xác nhận", "Đang giao", "Đã giao", "Đã hủy"];
  const [selected, setSelected] = useState(0);
  const orders = [
    {
      orderId: 1,
      products: [
        {
          id: 1,
          name: "Apple",
          image:
            "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
          price: 10000,
          description: "hello world!",
          supplier: "TFarm",
          sell: 24,
          quantity: 1,
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
          quantity: 1,
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
          quantity: 5,
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
          quantity: 3,
        },
      ],
    },
    {
      orderId: 2,
      products: [
        {
          id: 1,
          name: "Apple",
          image:
            "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
          price: 10000,
          description: "hello world!",
          supplier: "TFarm",
          sell: 24,
          quantity: 1,
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
          quantity: 3,
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-backgroundColor flex justify-center pb-5">
      <div className="w-[1200px] grid grid-cols-12 gap-3 mt-[20px]">
        <NavbarProfile />
        <div className="col-span-10 space-y-5">
          <div className="flex rounded overflow-hidden shadow">
            {options.map((item, index) => {
              return (
                <button
                  onClick={() => setSelected(index)}
                  key={index}
                  className={`h-[50px] bg-white flex-1 ${
                    selected == index ? "border-b-2 border-primaryColor" : null
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="space-y-5">
            {orders.map((item, index) => {
              return (
                <div key={index} className="bg-white px-3 rounded">
                  <div className="flex items-center justify-between py-3 border-b border-secondColor">
                    <button className="px-5 py-1 bg-priceColor rounded text-white">
                      Đánh giá
                    </button>
                    <p className="uppercase text-primaryColor">{options[2]}</p>
                  </div>
                  {item?.products.map((i, idx) => {
                    return <OrderItem key={idx} item={i} />;
                  })}
                  <div className="py-3 space-y-3 flex flex-col items-end">
                    <div className="flex items-center justify-end space-x-3">
                      <p>Tổng số tiền:</p>
                      <p className="text-2xl text-priceColor font-medium">
                        70.000 đ
                      </p>
                    </div>
                    <BtnItem title="Mua lại" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
