import katex from "katex"

export function Math({
  children,
  display = false,
  className = "",
}: {
  children: string
  display?: boolean
  className?: string
}) {
  const html = katex.renderToString(children, {
    displayMode: display,
    throwOnError: false,
    output: "html",
  })

  return (
    <span
      className={className}
      // KaTeX output is trusted, generated from our own static strings
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
