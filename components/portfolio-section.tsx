"use client"

import { useState } from "react"

export default function PortfolioSection() {
  const [hoveredSketch, setHoveredSketch] = useState<number | null>(null)

  const sketches = [
    {
      id: 1,
      title: "Evening Elegance",
      description:
        "A flowing evening gown inspired by Art Deco architecture, featuring geometric beadwork and silk chiffon layers.",
      materials: "Silk chiffon, glass beads, satin lining",
      color: "from-purple-100 to-pink-50",
      accent: "bg-purple-400",
      emoji: "✨",
    },
    {
      id: 2,
      title: "Urban Minimalist",
      description: "Contemporary streetwear collection focusing on clean lines and sustainable fabrics.",
      materials: "Organic cotton, recycled polyester",
      color: "from-slate-100 to-gray-50",
      accent: "bg-slate-500",
      emoji: "🏙️",
    },
    {
      id: 3,
      title: "Cultural Fusion",
      description: "Traditional Persian motifs reimagined in modern silhouettes, celebrating heritage through fashion.",
      materials: "Embroidered silk, metallic threads",
      color: "from-amber-100 to-orange-50",
      accent: "bg-amber-500",
      emoji: "🌸",
    },
    {
      id: 4,
      title: "Textural Play",
      description: "Experimental piece exploring the contrast between rough and smooth textures in wearable art.",
      materials: "Raw linen, silk organza, leather details",
      color: "from-emerald-100 to-teal-50",
      accent: "bg-emerald-500",
      emoji: "🎨",
    },
    {
      id: 5,
      title: "Botanical Dreams",
      description: "Nature-inspired collection featuring hand-painted floral motifs and organic shapes.",
      materials: "Natural dyes, cotton canvas, silk",
      color: "from-green-100 to-lime-50",
      accent: "bg-green-500",
      emoji: "🌿",
    },
    {
      id: 6,
      title: "Avant-Garde Vision",
      description: "Conceptual design pushing boundaries of traditional fashion through sculptural elements.",
      materials: "Structured interfacing, metallic mesh",
      color: "from-rose-100 to-red-50",
      accent: "bg-rose-500",
      emoji: "🚀",
    },
  ]

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-300 opacity-70"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-purple-300 rounded-full animate-pulse delay-500 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4 animate-fade-in">Portfolio</h2>
          <div className="w-16 h-px gold-accent mx-auto animate-expand"></div>
          <p className="text-stone-600 mt-6 text-lg italic">Where creativity meets craftsmanship ✂️</p>
        </div>

        <div className="space-y-24">
          {sketches.map((sketch, index) => (
            <div
              key={sketch.id}
              className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""} group`}
              onMouseEnter={() => setHoveredSketch(sketch.id)}
              onMouseLeave={() => setHoveredSketch(null)}
            >
              <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="relative group/image">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sketch.color} rounded-2xl transform transition-all duration-500 ${hoveredSketch === sketch.id ? "scale-105 rotate-1" : "scale-100"} opacity-30`}
                  ></div>

                  <div className="relative sketch-border rounded-2xl overflow-hidden bg-white shadow-lg transform transition-all duration-500 hover:shadow-2xl">
                    <img
                      src={`/fashion-design-sketch.png?height=600&width=450&query=fashion design sketch ${sketch.title.toLowerCase()}, hand-drawn fashion illustration, elegant dress design`}
                      alt={sketch.title}
                      className={`w-full h-auto transition-all duration-700 ${hoveredSketch === sketch.id ? "scale-110 brightness-110" : "scale-100"}`}
                    />

                    <div
                      className={`absolute top-4 right-4 text-2xl transform transition-all duration-300 ${hoveredSketch === sketch.id ? "scale-125 rotate-12" : "scale-100"}`}
                    >
                      {sketch.emoji}
                    </div>
                  </div>

                  <div
                    className={`absolute -top-6 -left-6 w-12 h-12 ${sketch.accent} opacity-40 rounded-full transform transition-all duration-500 ${hoveredSketch === sketch.id ? "scale-150 rotate-45" : "scale-100"}`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -right-4 w-8 h-8 ${sketch.accent} opacity-30 rounded-full transform transition-all duration-700 ${hoveredSketch === sketch.id ? "scale-125 -rotate-45" : "scale-100"}`}
                  ></div>
                </div>
              </div>

              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""} transform transition-all duration-500 ${hoveredSketch === sketch.id ? "translate-x-2" : "translate-x-0"}`}
              >
                <div className="space-y-3">
                  <h3
                    className={`font-serif text-2xl md:text-3xl text-stone-800 transition-colors duration-300 ${hoveredSketch === sketch.id ? "text-stone-900" : ""}`}
                  >
                    {sketch.title}
                    <span
                      className={`inline-block ml-2 text-xl transition-all duration-300 ${hoveredSketch === sketch.id ? "animate-bounce" : ""}`}
                    >
                      {sketch.emoji}
                    </span>
                  </h3>
                  <div
                    className={`h-px transition-all duration-500 ${hoveredSketch === sketch.id ? `w-16 ${sketch.accent}` : "w-8 gold-accent"}`}
                  ></div>
                </div>

                <p
                  className={`text-stone-700 leading-relaxed text-lg transition-all duration-300 ${hoveredSketch === sketch.id ? "text-stone-800 scale-105" : ""}`}
                >
                  {sketch.description}
                </p>

                <div
                  className={`space-y-2 p-4 rounded-lg transition-all duration-300 ${hoveredSketch === sketch.id ? `bg-gradient-to-r ${sketch.color} transform scale-105` : "bg-stone-50"}`}
                >
                  <h4 className="font-sans text-sm uppercase tracking-wide text-stone-600 flex items-center gap-2">
                    Materials
                    <span className="text-xs">🧵</span>
                  </h4>
                  <p className="text-stone-600 text-sm font-medium">{sketch.materials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 p-8 bg-gradient-to-r from-stone-50 to-stone-100 rounded-2xl">
          <p className="text-stone-700 text-lg mb-4">Love what you see? Let's create something amazing together! 💫</p>
          <div className="flex justify-center gap-2">
            <span className="animate-bounce">✨</span>
            <span className="animate-bounce delay-100">🎨</span>
            <span className="animate-bounce delay-200">✂️</span>
            <span className="animate-bounce delay-300">👗</span>
            <span className="animate-bounce delay-400">✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}
