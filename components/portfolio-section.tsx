"use client"

import { useState } from "react"

export default function PortfolioSection() {
  const [hoveredSketch, setHoveredSketch] = useState<number | null>(null)

  const sketches = [
    {
      id: 1,
      title: "Blue Elegance",
      description:
        "A stunning blue evening gown with intricate floral embellishments at the hem, showcasing delicate hand-drawn details and flowing silhouette.",
      materials: "Silk chiffon, hand-embroidered florals, satin lining",
      color: "from-blue-100 to-indigo-50",
      accent: "bg-blue-400",
      emoji: "✨",
      image: "/IMG_6252.jpg",
    },
    {
      id: 2,
      title: "Sophisticated Black Collection",
      description:
        "Three elegant black outfits featuring sophisticated silhouettes with Persian heritage influences and modern styling.",
      materials: "Premium black fabrics, structured tailoring",
      color: "from-slate-100 to-gray-50",
      accent: "bg-slate-500",
      emoji: "🖤",
      image: "/IMG_0032.JPG",
    },
    {
      id: 3,
      title: "Rose Garden Dreams",
      description:
        "A romantic pink gown with geometric patterns and flowing design, combining structured elements with feminine grace.",
      materials: "Rose-toned silk, geometric embellishments",
      color: "from-pink-100 to-rose-50",
      accent: "bg-pink-400",
      emoji: "🌹",
      image: "/IMG_6253.jpg",
    },
    {
      id: 4,
      title: "Urban Chic",
      description:
        "Contemporary streetwear design featuring a crop top and shorts ensemble with clean lines and modern athletic influences.",
      materials: "Cotton blend, structured details, comfortable fit",
      color: "from-gray-100 to-slate-50",
      accent: "bg-gray-500",
      emoji: "👟",
      image: "/IMG_0015.JPG",
    },
    {
      id: 5,
      title: "Dramatic Elegance",
      description:
        "A striking black and white ensemble with a dramatic wide-brimmed hat, featuring geometric white details and sophisticated styling.",
      materials: "Black and white contrast fabrics, structured hat",
      color: "from-stone-100 to-zinc-50",
      accent: "bg-stone-500",
      emoji: "🎩",
      image: "/IMG_0013.JPG",
    },
    {
      id: 6,
      title: "Emerald Flow",
      description:
        "A flowing evening gown in green and yellow tones, showcasing organic movement and elegant draping with mixed color techniques.",
      materials: "Flowing fabrics, mixed green and yellow tones",
      color: "from-green-100 to-yellow-50",
      accent: "bg-green-500",
      emoji: "🌿",
      image: "/IMG_6247.jpg",
    },
    {
      id: 7,
      title: "Persian Heritage",
      description:
        "A red Asian-inspired dress celebrating traditional elements with modern interpretation, featuring cultural motifs and elegant silhouette.",
      materials: "Red silk, traditional embellishments, cultural details",
      color: "from-red-100 to-orange-50",
      accent: "bg-red-500",
      emoji: "🏮",
      image: "/IMG_0031.JPG",
    },
    {
      id: 8,
      title: "Power Red",
      description:
        "A modern red blazer dress design showcasing contemporary professional wear with chic styling and confident silhouette.",
      materials: "Structured red fabric, tailored fit, modern cut",
      color: "from-red-100 to-pink-50",
      accent: "bg-red-400",
      emoji: "💼",
      image: "/IMG_0034.JPG",
    },
    {
      id: 9,
      title: "Luxe Outerwear",
      description:
        "A sophisticated brown leather coat design featuring layered styling and premium materials for elegant outerwear.",
      materials: "Brown leather, layered construction, premium finish",
      color: "from-amber-100 to-orange-50",
      accent: "bg-amber-500",
      emoji: "🧥",
      image: "/IMG_0016.JPG",
    },
    {
      id: 10,
      title: "Pink Ruffles",
      description:
        "A playful yet elegant pink dress with multiple tiers of ruffles, showcasing dramatic volume and feminine charm.",
      materials: "Pink chiffon, tiered ruffles, structured bodice",
      color: "from-pink-100 to-fuchsia-50",
      accent: "bg-pink-500",
      emoji: "🎀",
      image: "/IMG_0012.JPG",
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
                      src={sketch.image || "/placeholder.svg"}
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
