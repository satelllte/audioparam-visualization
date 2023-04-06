interface HighlightProps {
  children: string
}

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="font-bold text-cyan-400">{children}</span>
  )
}

interface HighlightVariableProps {
  children: string
}

export const HighlightVariable = ({ children }: HighlightVariableProps) => {
  return (
    <span className="bg-gray-900 px-1 text-cyan-500">{children}</span>
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
