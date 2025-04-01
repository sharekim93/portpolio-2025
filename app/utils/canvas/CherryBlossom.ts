export default class CherryBlossom {
  private x = 0;
  private y = 0;
  private size = 15;
  private angle = 0;
  private vx = 0;
  private vy = 1;
  private rotationSpeed = 0.01;
  private opacity = 1;
  private color = "#FFB7C5";
  private swingFactor = 0.03;
  private swingOffset = Math.random() * Math.PI * 2;

  constructor(
    x: number,
    y: number,
    size: number,
    vx: number,
    vy: number,
    rotationSpeed: number,
    color: string = "#FFB7C5"
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = vx;
    this.vy = vy;
    this.rotationSpeed = rotationSpeed;
    this.color = color;
    this.angle = Math.random() * Math.PI * 2;
    this.opacity = Math.random() * 0.5 + 0.5;
  }

  update(time: number) {
    // 회전 업데이트
    this.angle += this.rotationSpeed;

    // 좌우 흔들림 효과 (사인파 이용)
    this.x +=
      this.vx + Math.sin(time * this.swingFactor + this.swingOffset) * 0.5;
    this.y += this.vy;

    // 투명도 변화 (살짝 깜빡이는 효과)
    this.opacity = 0.5 + Math.sin(time * 0.001) * 0.2 + 0.3;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      ctx.save();

      // 꽃잎 위치로 이동
      ctx.translate(this.x, this.y);

      // 회전 적용
      ctx.rotate(this.angle);

      // 투명도 설정
      ctx.globalAlpha = this.opacity;

      // 꽃잎 그리기 (5개의 꽃잎)
      const petalCount = 5;
      const petalSize = this.size;

      ctx.fillStyle = this.color;

      for (let i = 0; i < petalCount; i++) {
        ctx.beginPath();
        ctx.ellipse(
          petalSize / 2,
          0,
          petalSize / 2,
          petalSize / 4,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.rotate((Math.PI * 2) / petalCount);
      }

      // 꽃 중앙 그리기
      ctx.fillStyle = "#FFEF9F";
      ctx.beginPath();
      ctx.arc(0, 0, petalSize / 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  // 게터 메서드
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getSize() {
    return this.size;
  }

  // 세터 메서드
  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }

  setSize(size: number) {
    this.size = size;
  }

  setVx(vx: number) {
    this.vx = vx;
  }

  setVy(vy: number) {
    this.vy = vy;
  }

  setColor(color: string) {
    this.color = color;
  }

  setOpacity(opacity: number) {
    this.opacity = opacity;
  }
}
