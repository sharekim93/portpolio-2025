import CustomFallback from "@/components/CustomFallback";
import Intro from "@/components/Intro";
import ScrollDown from "@/components/ScrollDown";
import { Suspense, lazy } from "react";

const HomePage = () => {
  const SkillsComponent = lazy(() => import("@/components/Skills"));
  const ExperienceComponent = lazy(() => import("@/components/Experience"));
  const ProjectsComponent = lazy(() => import("@/components/Projects"));
  const FloatingActionButtonComponent = lazy(
    () => import("@/components/molecules/FloatingActionButton")
  );
  const CanvasArea = lazy(() => import("@/components/molecules/CanvasArea"));

  return (
    <div className="container w-screen h-full px-8 md:px-20">
      <Intro />
      <Suspense fallback={<CustomFallback />}>
        <SkillsComponent />
      </Suspense>
      <Suspense fallback={<CustomFallback />}>
        <ExperienceComponent />
      </Suspense>
      <Suspense fallback={<CustomFallback />}>
        <ProjectsComponent />
      </Suspense>
      <Suspense fallback={<CustomFallback />}>
        <FloatingActionButtonComponent />
      </Suspense>
      <Suspense fallback={<CustomFallback />}>
        <CanvasArea />
      </Suspense>
      <ScrollDown />
    </div>
  );
};

export default HomePage;
