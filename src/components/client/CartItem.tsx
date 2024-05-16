import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export default function CartItem({ item }: any) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center py-3">
      <div className="space-x-2 flex flex-1 items-center">
        <input type="checkbox" name="" id="" />
        <div className="flex space-x-1.5">
          <img
            src={item.image}
            alt="Product image"
            className="w-[80px] h-[80px] border border-secondColor"
          />
          <div>
            <p>{item.name}</p>
            <p className="text-sm text-textGray">x{item.quantity}</p>
          </div>
        </div>
      </div>
      <div className="w-[190px] flex justify-center space-x-2">
        <p className="line-through text-textGray">25000</p>
        <p className="">{item.price}</p>
      </div>
      <div className="w-[190px] flex justify-center">
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
      <div className="w-[190px] flex justify-center">
        <p className="font-medium text-priceColor">20000</p>
      </div>
      <div className="w-[113px] flex justify-center">
        <IoTrashOutline className="text-textGray text-xl" />
      </div>
    </div>
  );
}
