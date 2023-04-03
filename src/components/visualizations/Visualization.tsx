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
    <div>
      <h2>{title}</h2>
      <Button onClick={onStart}>Start</Button>
      <div className='py-2'>
        <canvas ref={canvasRef} width={500} height={250}/>
      </div>
    </div>
  )
}
