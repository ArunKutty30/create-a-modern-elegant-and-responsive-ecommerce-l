export default function Newsletter() {
  return (
    <section className="bg-[#8B4513] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">
          Get 10% off your first order
        </h2>
        <p className="text-cream-100 mb-8">
          Subscribe to our newsletter for exclusive offers and chocolate inspiration
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3C1810]"
          />
          <button
            type="submit"
            className="bg-[#3C1810] text-white px-6 py-2 rounded-full hover:bg-[#2A110B] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}