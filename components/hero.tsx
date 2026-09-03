import { Math } from "@/components/math"

const floating = [
  "a^2 + b^2 = c^2",
  "\\frac{d}{dx}x^n = nx^{n-1}",
  "\\int x\\,dx = \\frac{x^2}{2} + C",
  "\\frac{3}{6} = \\frac{1}{2}",
]

export function Hero() {
  return (
    <section className="graph-paper relative overflow-hidden border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:py-28">
        <span className="rounded-full border border-primary/30 bg-card px-4 py-1.5 font-mono text-xs font-medium text-primary">
          Primaria · Secundaria · Universidad
        </span>
        <h1 className="mt-6 max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          La matemática explicada <span className="text-primary">paso a paso</span>
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Recorre los temas esenciales de cada nivel educativo con su fórmula, un ejemplo real y el
          procedimiento completo de cómo se resuelve.
        </p>
        <a
          href="#niveles"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
        >
          Comenzar a explorar
        </a>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {floating.map((f) => (
            <div
              key={f}
              className="rounded-lg border border-border bg-card/80 px-4 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <Math>{f}</Math>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
