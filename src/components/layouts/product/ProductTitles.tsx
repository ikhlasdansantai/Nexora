export default function ProductTitles({ title }: { title: string }) {
  return (
    <>
      <div className="flex items-center space-x-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">Nike</span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">In Stock</span>
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
    </>
  );
}
