import { useState } from "react";
import { NavWrapper } from "./styled";
import AppLink from "../app-link";

const Navigation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const currentPath = window.location.pathname;

  const navigation = [
    { href: "/home", text: "הכל" },
    { href: "/nets", text: "זכוכיות" },
    { href: "/shower-enclosures", text: "מקלחונים" },
    { href: "/aluminum", text: "אלומיניום" },
    { href: "/glass", text: "זכוכית" },
  ];

  return (
    <NavWrapper>
      {navigation.map(({ href, text }, index) => {
        const isHovered = hoveredIndex === index;
        const isHighlight = hoveredIndex !== null && isHovered;
        const isActive = currentPath === href;

        return (
          <AppLink
            key={href}
            href={href}
            text={text}
            isActive={isActive}
            isHighlight={isHighlight}
            showUnderline={(hoveredIndex !== null && isHighlight) || (hoveredIndex === null && isActive)}
            handleMouseEnter={() => setHoveredIndex(index)}
            handleMouseLeave={() => setHoveredIndex(null)}
          />
        );
      })}
    </NavWrapper>
  );
};

export default Navigation;
