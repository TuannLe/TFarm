export default function Navbar() {
  const categories = [
    {
      id: 1,
      name: "Rau củ",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
    {
      id: 4,
      name: "Category 4",
    },
    {
      id: 5,
      name: "Category 5",
    },
    {
      id: 6,
      name: "Category 6",
    },
    {
      id: 7,
      name: "Category 7",
    },
    {
      id: 8,
      name: "Category 8",
    },
  ];
  return (
    <div className="bg-white h-fit col-span-2 rounded p-3 shadow-md shadow-[#D1D5DB]">
      <h1 className="font-bold text-base text-center mb-5">Danh mục</h1>
      <div className="space-y-3">
        {categories.map((item) => {
          return (
            <p
              key={item.id}
              className="text-primaryColor pb-1.5 border-b border-borderColor hover:pl-2 duration-100 hover:cursor-pointer"
            >
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
