import { AppLinkProps, HighlightBackground, StyledLink, Underline } from "./styled";

const AppLink: React.FC<AppLinkProps> = ({ href, text, showUnderline, handleMouseEnter, handleMouseLeave }) => {
  return (
    <StyledLink to={href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span
        style={{
          position: "relative",
          display: "inline-block",
          padding: "6px 12px",
          textAlign: "center",
        }}
      >
        {showUnderline && <HighlightBackground aria-hidden />}
        {text}
      </span>
    </StyledLink>
  );
};

export default AppLink;
