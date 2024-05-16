import React from "react";

export default function OrderItem({ item }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-secondColor">
      <div className="flex space-x-3">
        <img
          src={item.image}
          alt="product image"
          className="w-20 h-20 border border-secondColor "
        />
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-textGray">Số lượng: {item.quantity}</p>
        </div>
      </div>
      <p className="font-medium text-priceColor">{item.price}</p>
    </div>
  );
}
