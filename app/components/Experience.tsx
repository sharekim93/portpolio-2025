import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
export default function Experience() {
  const { ref, animation } = useObserver();
  return (
    <motion.section
      id="experience"
      title="Experience"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
      className="container w-full h-full min-h-screen flex flex-col justify-center items-start"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground">Experience</h2>
      <h4 className="text-md md:text-lg text-gray-600">경력 : 만 3년</h4>
      <ul className="list-image-none mt-8 flex flex-col gap-4">
        <li className="mb-4">
          <h3 className="text-md md:text-xl font-semibold text-foreground whitespace-pre md:whitespace-normal">
            Frontend Developer, CHEXCAR{`\r\n`}(2024.07 ~ 2025.03, 9개월)
          </h3>
          <p className="leading-relaxed text-sm md:text-lg text-gray-600 mt-1.5">
            중고차 상품화 프로세스에 맞춰 고객 및 파트너가 사용할 수 있는 웹앱을
            개발하였습니다.
          </p>
        </li>
        <li className="mb-4">
          <h3 className="text-md md:text-xl font-semibold text-foreground whitespace-pre md:whitespace-normal">
            Software Engineer, BIXOLON{`\r\n`}(2021.04 ~ 2024.07, 2년 3개월)
          </h3>
          <p className="leading-relaxed text-sm md:text-lg mt-1.5 text-gray-600">
            라벨 디자인 웹앱 Label Artist Web 개발
            <br />
            웹 기반 프린팅 SDK Web Print SDK 개발
            <br />
            React Native, Xamarin, Cordova SDK 개발
          </p>
        </li>
        {/* 추가적인 경험을 여기에 나열할 수 있습니다. */}
      </ul>
    </motion.section>
  );
}
