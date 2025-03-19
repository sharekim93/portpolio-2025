import useScreenWidth from "@/hooks/useScreenWidth";
import BounceCards from "../ui/BounceCards/BounceCards";
import { dealer_0, dealer_1, dealer_2, dealer_3 } from "@/images/dealer";

const ProjectChexcarDealer = () => {
  const { screenWidth } = useScreenWidth();
  return (
    <li className="mb-4 min-h-1/2 flex flex-col gap-1">
      <h3 className="text-lg md:text-2xl font-semibold text-foreground">
        Chexcar Dealer App
      </h3>
      <p className="leading-relaxed text-sm md:text-lg">
        체카의 상품화 서비스를 이용하는 딜러용 앱입니다
      </p>
      <BounceCards
        id="1"
        className="overflow-scroll scrollbar-hide"
        images={[dealer_0, dealer_1, dealer_2, dealer_3]}
        containerWidth={screenWidth}
        enableHover
        containerHeight={400}
      />
    </li>
  );
};

export default ProjectChexcarDealer;
