export default class Snowflake {
  public x: any;
  public y: any;
  public length: any;
  public opacity: any;
  public factor: any;
  public increment: any;
  public vx: any;
  public vy: any;
  public canvas: any;
  public context: any;

  constructor(x: any, y: any, length: any, opacity: any, canvas: any) {
    this.x = parseInt(x, 0);
    this.y = parseInt(y, 0);
    this.length = parseInt(length, 0);
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * 0.03;
    this.vx = Math.random() * 5 - 2;
    this.vy = Math.random() * 2 - 1;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
  }

  public draw() {
    this.context.rotate(Math.PI * 1 / 10);

    // move star
    this.x += this.vx;
    this.y += this.vy;

    // dave the context
    this.context.save();

    // move into the middle of the canvas, just to make room
    this.context.translate(this.x, this.y);

    // change the opacity
    if (this.opacity > 1) {
      this.factor = -1;
    } else if (this.opacity <= 0) {
      this.factor = 1;

      this.x = Math.round(Math.random() * this.canvas.width);
      this.y = Math.round(Math.random() * this.canvas.height);
    }

    this.opacity += this.increment * this.factor;

    this.context.beginPath();
    for (let i = 5; i--; ) {
      this.context.lineTo(0, this.length);
      this.context.translate(0, this.length);
      this.context.rotate(Math.PI * 2 / 10);
      this.context.lineTo(0, -this.length);
      this.context.translate(0, -this.length);
      this.context.rotate(-(Math.PI * 6 / 10));
    }
    this.context.lineTo(0, this.length);
    this.context.closePath();
    this.context.fillStyle = 'rgba(219, 163, 255, ' + this.opacity + ')';
    this.context.shadowBlur = 5;
    this.context.shadowColor = 'white';
    this.context.fill();

    this.context.restore();
  }
}
