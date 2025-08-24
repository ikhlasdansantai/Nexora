export default function ProductRating() {
  return (
    <div className="mt-4 flex items-center">
      <div className="flex items-center">
        <div className="flex text-yellow-400">
          <span className="text-lg">⭐⭐⭐⭐⭐</span>
        </div>
        <span className="ml-2 text-sm text-gray-600">(4.8)</span>
      </div>
      <span className="mx-2 text-gray-300">|</span>
      <a href="#reviews" className="text-sm text-primary-600 hover:text-primary-500">
        127 whislist
      </a>
    </div>
  );
}
