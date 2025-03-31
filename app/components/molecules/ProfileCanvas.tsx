import { useEffect, useRef, useState } from "react";
import Particle from "@/utils/Particle";

const ProfileCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [then, setThen] = useState(0);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const randomNumBetween = (min: number, max: number) => {
    return Math.random() * (max - min + 1) + min;
  };

  const handleResize = () => {
    if (canvasRef.current && window) {
      const ratio = window.devicePixelRatio;
      canvasRef.current.width = window.innerWidth * ratio;
      canvasRef.current.height = window.innerHeight * ratio;
    }
  };

  const init = () => {
    handleResize();
    if (canvasRef.current && window) {
      canvasRef.current.style.position = "fixed";
      canvasRef.current.style.zIndex = "-1";
      canvasRef.current.style.top = "0";
      canvasRef.current.style.left = "0";

      setCtx(canvasRef.current.getContext("2d"));
      setThen(Date.now());
    }
  };

  const appendParticles = () => {
    const temporalParticles = [];

    for (let i = 0; i < 10; i++) {
      const x = randomNumBetween(0, innerWidth);
      const y = randomNumBetween(0, innerHeight);
      const radius = randomNumBetween(50, 100);
      const vy = randomNumBetween(1, 5);
      const particle = new Particle(x, y, radius, vy);
      temporalParticles.push(particle);
    }

    setParticles(temporalParticles);
  };

  const animate = () => {
    requestAnimationFrame(animate);

    let now = Date.now();
    let delta = now - then;
    let interval = 1000 / 60;

    let ratio = window.devicePixelRatio;
    let canvasWidth = innerWidth * ratio;
    let canvasHeight = innerHeight * ratio;

    if (delta < interval) return;

    ctx?.clearRect(0, 0, canvasWidth, canvasHeight);

    particles.forEach((particle) => {
      particle.update();
      particle.draw(ctx);

      if (particle.getY() - particle.getRadius() > canvasHeight) {
        particle.setY(-particle.getRadius());
        particle.setX(randomNumBetween(0, canvasWidth));
        particle.setRadius(randomNumBetween(50, 100));
        particle.setVy(randomNumBetween(1, 5));
      }
    });

    setThen(now - (delta % interval));
  };

  useEffect(() => {
    init();
    appendParticles();

    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ProfileCanvas;
