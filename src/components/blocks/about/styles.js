import styled from "styled-components";

import aboutImg from "/src/assets/about.svg";

export const StyledAbout = styled.section`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  position: relative;
  min-height: 550px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: #d8ecfe;
  align-items: center;
  z-index: 1;
  flex-direction: column;
  padding-left: 90px;
  box-sizing: border-box;

  &::after {
    position: absolute;
    bottom: 0;
    right: 90px;
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImg});
  }
`;

export const AboutText = styled.p`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;
