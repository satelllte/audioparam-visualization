interface HighlightProps {
  children: string
}

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="font-bold text-cyan-400">{children}</span>
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
