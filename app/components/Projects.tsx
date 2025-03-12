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
      <ul className="list-image-none list-inside gap-4">
        <li className="mb-4">
          <h3 className="text-xl font-semibold text-foreground">
            Chexcar Partners App
          </h3>
          <p className="leading-relaxed">
            체카 협력사 및 내부 작업자, 운영자를 위한 상품화 프로세스 앱입니다
          </p>

          <BounceCards
            className="w-full flex justify-center"
            images={[first, second, third, fourth, fifth]}
            enableHover
            containerWidth={document.body.clientWidth / 2 || 600}
            containerHeight={400}
          />
        </li>
        <li className="mb-4 min-h-1/2">
          <h3 className="text-xl font-semibold text-foreground">
            Chexcar Dealer App
          </h3>
          <p className="leading-relaxed">
            체카의 상품화 서비스를 이용하는 딜러용 앱입니다
          </p>
        </li>
        <li className="mb-4 min-h-1/2">
          <h3 className="text-xl font-semibold text-foreground">
            Label Artist Web
          </h3>
          <p className="leading-relaxed">
            라벨을 웹에서 디자인하고 빅솔론 프린터로 출력할 수 있습니다
          </p>
        </li>
      </ul>
    </motion.section>
  );
}
