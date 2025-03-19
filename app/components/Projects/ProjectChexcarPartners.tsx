import React from "react";
import BounceCards from "../ui/BounceCards/BounceCards";
import { first, second, third, fourth, fifth } from "@/images/partners";
import useScreenWidth from "@/hooks/useScreenWidth";

const ProjectChexcarPartners = () => {
  const { screenWidth } = useScreenWidth();

  return (
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
  );
};

export default ProjectChexcarPartners;
