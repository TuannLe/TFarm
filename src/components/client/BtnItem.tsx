export default function BtnItem({ title }: any) {
  return (
    <button className="px-4 py-1.5 bg-primaryColor text-base text-white rounded hover:bg-hoverBColor">
      {title}
    </button>
  );
}
