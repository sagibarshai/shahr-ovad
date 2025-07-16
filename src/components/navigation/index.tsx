import { useState } from "react";
import { NavWrapper, BurgerButton, MobileMenu, CloseButton, DesktopNav } from "./styled";
import AppLink from "../app-link";

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.hash.replace(/^#/, "");

  const navigation = [
    { href: "/glass", text: "מעקות מזכוכית" },
    { href: "/shower-enclosures", text: "מקלחונים" },
    { href: "/aluminum", text: "ורשתות אלומיניום" },
  ];

  const navLinks = navigation.map(({ href, text }, index) => {
    const isActive = currentPath === href;
    return (
      <AppLink
        key={href}
        href={href}
        text={text}
        isActive={isActive}
        isHighlight={false}
        showUnderline={isActive}
        handleMouseEnter={() => {}}
        handleMouseLeave={() => {}}
      />
    );
  });

  return (
    <NavWrapper>
      {/* Desktop */}
      <DesktopNav>{navLinks}</DesktopNav>

      {/* Mobile Burger Button */}
      <BurgerButton onClick={() => setMenuOpen(true)}>☰</BurgerButton>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu>
          <CloseButton onClick={() => setMenuOpen(false)}>×</CloseButton>
          {navLinks}
        </MobileMenu>
      )}
    </NavWrapper>
  );
};

export default Navigation;
