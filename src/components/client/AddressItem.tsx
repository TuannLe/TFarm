export default function AddressItem() {
  return (
    <div className="flex justify-between items-start space-x-3 p-3 bg-secondColor rounded">
      <div className="space-y-1.5 flex-1">
        <div className="flex items-center space-x-3">
          <p className="text-base text-textGray w-[110px]">Họ và tên:</p>
          <p className="text-base font-medium">Tuấn</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-base text-textGray w-[110px]">Địa chỉ:</p>
          <p className="text-base">87 Nguyễn Đình Hiến, Ngũ Hành Sơn, ĐN</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-base text-textGray w-[110px]">Số điện thoại:</p>
          <p className="text-base">0968604438</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="px-3 py-0.5 rounded text-textGray text-base">
          Xóa
        </button>
        <button className="bg-primaryColor rounded px-3 py-0.5 text-white text-base">
          Sửa
        </button>
      </div>
    </div>
  );
}
