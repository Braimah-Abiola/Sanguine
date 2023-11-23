import useMouse from "@react-hook/mouse-position";
import React from "react";

export const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = mouse.clientX !== null ? mouse.clientX : 0;
  let mouseYPosition = mouse.clientY !== null ? mouse.clientY : 0;

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      backgroundColor: "#000000",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};
