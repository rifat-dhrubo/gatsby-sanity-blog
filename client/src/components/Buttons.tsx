/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-mixed-operators */
import styled from "@emotion/styled";
import { Theme } from "../styles/color";

interface StyleProps {
  theme?: Theme;
  round?: boolean;
  lift?: boolean;
}
const Button = styled.button<StyleProps>`
  background: ${(props) => props.theme.colors.pink};
  border: ${(props) => `1px solid ${props.theme.colors.pink}`};
  outline-color: ${(props) => props.theme.colors.pink};
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  font-family: inherit;
  cursor: pointer;
  border-radius: ${(props) => (props.round ? "100%" : null)};
  transition: all 0.3s ease-in-out;

  :hover {
    transform: ${(props) => (props.lift ? "translateY(-1px)" : null)};
    box-shadow: ${(props) =>
      props.lift
        ? "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);"
        : null};
  }

  :active {
    transform: scale(0.98);
  }
  :disabled {
    border: red;
  }
`;

export { Button };
