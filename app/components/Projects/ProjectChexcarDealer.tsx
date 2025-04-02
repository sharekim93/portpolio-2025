import useScreenWidth from "@/hooks/useScreenWidth";
import BounceCards from "../ui/BounceCards/BounceCards";
import { dealer_0, dealer_1, dealer_2, dealer_3 } from "@/images/dealer";
import BarcodeBlock from "../molecules/BarcodeBlock";

const ProjectChexcarDealer = () => {
  const APP_STORE_URL = "itms-apps://apps.apple.com/app/id6739524233";
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=kr.co.chexcar.dealer";
  const { screenWidth } = useScreenWidth();
  return (
    <li className="mb-4 min-h-1/2 flex flex-col gap-1">
      <div className="flex gap-16 justify-between max-w-xs sm:max-w-xl">
        <div className="flex flex-col">
          <h3 className="text-lg md:text-2xl font-semibold text-foreground">
            Chexcar Dealer App
          </h3>
          <p className="leading-relaxed text-sm md:text-lg">
            체카의 상품화 서비스를 이용하는 딜러용 앱입니다
          </p>
        </div>
        <BarcodeBlock
          appStoreUrl={APP_STORE_URL}
          playStoreUrl={PLAY_STORE_URL}
        />
      </div>
      {/* <BounceCards
        id="1"
        className="overflow-scroll scrollbar-hide"
        images={[dealer_0, dealer_1, dealer_2, dealer_3]}
        containerWidth={screenWidth}
        enableHover
        containerHeight={400}
      /> */}
    </li>
  );
};

export default ProjectChexcarDealer;
