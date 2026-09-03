import { Hero } from "@/components/hero"
import { LevelExplorer } from "@/components/level-explorer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary font-heading text-lg font-bold text-primary-foreground">
              π
            </span>
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              Mathesis
            </span>
          </a>
          <a
            href="#niveles"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ver temas
          </a>
        </div>
      </header>

      <Hero />
      <LevelExplorer />

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-10 text-center">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary font-heading text-lg font-bold text-primary-foreground">
            π
          </span>
          <p className="font-heading text-sm font-semibold text-foreground">Mathesis</p>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Un recurso para aprender matemática desde la primaria hasta la universidad, con ejemplos y
            procedimientos claros.
          </p>
        </div>
      </footer>
    </main>
  )
}
