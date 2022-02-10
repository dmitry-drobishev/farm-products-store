import styled, { css } from "styled-components";

export const TitleSize = {
  big: "big",
  medium: "medium",
  small: "small",
  extra_small: "extra_small"
};

const TitleSizeValue = {
  [TitleSize.big]: {
    fontSize: "44px",
    lineHeight: "50px"
  },
  [TitleSize.medium]: {
    fontSize: "36px",
    lineHeight: "41px"
  },
  [TitleSize.small]: {
    fontSize: "24px",
    lineHeight: "31px"
  },
  [TitleSize.extra_small]: {
    fontSize: "18px",
    lineHeight: "27px"
  }
};

// Заголовок
const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  text-align: ${(props) => props.textAlign || "left"};
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-weight: bold;
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.medium];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
    `;
  }};
`;

export default function Title({ size, children, ...props }) {
  return (
    <StyledTitle size={size} {...props}>
      {children}
    </StyledTitle>
  );
}
