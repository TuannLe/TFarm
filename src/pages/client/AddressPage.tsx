import { FaPlus } from "react-icons/fa6";
import { Button, Divider, Modal } from "antd";
import NavbarProfile from "../../components/client/NavbarProfile";
import TitleItem from "../../components/client/TitleItem";
import AddressItem from "../../components/client/AddressItem";
import { useState } from "react";
import BtnItem from "../../components/client/BtnItem";
import BtnItemNegative from "../../components/client/BtnItemNegative";

export default function AddressPage() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-full bg-backgroundColor flex justify-center mb-5">
      <div className="w-[1200px] grid grid-cols-12 gap-3 mt-[20px]">
        <NavbarProfile />
        <div className="col-span-10 bg-white rounded p-3 space-y-3">
          <TitleItem title="Địa chỉ của tôi" />
          <button
            onClick={showModal}
            className="w-full flex justify-center p-3 bg-secondColor rounded"
          >
            <FaPlus className="text-base text-textGray" />
          </button>
          <div className="space-y-3">
            <AddressItem />
            <AddressItem />
            <AddressItem />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        centered
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="space-x-3">
            <BtnItemNegative title="Hủy" />
            <BtnItem title="Thêm" />
          </div>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
