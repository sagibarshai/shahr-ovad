import { NavWrapper, DesktopNav } from "./styled";
import AppLink from "../app-link";

const Navigation: React.FC = () => {
  const currentPath = window.location.hash.replace(/^#/, "");

  const navigation = [
    { href: "/glass", text: "מעקות מזכוכית" },
    { href: "/shower-enclosures", text: "מקלחונים" },
    { href: "/aluminum", text: "רשתות ואלומיניום" },
  ];

  const navLinks = navigation.map(({ href, text }) => {
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
      <DesktopNav>{navLinks}</DesktopNav>
    </NavWrapper>
  );
};

export default Navigation;
