import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export interface AppLinkProps {
  href: string;
  text: string;
  isActive: boolean;
  isHighlight: boolean;
  showUnderline: boolean;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
}

const growLine = keyframes`
  from {
    width: 0;
    transform: translateX(-50%);
  }
  to {
    width: 100%;
    transform: translateX(-50%);
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: inline-block;
  letter-spacing: 4px;
  z-index: 100;
  color: black;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  font-weight: 800;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: 14px;
  }
`;
const highlightIn = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const HighlightBackground = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #b1d4e9;
  z-index: -1;
  border-radius: 4px;
  transform-origin: center;
  animation: ${highlightIn} 0.15s ease forwards;
`;

export const Underline = styled.span`
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 3px;
  padding: 0 10px;
  width: 0;
  background-color: #a259ff;
  animation: ${growLine} 0.3s forwards;
`;
