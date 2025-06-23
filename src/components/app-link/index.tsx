import { AppLinkProps, StyledLink, Underline } from "./styled";

const AppLink: React.FC<AppLinkProps> = ({ href, text, showUnderline, handleMouseEnter, handleMouseLeave }) => {
  return (
    <StyledLink to={href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span style={{ position: "relative" }}>
        {text}
        {showUnderline && <Underline aria-hidden />}
      </span>
    </StyledLink>
  );
};

export default AppLink;
