export default function ProductDetailLoader() {
  return (
    <div
      className="lg:grid lg:grid-cols-2 lg:gap-x-10 lg:items-start w-full mt-4 sm:mt-24
"
    >
      <div className="block bg-slate-300 animate-pulse rounded-lg h-96 w-full" />
      <div className="mt-10 sm:mt-0">
        <span className="block bg-slate-300 h-6 animate-pulse rounded-lg  w-[30%]" />
        <span className="block bg-slate-300 h-12 animate-pulse rounded-lg  w-[80%] mt-4.5" />
        <span className="block bg-slate-300 h-6 mt-2.5 animate-pulse rounded-lg w-1/2" />
        <span className="block bg-slate-300 h-4 mt-10 animate-pulse rounded-md w-[80%]" />
        <span className="block bg-slate-300 h-4 mt-2.5 animate-pulse rounded-md w-[76%]" />
        <span className="block bg-slate-300 h-4 mt-2.5 animate-pulse rounded-md w-[65%]" />
      </div>
    </div>
  );
}
