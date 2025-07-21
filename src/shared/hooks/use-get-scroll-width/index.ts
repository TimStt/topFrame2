import { createElement, useEffect } from "react";
import style from "styled-jsx/style";

export const useGetScrollWidth = () => {
  useEffect(() => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText =
      "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    document.body.style.setProperty("--scroll-width", `${scrollbarWidth}px`);
  }, []);
};
