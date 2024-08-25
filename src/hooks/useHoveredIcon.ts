import { useState } from "react";

const useHoveredIcon = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string>("");

  const handleMouseEnter = (iconName: string) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  return { hoveredIcon, handleMouseEnter, handleMouseLeave };
};

export default useHoveredIcon;
