export default function CoverPage() {
  return (
    <section className="portfolio-section flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/persian-rug-background.png)" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center space-y-8 px-8">
        <div className="space-y-6">
          <h1 className="font-serif text-6xl md:text-8xl text-white tracking-wide drop-shadow-lg">Sogol Samivand</h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            <p className="font-sans text-lg md:text-xl text-gold-200 tracking-widest uppercase">
              Fashion Design Portfolio
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
          </div>
        </div>

        <div className="pt-16">
          <div className="w-1 h-16 bg-gradient-to-b from-gold-400 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  )
}
