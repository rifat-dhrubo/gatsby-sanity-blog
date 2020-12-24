/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-mixed-operators */

import tw, { styled } from 'twin.macro';
import { Theme } from '../styles/color';

interface StyleProps {
  theme?: Theme;
  round?: boolean;
  lift?: boolean;
}
const Button = styled.button<StyleProps>`
  ${tw`bg-neonPink text-primary w-full p-4 rounded-sm text-base font-semibold cursor-pointer  `}
  border-radius: ${(props) => props.round && tw`rounded-full`};
  transition: all 0.3s ease-in-out;

  :hover {
    transform: ${(props) => (props.lift ? 'translateY(-1px)' : null)};
    box-shadow: ${(props) => props.lift && tw`shadow-md`};
  }

  :active {
    transform: scale(0.98);
  }
  :disabled {
    ${tw`bg-gray-500`}
  }
`;

export { Button };
