import CustomFallback from "@/components/CustomFallback";
import Intro from "@/components/Intro";
import ScrollDown from "@/components/ScrollDown";
import { Suspense, lazy } from "react";

const HomePage = () => {
  const AboutComponent = lazy(() => import("@/components/About"));
  const ExperienceComponent = lazy(() => import("@/components/Experience"));
  const ProjectsComponent = lazy(() => import("@/components/Projects"));
  const InfoComponent = lazy(() => import("@/components/Info"));

  return (
    <div className="container w-full h-full px-20">
      <Intro />
      <Suspense fallback={<CustomFallback />}>
        <AboutComponent />
      </Suspense>
      <Suspense fallback={<CustomFallback />}>
        <ExperienceComponent />
      </Suspense>
      <Suspense fallback={<CustomFallback />}>
        <ProjectsComponent />
      </Suspense>
      <Suspense fallback={<CustomFallback />}>
        <InfoComponent />
      </Suspense>
      <ScrollDown />
    </div>
  );
};

export default HomePage;
