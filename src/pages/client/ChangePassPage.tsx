import NavbarProfile from "../../components/client/NavbarProfile";
import TitleItem from "../../components/client/TitleItem";

export default function ChangePassPage() {
  return (
    <div className="w-full h-full bg-backgroundColor flex justify-center mb-5">
      <div className="w-[1200px] grid grid-cols-12 gap-3 mt-[20px]">
        <NavbarProfile />
        <div className="col-span-10 bg-white rounded px-3 pt-3 pb-10">
          <TitleItem title="Đổi mật khẩu" />
          <div className="grid grid-cols-10 gap-5 mt-3">
            <div className="col-span-6 space-y-3">
              <div className="flex items-center space-x-3">
                <label htmlFor="oldPassword" className="text-base w-[130px]">
                  Mật khẩu cũ:
                </label>
                <input
                  id="oldPassword"
                  type="text"
                  placeholder="Mật khẩu cũ..."
                  className="w-full h-[40px] px-3 border border-borderColor rounded outline-none"
                />
              </div>
              <div className="flex items-center space-x-3">
                <label htmlFor="newPassword" className="text-base w-[130px]">
                  Mật khẩu mới:
                </label>
                <input
                  id="newPassword"
                  type="text"
                  placeholder="Mật khẩu mới..."
                  className="w-full h-[40px] px-3 border border-borderColor rounded outline-none"
                />
              </div>
              <div className="flex items-center space-x-3">
                <label
                  htmlFor="confirmPassword"
                  className="text-base w-[130px]"
                >
                  Xác nhận:
                </label>
                <input
                  id="confirmPassword"
                  type="text"
                  placeholder="Xác nhận mật khẩu..."
                  className="w-full h-[40px] px-3 border border-borderColor rounded outline-none"
                />
              </div>
            </div>
            <div className="col-span-4">
              <button className="text-base text-textGray">
                Quên mật khẩu?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
