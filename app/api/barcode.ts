import { BarcodeOption } from "@/type";
import ky from "ky";

export const getBarcode = async (options: BarcodeOption) => {
  return await ky
    .get("https://bwipjs-api.metafloor.com", { searchParams: options })
    .blob();
};
