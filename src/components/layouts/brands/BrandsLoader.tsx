export default function BrandsLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 gap-y-12">
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} className="w-full h-82 aspect-square bg-slate-300 animate-pulse rounded-md"></span>
      ))}
    </div>
  );
}
