export default function TitleItem({ title }: any) {
  return (
    <div className="p-3 bg-secondColor rounded">
      <h1 className="uppercase text-primaryColor font-medium">{title}</h1>
    </div>
  );
}
