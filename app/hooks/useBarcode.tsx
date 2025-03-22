import { getBarcode } from "@/api/barcode";
import { BarcodeOption } from "@/type";
import { useEffect, useState } from "react";

const useBarcode = () => {
  const [urls, setUrls] = useState<string[]>([]);

  const getBarcodeURL = async (options: BarcodeOption) => {
    let url = "";
    return getBarcode(options).then((res) => {
      url = window?.URL.createObjectURL(res);

      if (url && url.length !== 0) {
        setUrls((prev) => {
          return [...prev, url];
        });
        return url;
      } else throw new Error("URL is undefined");
    });
  };

  const getBarcodeImage = async (options: BarcodeOption) => {
    const barcodeImage = new Image();
    barcodeImage.src = await getBarcodeURL(options);
    return barcodeImage;
  };

  useEffect(() => {
    // unmount 시 생성된 URL 초기화
    return urls.forEach((url) => {
      if (url) {
        window?.URL.revokeObjectURL(url);
      }
    });
  }, []);

  return { getBarcodeImage, getBarcodeURL };
};

export default useBarcode;
