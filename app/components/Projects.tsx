import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { first, second, third, fourth, fifth } from "@/images/partners";
import { dealer_0, dealer_1, dealer_2, dealer_3 } from "@/images/delaer";
import { label_0, label_1, label_2 } from "@/images/label";
import BounceCards from "./ui/BounceCards/BounceCards";
import { useEffect, useState } from "react";

export default function Projects() {
  const { ref, animation } = useObserver();

  function getScreenWidth() {
    const { innerWidth: width } = window;
    if (width > 720) return 720;
    return width;
  }
  const [screenWidth, setScreenWidth] = useState<number | undefined>(
    getScreenWidth()
  );
  useEffect(() => {
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            id="0"
            className="overflow-scroll scrollbar-hide"
            images={[first, second, third, fourth, fifth]}
            containerWidth={screenWidth}
            enableHover
            containerHeight={400}
          />
        </li>
        <li className="mb-4 min-h-1/2 flex flex-col gap-1">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Chexcar Dealer App
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            체카의 상품화 서비스를 이용하는 딜러용 앱입니다
          </p>
          <BounceCards
            id="1"
            className="overflow-scroll scrollbar-hide"
            images={[dealer_0, dealer_1, dealer_2, dealer_3]}
            containerWidth={screenWidth}
            enableHover
            containerHeight={400}
          />
        </li>
        <li className="mb-4 min-h-1/2 flex flex-col gap-1">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Label Artist Web
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            라벨을 웹에서 디자인하고 빅솔론 프린터로 출력할 수 있습니다
          </p>
          <BounceCards
            id="2"
            className="overflow-scroll scrollbar-hide"
            images={[label_0, label_1, label_2]}
            enableHover
            containerWidth={screenWidth}
            containerHeight={400}
          />
        </li>
      </ul>
    </motion.section>
  );
}
