import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import arrowDown from "@/images/arrow-down.svg";
import { useEffect, useState, useRef } from "react";

export default function ScrollDown() {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [timerId, setTimerId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      const lastSectionHeight = document.getElementById("info")?.clientHeight;

      if (
        lastSectionHeight &&
        // 가장 아래까지 스크롤 했을 때의 ScrollY 는 body.clientHeight - lastSectionHeight 이다
        // 따라서 Contact Section의 시작 Y값보다 ScrollY 가 커지면 clearTimeout
        window.scrollY > document.body.clientHeight - lastSectionHeight * 2
      ) {
        clearTimeout(timerId);
        return;
      }

      const id = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      setTimerId(id);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsVisible(true);
    };
  }, []);

  const down = () => {
    const sections = document.querySelectorAll("section");
    const currentSectionIndex = Array.from(sections).findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    });

    if (
      currentSectionIndex !== -1 &&
      currentSectionIndex < sections.length - 1
    ) {
      sections[currentSectionIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <motion.div
      ref={scrollRef}
      variants={fadeIn}
      animate={isVisible ? "visible" : "hidden"}
      initial="hidden"
      className={`fixed bottom-12 left-0 right-0 flex justify-center gap-2 w-full mt-16 pt-8 select-none   ${
        isVisible && "hover:cursor-pointer"
      }`}
      onClick={down}
    >
      <img
        src={arrowDown}
        alt="arrow-down"
        className="w-8 h-8 animate-bounce fill-gray-300"
      />
      <p className="h-8 text-lg text-gray-600 self-start">Scroll down</p>
    </motion.div>
  );
}
