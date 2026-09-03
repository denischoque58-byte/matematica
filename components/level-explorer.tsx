"use client"

import { useState } from "react"
import { levels } from "@/lib/topics"
import { TopicCard } from "@/components/topic-card"

export function LevelExplorer() {
  const [active, setActive] = useState(levels[0].id)
  const current = levels.find((l) => l.id === active) ?? levels[0]

  return (
    <section id="niveles" className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-20">
      <div className="flex flex-col items-center text-center">
        <span className="font-mono text-sm text-primary">// Elige tu nivel</span>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tres niveles, un mismo lenguaje
        </h2>
      </div>

      <div
        role="tablist"
        aria-label="Niveles educativos"
        className="mx-auto mt-8 flex w-full max-w-md flex-wrap justify-center gap-2 rounded-xl border border-border bg-card p-1.5"
      >
        {levels.map((level) => {
          const selected = level.id === active
          return (
            <button
              key={level.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(level.id)}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                selected
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {level.short}
            </button>
          )
        })}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">
        {current.description}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {current.topics.map((topic, i) => (
          <TopicCard key={topic.id} topic={topic} index={i} />
        ))}
      </div>
    </section>
  )
}
