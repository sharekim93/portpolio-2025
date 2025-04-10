import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import githubMark from "@/images/github-mark.svg";
import tistory from "@/images/tistory.svg";

export default function Contact() {
  const { ref, animation } = useObserver();
  return (
    <motion.section
      id="info"
      title="info"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
      className="container w-full h-full min-h-screen flex flex-col align-start mt-20"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground self-start">
        Info
      </h2>
      <div className="w-auto mt-4 flex flex-col gap-2 text-md md:text-lg">
        <div className="flex flex-initial">
          <p className="leading-relaxed text-gray-600 text-right pr-2 ">
            Email :
          </p>
          <a href="mailto:sksyag@naver.com">sksyag@naver.com</a>
        </div>
        <div className="flex flex-initia ">
          <p className="leading-relaxed text-gray-600 text-right pr-2 ">
            Github :
          </p>
          <a className="" href="https://github.com/sharekim93">
            <img src={githubMark} className="w-6 h-6 inline" />
          </a>
        </div>
        <div className="flex flex-initial">
          <p className="leading-relaxed text-gray-600 text-right pr-2">
            blog :
          </p>
          <a href="https://sharekim-dev.tistory.com">
            <img src={tistory} className="w-6 h-6 inline" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
