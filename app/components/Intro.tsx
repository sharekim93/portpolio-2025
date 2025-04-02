import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";

export default function Intro() {
  const { ref, animation } = useObserver();

  return (
    <>
      <motion.section
        title="Intro"
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={fadeIn}
        transition={{ duration: 1.5 }}
        className="container w-full h-full min-h-screen flex flex-col justify-center items-start"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frontend Developer, Share Kim
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-md md:text-lg mt-8 text-gray-600">
            안녕하세요, Frontend 개발자 김나눔입니다.
          </p>
          <p className="text-md md:text-lg text-gray-600">
            Performance, User Experience, Developer Experience 를 중요하게
            생각합니다.
          </p>
          <p className="text-md md:text-lg text-gray-600">
            그 중, 비즈니스 문제 해결을 가장 중요하게 생각합니다.
          </p>
        </div>
      </motion.section>
    </>
  );
}
