export class CanvasDrawer {
  private _canvas: HTMLCanvasElement
  private _context: CanvasRenderingContext2D
  private _time: number = 0
  private _value: number = 1
  private _frameId: number | null = null

  private static _pointRadius: number = 3
  private static _pointArcStartAngle: number = 0
  private static _pointArcEndAngle: number = Math.PI * 2

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d')

    if (!context) {
      throw new Error('Could not get 2d context from canvas')
    }

    this._canvas = canvas
    this._context = context
  }

  public updateValues(time: number, value: number) {
    this._time = time
    this._value = value
  }

  public start(drawCallback: () => void) {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)

    const draw = () => {
      this._context.fillStyle = "#ffffff"
      this._context.beginPath()
      this._context.arc(
        this._time * this._canvas.width,
        this._value * this._canvas.height,
        CanvasDrawer._pointRadius,
        CanvasDrawer._pointArcStartAngle,
        CanvasDrawer._pointArcEndAngle,
        true,
      )
      this._context.closePath()
      this._context.fill()
  
      drawCallback()

      this._frameId = requestAnimationFrame(draw)
    }

    this._frameId = requestAnimationFrame(draw)
  }

  public stop() {
    if (!this._frameId) {
      return
    }
    cancelAnimationFrame(this._frameId)
  }
}
