export default function ButtonItem({
  title,
  index,
  btnSelected,
  setBtnSelected,
}: any) {
  return (
    <button
      onClick={() => setBtnSelected(index)}
      className={`px-5 py-2 rounded ${
        btnSelected === index
          ? "bg-primaryColor text-white hover:bg-hoverBColor"
          : "bg-white text-primaryColor hover:bg-gray-50"
      } font-medium`}
    >
      {title}
    </button>
  );
}
