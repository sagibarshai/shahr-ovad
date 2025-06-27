import styled from "styled-components";

export const NavWrapper = styled.div<{ isMobileMenuOpen?: boolean }>`
  padding: ${({ theme }) => theme.spaces.l};
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0;
    /* display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "block" : "none")}; */
  }
`;
// Desktop nav – רק בדסקטופ
export const DesktopNav = styled.div`
  display: flex;
  gap: 40px;
  direction: rtl;

  @media (max-width: 768px) {
    display: none;
  }
`;

// ☰ כפתור המבורגר במובייל
export const BurgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px; /* ✅ ימין */
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: white; /* ✅ שחור */
    z-index: 1000;
  }
`;

// תפריט נפתח – מימין, רקע לבן, טקסט שחור
export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 40px);
  background: white;
  color: black;
  padding: 12px 20px 20px 20px; /* 🔽 פחות רווח מלמעלה */
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 999;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 12px 12px;
`;

// ✕ כפתור סגירה
export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: black; /* ✅ טקסט שחור */
`;
