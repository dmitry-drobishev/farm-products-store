import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  gap: 25px;
  margin-left: -4px;
  height: 44px;
  align-items: center;
  text-decoration: none;
  color: #333333;

  &:hover,
  &logo__link:active,
  &logo__link:visited {
    text-decoration: none;
    color: #333333;
    opacity: 0.7;
  }
`;

export const LogoText = styled.span`
  margin-left: 25px;
  font-weight: bold;
  font-size: 28px;
  line-height: 44px;
  color: #333333;
`;
