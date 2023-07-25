type HighlightProps = {
  children: string
}

export function Highlight({ children }: HighlightProps) {
  return (
    <span className="font-semibold text-accent">{children}</span>
  )
}

type HighlightVariableProps = {
  children: string
}

export function HighlightVariable({ children }: HighlightVariableProps) {
  return (
    <span className="underline">{children}</span>
  )
}

type ParagraphProps = {
  children: React.ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p>{children}</p>
  )
}
