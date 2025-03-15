import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";

export default function About() {
  const { ref, animation } = useObserver();

  return (
    <motion.section
      id="about"
      title="About"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
      className="w-full h-full min-h-screen flex flex-col justify-center items-start gap-4"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground ">About</h2>
      <p className="text-sm md:text-lg leading-relaxed">
        좁게는 React 등 웹 개발에, 넓게는 하이브리드 앱을 포함한 클라이언트
        개발자를 지향하고 있습니다.
      </p>
      <p className="text-sm md:text-lg leading-relaxed">
        개발 및 유지비용을 최소화하고 사용자에게는 좋은 UX를 제공하는 개발자가
        되고자 합니다.
      </p>
    </motion.section>
  );
}
