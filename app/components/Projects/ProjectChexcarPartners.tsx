import BounceCards from "../ui/BounceCards/BounceCards";
import { first, second, third, fourth, fifth } from "@/images/partners";
import useScreenWidth from "@/hooks/useScreenWidth";
import BarcodeBlock from "../molecules/BarcodeBlock";

const ProjectChexcarPartners = () => {
  const APP_STORE_URL = "itms-apps://apps.apple.com/app/id6739533256";
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=kr.co.chexcar.partners";

  const { screenWidth } = useScreenWidth();

  return (
    <li className="mb-4 flex flex-col gap-1">
      <div className="flex gap-16 max-w-xs sm:max-w-xl justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Chexcar Partners App
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            체카 협력사 및 내부 작업자, 운영자를 위한 상품화 프로세스 앱입니다
          </p>
        </div>
        <BarcodeBlock
          appStoreUrl={APP_STORE_URL}
          playStoreUrl={PLAY_STORE_URL}
        />
      </div>
      {/* <BounceCards
        id="0"
        className="overflow-scroll scrollbar-hide"
        images={[first, second, third, fourth, fifth]}
        containerWidth={screenWidth && screenWidth * 0.8}
        enableHover
        containerHeight={400}
      /> */}
    </li>
  );
};

export default ProjectChexcarPartners;
