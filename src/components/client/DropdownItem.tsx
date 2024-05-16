import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function DropdownItem({ selected, setSelected }: any) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    {
      id: "op1",
      title: "Từ thấp đến cao",
    },
    {
      id: "op2",
      title: "Từ cao đến thấp",
    },
  ];
  return (
    <div className="w-[220px] relative z-10">
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex items-center justify-between bg-white px-5 py-2 rounded select-none cursor-pointer"
      >
        <p className="font-medium">{selected}</p>
        {isActive ? (
          <IoIosArrowUp className="text-textGray" />
        ) : (
          <IoIosArrowDown className="text-textGray" />
        )}
      </div>
      {isActive && (
        <div className="w-full absolute bg-white shadow-md overflow-hidden rounded">
          {options.map((item) => {
            return (
              <div
                onClick={() => {
                  setSelected(item.title);
                  setIsActive(false);
                }}
                key={item.id}
                className="p-2 cursor-pointer hover:bg-secondColor duration-100"
              >
                {item.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
