import { useState, useEffect, useCallback } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const getDimensions = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowDimensions({
      width,
      height,
    });
  }, [setWindowDimensions]);

  useEffect(() => {
    getDimensions();
    window.addEventListener("resize", getDimensions);
    return () => window.removeEventListener("resize", getDimensions);
  }, [getDimensions]);

  return [windowDimensions];
};
export default useWindowDimensions;
