"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Math } from "@/components/math"
import type { Topic } from "@/lib/topics"

export function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `panel-${topic.id}`

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-4 p-5">
        <div className="min-w-0">
          <span className="inline-block rounded-full bg-accent/25 px-2.5 py-0.5 font-mono text-xs font-medium text-accent-foreground">
            {topic.tagline}
          </span>
          <h3 className="mt-2 font-heading text-lg font-semibold leading-tight text-card-foreground">
            {topic.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
        </div>
        <span
          aria-hidden="true"
          className="shrink-0 font-mono text-2xl font-semibold text-primary/20"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mx-5 flex items-center justify-center rounded-lg border border-dashed border-border bg-secondary/60 px-4 py-4">
        <Math display>{topic.formula}</Math>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-4 flex w-full items-center justify-between gap-2 border-t border-border px-5 py-3.5 text-left text-sm font-medium text-primary transition-colors hover:bg-secondary/50"
      >
        <span>{open ? "Ocultar procedimiento" : "Ver ejemplo y procedimiento"}</span>
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div id={panelId} className="border-t border-border px-5 pb-5 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ejemplo</p>
          <p className="mt-1 text-sm text-card-foreground">{topic.exampleTitle}</p>
          <div className="mt-2 flex items-center rounded-lg bg-secondary/60 px-4 py-3">
            <Math display>{topic.example}</Math>
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Procedimiento
          </p>
          <ol className="mt-2 space-y-3">
            {topic.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-card-foreground">{step.text}</p>
                  {step.math && (
                    <div className="mt-1.5 overflow-x-auto rounded-md bg-muted px-3 py-2">
                      <Math>{step.math}</Math>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-wrap items-center gap-2 rounded-lg border-l-4 border-accent bg-accent/15 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              Resultado
            </span>
            <Math>{topic.result}</Math>
          </div>
        </div>
      )}
    </article>
  )
}
