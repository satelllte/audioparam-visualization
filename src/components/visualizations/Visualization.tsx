import { Button } from "../blocks/Button"

interface Props {
  title: string
  canvasRef: React.RefObject<HTMLCanvasElement>
  onStart: () => void
}

export const Visualization = ({
  title,
  canvasRef,
  onStart,
}: Props) => {
  return (
    <div className="py-6 max-w-xl">
      <h2>{title}</h2>
      <div className='p-4'>
        <canvas
          className="bg-[length:10px_10px] bg-[radial-gradient(theme(colors.sky[900])_10%,_transparent_10%)]"
          ref={canvasRef}
          width={500}
          height={250}
        />
      </div>
      <Button onClick={onStart}>Start</Button>
    </div>
  )
}
