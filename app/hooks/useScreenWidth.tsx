import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(
    getScreenWidth()
  );

  function getScreenWidth() {
    if (window?.innerWidth > 720) return 720;
    return window?.innerWidth;
  }

  useEffect(() => {
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    window?.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenWidth };
};

export default useScreenWidth;
