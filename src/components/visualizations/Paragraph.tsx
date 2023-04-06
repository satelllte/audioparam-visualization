interface HighlightProps {
  children: string
}

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="font-bold text-accent">{children}</span>
  )
}

interface HighlightVariableProps {
  children: string
}

export const HighlightVariable = ({ children }: HighlightVariableProps) => {
  return (
    <span className="underline">{children}</span>
  )
}

interface ParagraphProps {
  children: React.ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p>{children}</p>
  )
}
