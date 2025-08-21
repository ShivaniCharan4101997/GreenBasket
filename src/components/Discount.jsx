export default function GlassCard() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center my-16"
      style={{ backgroundImage: "url('/assets/fresh-fruits.png')" }}
    >
      {/* Overlay (darken bg a bit so glass pops out) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Glassmorphism Card */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl bg-white/20 border border-white/30 shadow-lg backdrop-blur-md w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl text-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-secondary)]">
            20%
          </span>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            First order discount
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90">
            Get your groceries delivered at your doorstep with fresh quality
            products.
          </p>
          <button className="mt-5 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary)]/80 transition">
            Get Discount
          </button>
        </div>
      </div>
    </div>
  );
}
