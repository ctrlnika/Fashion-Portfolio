export default function ContactPage() {
  return (
    <section className="portfolio-section bg-stone-50 flex items-center justify-center relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <img src="/subtle-fabric-texture.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 text-center space-y-12 px-8">
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-6xl text-stone-800">Let's Create Together</h2>
          <div className="w-20 h-px gold-accent mx-auto"></div>
        </div>

        <div className="space-y-8 max-w-md mx-auto">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-stone-800">Sogol Samivand</h3>
            <div className="space-y-3 text-stone-700">
              <p className="flex items-center justify-center space-x-3">
                <span className="text-sm uppercase tracking-wide">Email</span>
                <span className="w-4 h-px bg-stone-400"></span>
                <span>sogol.samivand@email.com</span>
              </p>

              <p className="flex items-center justify-center space-x-3">
                <span className="text-sm uppercase tracking-wide">Instagram</span>
                <span className="w-4 h-px bg-stone-400"></span>
                <span>@sogol.designs</span>
              </p>

              <p className="flex items-center justify-center space-x-3">
                <span className="text-sm uppercase tracking-wide">LinkedIn</span>
                <span className="w-4 h-px bg-stone-400"></span>
                <span>Sogol Samivand</span>
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-stone-600 text-sm italic">
              "Fashion is the armor to survive the reality of everyday life"
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-2 h-2 gold-accent rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-24 w-3 h-3 bg-emerald-700 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-stone-400 rounded-full"></div>
      </div>
    </section>
  )
}
