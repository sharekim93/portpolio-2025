import { motion } from "framer-motion";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";

import ProjectChexcarDealer from "./ProjectChexcarDealer";
import ProjectChexcarPartners from "./ProjectChexcarPartners";
import ProjectLabelArtist from "./ProjectLabelArtist";

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
        <ProjectChexcarPartners />
        <ProjectChexcarDealer />
        <ProjectLabelArtist />
      </ul>
    </motion.section>
  );
}
