export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-6"></div>

      {/* Loading text */}
      <p className="text-gray-600 text-sm mb-6">Loading website...</p>

      {/* Recon Advertisement */}
      <div className="text-center max-w-xs px-4">
        <h2 className="text-xl font-bold text-black mb-2">Recon</h2>
        <p className="text-gray-700 text-sm">
         Product of Makson International . High-quality products, unbeatable prices. Explore the full range after the site loads!
        </p>
      </div>
    </div>
  );
}
