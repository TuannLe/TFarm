import CartItem from "../../components/client/CartItem";
import RecommenderSection from "../../components/client/RecommenderSection";

export default function CartPage() {
  const products = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 50000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
      quantity: 2,
    },
    {
      id: 1,
      name: "Apple",
      image: "https://cdn.medigoapp.com/product/tao_tay_4_b2a1afe264.jpg",
      price: 90000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
      quantity: 8,
    },
    {
      id: 1,
      name: "Apple",
      image:
        "https://product.hstatic.net/200000325223/product/sau_rieng_new-01_63392fbb5c3d449e913faebc332ae80f_master.png",
      price: 5000,
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
    {
      id: 1,
      name: "Apple",
      image:
        "https://rausachbaoloc.com/wp-content/uploads/sup-lo-xanh-huu-co-rau-sach-bao-loc-0879262604.jpg",
      price: 30000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
      quantity: 5,
    },
  ];

  return (
    <div className="w-full h-full flex justify-center bg-backgroundColor pb-5">
      <div className="flex flex-col w-[1200px] mt-[20px] space-y-5">
        {products.length ? (
          <>
            <div className="flex items-center p-3 bg-secondColor">
              <div className="space-x-2 flex flex-1 items-center">
                <input type="checkbox" name="" id="" />
                <p className="font-medium">Tất cả (2 sản phẩm)</p>
              </div>
              <div className="w-[190px] flex justify-center">
                <p className="font-medium">Đơn giá</p>
              </div>
              <div className="w-[190px] flex justify-center">
                <p className="font-medium">Số lượng</p>
              </div>
              <div className="w-[190px] flex justify-center">
                <p className="font-medium">Thành tiền</p>
              </div>
              <div className="w-[113px] flex justify-center">
                <p className="font-medium">Thao tác</p>
              </div>
            </div>
            <div className="bg-white rounded p-3">
              {products.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })}
            </div>
            <div className="bg-white rounded">
              <div className="flex flex-1 justify-end items-center p-3 space-x-3 border-b border-secondColor">
                <p className="text-textGray">Nhập mã giảm giá</p>
                <input
                  type="text"
                  className="w-[400px] h-[40px] border border-borderColor rounded outline-none px-2"
                />
              </div>
              <div className="flex flex-1 justify-end items-center space-x-4 p-3">
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-textGray">
                    Tạm tính (2 sản phẩm):
                  </p>
                  <p className="text-3xl font-medium text-priceColor">50000</p>
                </div>
                <button className="w-[200px] h-[50px] bg-primaryColor text-white rounded hover:bg-hoverBColor">
                  Xác nhận
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="h-[450px] flex justify-center items-center">
            <div className="flex flex-col items-center space-y-4">
              <p>Giỏ hàng trống</p>
              <button className="w-[200px] h-[50px] bg-primaryColor text-white rounded hover:bg-hoverBColor">
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        )}
        <RecommenderSection title="Có thể bạn cũng thích" />
      </div>
    </div>
  );
}
