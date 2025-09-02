"use client"

import { useState } from "react"

export default function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "Fashion Illustration", icon: "✏️", description: "Bringing designs to life on paper" },
    { name: "Pattern Design", icon: "📐", description: "Creating precise technical patterns" },
    { name: "Textile Knowledge", icon: "🧵", description: "Understanding fabric properties" },
    { name: "Color Theory", icon: "🎨", description: "Mastering color harmonies" },
    { name: "Trend Analysis", icon: "📊", description: "Forecasting fashion movements" },
    { name: "Customer Relations", icon: "💬", description: "Understanding client needs" },
  ]

  return (
    <section className="portfolio-section bg-gradient-to-br from-stone-50 via-blush-50 to-stone-100 py-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gold-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blush-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-stone-800 hover:text-gold-600 transition-colors duration-300 cursor-default">
                About Me
              </h2>
              <div className="w-12 h-px bg-gradient-to-r from-gold-500 to-blush-400 animate-pulse"></div>
            </div>

            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p className="text-lg font-medium text-stone-800">
                I'm Sogol Samivand, a passionate and detail-oriented fashion enthusiast with a love for translating
                <span className="text-gold-600 font-semibold"> imagination into wearable art</span>.
              </p>

              <p className="hover:text-stone-800 transition-colors duration-200">
                My designs combine contemporary silhouettes with timeless elegance, often inspired by texture, movement,
                and cultural influences. With a background in customer-facing roles, I bring a unique perspective on how
                fashion connects with people's emotions and confidence.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-xl text-stone-800 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-stone-200/50 hover:border-gold-300 hover:bg-gold-50/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-lg group-hover:animate-bounce">{skill.icon}</span>
                      <span className="font-medium text-stone-700 group-hover:text-gold-700">{skill.name}</span>
                    </div>
                    {hoveredSkill === skill.name && (
                      <p className="text-xs text-stone-600 mt-1 animate-fade-in">{skill.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="relative group">
              <div className="w-80 h-96 bg-gradient-to-br from-stone-200 to-stone-300 sketch-border rounded-lg overflow-hidden transform group-hover:rotate-1 transition-transform duration-300">
                <img
                  src="/sogol-portrait.png"
                  alt="Sogol Samivand"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gold-400/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blush-400/20 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gold-300/40 rounded-full animate-pulse"></div>

              <div className="absolute -top-8 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gold-200 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="text-xs font-medium text-stone-700">Fashion is art you can wear ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
