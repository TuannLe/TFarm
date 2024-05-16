import { CiUser } from "react-icons/ci";
import NavbarProfile from "../../components/client/NavbarProfile";
import TitleItem from "../../components/client/TitleItem";
import BtnItem from "../../components/client/BtnItem";

const InputItem = () => {
  return (
    <input
      type="text"
      className="flex-1 h-10 border border-borderColor p-2 rounded outline-none"
    />
  );
};

export default function ProfilePage() {
  return (
    <div className="w-full h-full bg-backgroundColor flex justify-center mb-5">
      <div className="w-[1200px] grid grid-cols-12 gap-3 mt-[20px]">
        <NavbarProfile />
        <div className="col-span-10 bg-white rounded px-3 pt-3 pb-10">
          <TitleItem title="Thông tin tài khoản" />
          <div className="grid grid-cols-10 gap-3 mt-5">
            <div className="col-span-6 space-y-10">
              <div className="space-y-3">
                <div className="flex items-center space-x-5">
                  <p className="w-[120px]">Họ và tên:</p>
                  <InputItem />
                </div>
                <div className="flex items-center space-x-5">
                  <p className="w-[120px]">Email:</p>
                  <InputItem />
                </div>
                <div className="flex items-center space-x-5">
                  <p className="w-[120px]">Số điện thoại:</p>
                  <InputItem />
                </div>
                <div className="flex items-center space-x-5">
                  <p className="w-[120px]">Ngày sinh:</p>
                  <InputItem />
                </div>
                <div className="flex items-center space-x-5">
                  <p className="w-[120px]">Giới tính:</p>
                  <InputItem />
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-[120px]"></div>
                <BtnItem title="Cập nhật" />
              </div>
            </div>
            <div className="flex justify-center col-span-4">
              <div className="flex flex-col w-full items-center space-y-3">
                <p>Ảnh đại diện</p>
                <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-secondColor">
                  <CiUser className="text-6xl text-primaryColor" />
                </div>
                <input type="file" name="" id="InputFile" className="hidden" />
                <label
                  htmlFor="InputFile"
                  className="px-3 py-2 bg-primaryColor text-white rounded hover:bg-hoverBColor"
                >
                  Chọn ảnh
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
