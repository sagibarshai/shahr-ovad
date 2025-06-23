import styled, { createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/header";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const StyledAppWrapper = styled.div`
  animation: ${fadeIn} 2s ease-out;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl2};
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Rubik", sans-serif;
    margin: 0;
    
  }
  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
    font-weight: 400;
  }
  p, span {
    font-weight: 300;
  }
`;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <StyledAppWrapper dir="rtl">
        <Navigation />
        <Header />
        <Outlet />
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;
