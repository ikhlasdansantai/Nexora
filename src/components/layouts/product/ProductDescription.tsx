export default function ProductDescription({ description }: { description: string }) {
  return (
    <div className="mt-6 h-50">
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
