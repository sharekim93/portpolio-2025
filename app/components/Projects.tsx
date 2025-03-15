import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { first, second, third, fourth, fifth } from "@/images/partners";
import BounceCards from "./ui/BounceCards/BounceCards";

export default function Projects() {
  const { ref, animation } = useObserver();

  return (
    <motion.section
      id="projects"
      title="Projects"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
      className="container w-full h-full min-h-screen flex flex-col justify-center items-start"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground">Projects</h2>
      <ul className="list-image-none list-inside gap-4 mt-4">
        <li className="mb-4 flex flex-col gap-1">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Chexcar Partners App
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            체카 협력사 및 내부 작업자, 운영자를 위한 상품화 프로세스 앱입니다
          </p>

          <BounceCards
            className="w-screen flex justify-end overflow-scroll scrollbar-hide"
            images={[first, second, third, fourth, fifth]}
            containerWidth={340}
            enableHover
          />
        </li>
        <li className="mb-4 min-h-1/2 flex flex-col gap-1">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Chexcar Dealer App
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            체카의 상품화 서비스를 이용하는 딜러용 앱입니다
          </p>
        </li>
        <li className="mb-4 min-h-1/2 flex flex-col gap-1">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Label Artist Web
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            라벨을 웹에서 디자인하고 빅솔론 프린터로 출력할 수 있습니다
          </p>
        </li>
      </ul>
    </motion.section>
  );
}
