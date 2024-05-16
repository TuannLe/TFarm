import ProductItem from "./ProductItem";
import TitleItem from "./TitleItem";

export default function RecommenderSection({ title }: any) {
  const products = [
    {
      id: 1,
      name: "Cà rốt",
      image:
        "https://product.hstatic.net/200000423303/product/ca-rot-huu-co_051657cb99144443bac8015f6dd34dae_1024x1024.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 200,
    },
    {
      id: 1,
      name: "Táo",
      image: "https://cdn.medigoapp.com/product/tao_tay_4_b2a1afe264.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 120,
    },
    {
      id: 1,
      name: "Bí đỏ",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/390/808/products/bi-do.jpg?v=1592640500230",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 56,
    },
    {
      id: 1,
      name: "Bắp mỹ",
      image: "https://vinhtienfood.vn/wp-content/uploads/2021/04/NGONGOT.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 24,
    },
    {
      id: 1,
      name: "Rau muống",
      image:
        "https://cdn.abphotos.link/photos/resized/1024x/2022/09/15/1663236587_XRMnOSk7BKzTfHlA_1663239577-phppmyjkv.png",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 14,
    },
    {
      id: 1,
      name: "Cà chua",
      image:
        "https://product.hstatic.net/200000423303/product/ca-chua-bee-cherry-huu-co_2afe5b08b1f242809cac54171701fff4_1024x1024.jpg",
      price: 10000,
      description: "hello world!",
      supplier: "TFarm",
      sell: 44,
    },
  ];

  return (
    <div className="w-[1200px] rounded">
      <TitleItem title={title} />
      <div className="grid grid-cols-6 gap-3 mt-3">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
