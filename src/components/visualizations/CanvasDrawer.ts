export class CanvasDrawer {
  private _canvas: HTMLCanvasElement
  private _context: CanvasRenderingContext2D
  private _progressXPrev: number = 0
  private _progressYPrev: number = 0
  private _progressX: number = 0
  private _progressY: number = 0
  private _frameId: number | null = null

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d')

    if (!context) {
      throw new Error('Could not get 2d context from canvas')
    }

    this._canvas = canvas
    this._context = context
  }

  public updateValues(progressX: number, progressY: number) {
    this._progressXPrev = this._progressX
    this._progressYPrev = this._progressY
    this._progressX = progressX
    this._progressY = progressY
  }

  public start(drawCallback: () => void) {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)

    const draw = () => {
      this._context.strokeStyle = '#ffffff'
      this._context.lineWidth = 1
      this._context.beginPath()
      this._context.moveTo(this._progressXPrev * this._canvas.width, (1 - this._progressYPrev) * this._canvas.height)
      this._context.lineTo(this._progressX * this._canvas.width, (1 - this._progressY) * this._canvas.height)
      this._context.stroke()
  
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
