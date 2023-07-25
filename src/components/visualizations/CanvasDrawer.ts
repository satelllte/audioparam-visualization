import resolveConfig from 'tailwindcss/resolveConfig';
import twConfig from '@/../tailwind.config';

const tailwindConfig = resolveConfig(twConfig);

const lineColor = tailwindConfig.theme?.colors?.accent.toString() || '#FFFFFF';

export class CanvasDrawer {
  private readonly _canvas: HTMLCanvasElement;
  private readonly _context: CanvasRenderingContext2D;
  private _xPrev = 0;
  private _yPrev = 0;
  private _x = 0;
  private _y = 0;
  private _frameId: number | undefined = undefined;

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Could not get 2d context from canvas');
    }

    this._canvas = canvas;
    this._context = context;
  }

  /**
   * @param {number} x - time progress in [0, 1] range
   * @param {number} y - value progress in [0, 1] range
   * @returns {void}
   */
  public updateValues(x: number, y: number): void {
    this._xPrev = this._x;
    this._yPrev = this._y;
    this._x = x;
    this._y = y;
  }

  public start(drawCallback: () => void) {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    const draw = () => {
      this._context.strokeStyle = lineColor;
      this._context.lineWidth = 5;
      this._context.beginPath();
      const x1 = Math.round(this._xPrev * this._canvas.width);
      const x2 = Math.round(this._x * this._canvas.width);
      const y1 = Math.round((1 - this._yPrev) * this._canvas.height);
      const y2 = Math.round((1 - this._y) * this._canvas.height);
      this._context.moveTo(x1, y1);
      this._context.lineTo(x2, y2);
      this._context.stroke();

      drawCallback();

      this._frameId = requestAnimationFrame(draw);
    };

    this._frameId = requestAnimationFrame(draw);
  }

  public stop() {
    if (!this._frameId) {
      return;
    }

    cancelAnimationFrame(this._frameId);
  }
}
