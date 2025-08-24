export default function BrandLoader() {
  return (
    <>
      <span className="block size-24 bg-slate-300 animate-pulse rounded-lg" />
      <span className="block w-1/2 bg-slate-300 animate-pulse rounded-lg py-4 mt-8" />
      <span className="block w-60 mt-3.5 bg-slate-300 animate-pulse rounded-lg py-3" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 gap-y-12 mt-20">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className="w-full h-82 aspect-square bg-slate-300 animate-pulse rounded-md"></span>
        ))}
      </div>
    </>
  );
}
