export default class Particle {
  private x = 0;
  private y = 0;
  private radius = (Math.PI / 180) * 360;
  private vy = 1;
  private acc = 1.03;

  constructor(x: number, y: number, radius: number, vy: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vy = vy;
  }

  update() {
    this.vy = this.acc;
    this.y = this.vy;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 360);
      ctx.fillStyle = "orange";
      ctx.fill();
      ctx.closePath();
    }
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getRadius() {
    return this.radius;
  }

  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }

  setVy(vy: number) {
    this.vy = vy;
  }
}
