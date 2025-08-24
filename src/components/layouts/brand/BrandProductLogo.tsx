export default function BrandProductLogo({ emoji }: { emoji: string }) {
  return (
    <button className="aspect-square bg-white rounded-lg border border-gray-200 hover:border-gray-300 overflow-hidden focus:outline-none">
      <div className="w-full h-full bg-secondary flex items-center justify-center">
        <div className="text-green-600 text-5xl font-bold">{emoji}</div>
      </div>
    </button>
  );
}
