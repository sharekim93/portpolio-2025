import useScreenWidth from "@/hooks/useScreenWidth";
import BounceCards from "../ui/BounceCards/BounceCards";
import { label_0, label_1, label_2 } from "@/images/label";
import BarcodeBlock from "../molecules/BarcodeBlock";

const ProjectLabelArtist = () => {
  const APP_STORE_URL = "itms-apps://apps.apple.com/app/id6499504605";
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.bixolon.labelartistweb";
  const { screenWidth } = useScreenWidth();
  return (
    <li className="mb-4 min-h-1/2 flex flex-col gap-1">
      <div className="flex gap-16 justify-between max-w-xs sm:max-w-xl">
        <div className="flex flex-col">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Label Artist Web
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            라벨을 웹에서 디자인하고 빅솔론 프린터로 출력할 수 있습니다
          </p>
        </div>
        <BarcodeBlock
          appStoreUrl={APP_STORE_URL}
          playStoreUrl={PLAY_STORE_URL}
        />
      </div>
      <BounceCards
        id="2"
        className="overflow-scroll scrollbar-hide"
        images={[label_0, label_1, label_2]}
        enableHover
        containerWidth={screenWidth}
        containerHeight={400}
      />
    </li>
  );
};

export default ProjectLabelArtist;
