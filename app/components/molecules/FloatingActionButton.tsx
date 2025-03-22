import { useState } from "react";
import { Plus, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import tistory from "@/images/tistory.svg";
import githubMark from "@/images/github-mark.svg";
import { BlogURL, GithubURL } from "@/constants";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const ActionButton = ({ icon, color, onClick, label }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="mb-4"
    >
      <Button
        size="icon"
        className={`h-12 w-12 rounded-full shadow-lg bg-${color}-500 hover:bg-${color}-600 transition-colors`}
        onClick={onClick}
        aria-label={label}
        style={{
          borderRadius: "50%",
        }}
      >
        {icon}
      </Button>
    </motion.div>
  );

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
        <AnimatePresence>
          {isOpen && (
            <>
              <ActionButton
                icon={<Mail className="h-6 w-6 text-gray-400" />}
                color="blue"
                onClick={() => (location.href = "mailto:sksyag@naver.com")}
                label="Mail"
              />
              <ActionButton
                icon={<img src={tistory} className="w-6 h-6 inline" />}
                color="green"
                onClick={() =>
                  window.open(BlogURL, "_blank", "noopener,noreferrer")
                }
                label="Blog"
              />
              <ActionButton
                icon={<img src={githubMark} className="w-6 h-6 inline" />}
                color="purple"
                onClick={() =>
                  window.open(GithubURL, "_blank", "noopener,noreferrer")
                }
                label="Github"
              />
            </>
          )}
        </AnimatePresence>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg transition-all hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              backgroundColor: "oklch(0.278 0.033 256.848)", // gray-800
              borderRadius: "50%",
            }}
          >
            <Plus className="size-6 text-white font-bold" />
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default FloatingActionButton;
