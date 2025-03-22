import useBarcode from "@/hooks/useBarcode";
import { useEffect, useState } from "react";
import { isAndroid, isIOS, isMacOs } from "react-device-detect";

type BarcodeData = {
  appStoreUrl: string;
  playStoreUrl: string;
};

const BarcodeBlock = ({ appStoreUrl, playStoreUrl }: BarcodeData) => {
  const { getBarcodeURL } = useBarcode();
  const [barcodeImgSrc, setBarcodeImgSrc] = useState<string | undefined>(
    undefined
  );

  const drawBarcodeToStore = () => {
    if (isIOS || isMacOs) {
      return getBarcodeURL({ bcid: "qrcode", text: appStoreUrl }).then(
        (res) => {
          return setBarcodeImgSrc(res);
        }
      );
    } else if (isAndroid) {
      return getBarcodeURL({ bcid: "qrcode", text: playStoreUrl }).then(
        (res) => {
          return setBarcodeImgSrc(res);
        }
      );
    }
  };

  const moveToStore = () => {
    if (isIOS || isMacOs) {
      window.open(appStoreUrl, "_blank", "noopener,noreferrer");
      return;
    } else if (isAndroid) {
      window.open(playStoreUrl, "_blank", "noopener,noreferrer");
      return;
    }
    return;
  };

  useEffect(() => {
    drawBarcodeToStore();
  }, []);
  return (
    <div className="flex flex-col items-center gap-2" onClick={moveToStore}>
      {(isIOS || isMacOs || isAndroid) && (
        <img className="size-12 min-w-12" src={barcodeImgSrc} />
      )}
      {(isIOS || isMacOs) && (
        <span className="sr-only sm:not-sr-only sm:text-xs">
          App Store로 이동
        </span>
      )}
      {isAndroid && (
        <span className="sr-only sm:not-sr-only sm:text-xs">
          Play Store로 이동
        </span>
      )}
    </div>
  );
};

export default BarcodeBlock;
