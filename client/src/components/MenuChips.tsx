import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';
import { Theme } from '../styles/color';

type Props = {
  title: string;
  count: number;
};

const MenuChips: FC<Props> = ({ title, count }) => {
  return (
    <Wrapper>
      <Chips className="chips" to="#">
        <span className="title">{title} </span>
        <span className="count">{count}</span>
      </Chips>
    </Wrapper>
  );
};

interface StyledProps {
  theme?: Theme; // implicit as typescript does not read the theme from provider
}

const Wrapper = styled.div`
  :hover {
    & .chips {
      transform: translateY(-2px);
    }
  }
`;

const Chips = styled(Link)<StyledProps>`
  ${tw`grid gap-x-1 p-2 items-center transition-all bg-primary`}

  grid-template-columns: auto 1fr;

  font-size: clamp(1.3rem, 1.2vw, 2.5rem);

  & .count {
    ${tw`py-1 px-2 text-neonPink`}
  }
`;

export default MenuChips;
