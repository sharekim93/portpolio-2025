export default class PinkPetal {
  private x = 0;
  private y = 0;
  private size = 20;
  private vx = 0;
  private vy = 1;
  private opacity = 1;
  private color = "#FFB7C5";
  private swingFactor = Math.random() * 0.001 + 0.001;
  private swingOffset = Math.random() * Math.PI * 1;
  private swingAngle = 0;
  private swingRange = Math.random() * 1 + 1;
  private gravity = 0.01;
  private maxVelocity = 2;

  // 다양한 핑크 색상 배열
  private static pinkColors = [
    "#FFB7C5", // 연한 핑크
    "#FF9EB5", // 중간 핑크
    "#FF85A6", // 진한 핑크
    "#FFC0CB", // 파스텔 핑크
    "#FFD1DC", // 아주 연한 핑크
  ];

  constructor(
    x: number,
    y: number,
    size: number,
    vx: number,
    vy: number,
    color?: string
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = vx;
    this.vy = vy;
    // 색상이 지정되지 않은 경우 랜덤하게 핑크 색상 선택
    this.color =
      color ||
      PinkPetal.pinkColors[
        Math.floor(Math.random() * PinkPetal.pinkColors.length)
      ];
    this.opacity = Math.random() * 0.3 + 0.7; // 0.7 ~ 1.0 사이의 투명도
  }

  update(time: number) {
    // 회전 대신 좌우 스윙 각도 업데이트
    this.swingAngle =
      Math.sin(time * this.swingFactor + this.swingOffset) * this.swingRange;

    // 중력 효과 적용 (속도 제한)
    this.vy += this.gravity;
    if (this.vy > this.maxVelocity) {
      this.vy = this.maxVelocity;
    }

    // 좌우 흔들림 효과 (사인파 이용) - 더 큰 폭으로 수정
    this.x +=
      this.vx +
      Math.sin(time * this.swingFactor + this.swingOffset) *
        2.5 *
        Math.random();
    this.y += this.vy;

    // 투명도 변화 (살짝 깜빡이는 효과)
    this.opacity = 0.7 + Math.sin(time * 0.002) * 0.15 + 0.15;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      ctx.save();

      // 블러 필터 적용
      ctx.filter = "blur(0.5px)";

      // 꽃잎 위치로 이동
      ctx.translate(this.x, this.y);

      // 회전 대신 스윙 각도 적용
      ctx.rotate(this.swingAngle);

      // 투명도 설정
      ctx.globalAlpha = this.opacity;

      // 꽃잎 그리기 (타원형 꽃잎)
      ctx.fillStyle = this.color;
      ctx.beginPath();

      // 타원형 꽃잎 그리기
      ctx.ellipse(0, 0, this.size, this.size / 1.8, 0, 0, Math.PI * 2);
      ctx.fill();

      // 꽃잎에 약간의 그라데이션 효과 추가
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
      gradient.addColorStop(0, this.lightenColor(this.color, 20));
      gradient.addColorStop(1, this.color);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.8, this.size / 2.2, 0, 0, Math.PI * 2);
      ctx.fill();

      // 필터 초기화
      ctx.filter = "none";

      ctx.restore();
    }
  }

  // 색상을 밝게 만드는 헬퍼 함수
  private lightenColor(color: string, percent: number): string {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00ff) + amt);
    const B = Math.min(255, (num & 0x0000ff) + amt);
    return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
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
