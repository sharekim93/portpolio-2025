import { useCallback, useEffect, useRef } from "react";
import CherryBlossom from "@/utils/canvas/CherryBlossom";

const CanvasArea = () => {
  const requestRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blossomsRef = useRef<CherryBlossom[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const randomNumBetween = (min: number, max: number) => {
    return Math.random() * (max - min + 1) + min;
  };

  const handleResize = useCallback(() => {
    if (canvasRef.current && window) {
      const ratio = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * ratio;
      canvasRef.current.height = window.innerHeight * ratio;
    }

    // 변경된 사이즈에 맞게 blossom 의 위치를 재배치한다 (자연스러움을 위해)
    blossomsRef.current.forEach((blossom) => {
      const ratio = window.devicePixelRatio || 1;
      blossom.setX(randomNumBetween(0, window.innerWidth * ratio));
    });
  }, []);

  const init = () => {
    handleResize();
    if (canvasRef.current && window) {
      canvasRef.current.style.position = "fixed";
      canvasRef.current.style.zIndex = "-1";
      canvasRef.current.style.top = "0";
      canvasRef.current.style.left = "0";
      canvasRef.current.style.backgroundColor = "#FAF9F6";

      ctxRef.current = canvasRef.current.getContext("2d", { alpha: false });
    }
  };

  const generateBlossoms = useCallback(() => {
    const temporalBlossoms = [];
    const blossomCount = window.innerWidth < 768 ? 5 : 10; // 모바일에서는 더 적게

    for (let i = 0; i < blossomCount; i++) {
      const x = randomNumBetween(0, window.innerWidth);
      const y = randomNumBetween(-200, window.innerHeight);
      const size = randomNumBetween(10, 20);
      const vx = randomNumBetween(-0.2, 0.2);
      const vy = randomNumBetween(0.5, 2);
      const rotationSpeed = 0.08;

      // 색상 다양화
      const colors = ["#FFB7C5", "#FFCCCC", "#FFC0CB", "#FFD1DC", "#FFC6D5"];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const blossom = new CherryBlossom(
        x,
        y,
        size,
        vx,
        vy,
        rotationSpeed,
        color
      );
      temporalBlossoms.push(blossom);
    }

    blossomsRef.current = temporalBlossoms;
  }, []);

  const animate = useCallback((timestamp: DOMHighResTimeStamp) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    const ratio = window.devicePixelRatio || 1;
    const canvasWidth = window.innerWidth * ratio;
    const canvasHeight = window.innerHeight * ratio;

    // 화면 지우기
    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 성능 최적화: 화면 밖 파티클은 업데이트만 하고 그리지 않음
    blossomsRef.current.forEach((blossom) => {
      blossom.update(timestamp);

      const x = blossom.getX();
      const y = blossom.getY();
      const size = blossom.getSize();

      // 화면에 보이는 파티클만 그리기
      if (
        x + size > 0 &&
        x - size < canvasWidth &&
        y + size > 0 &&
        y - size < canvasHeight
      ) {
        blossom.draw(ctx);
      }

      // 화면 밖으로 나간 파티클 재활용
      if (y - size > canvasHeight) {
        blossom.setY(-size * 2);
        blossom.setX(randomNumBetween(0, canvasWidth));
        blossom.setVy(randomNumBetween(0.5, 2));
      }
    });
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    init();
    generateBlossoms();

    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, [init, generateBlossoms, animate, handleResize]);

  return <canvas ref={canvasRef} />;
};

export default CanvasArea;
