import { useEffect, useState } from "react";

export const useIsNotHover = () => {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHover("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }
  }, []);
  return { isHover, setIsHover };
};
