import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Theme } from "../styles/color";

type Props = {
  title: string;
  count: number;
};

const MenuChips: FC<Props> = ({ title, count }) => {
  return (
    <Chips className="chips" to="#">
      <span className="title">{title} </span>
      <span className="count">{count}</span>
    </Chips>
  );
};

interface StyledProps {
  theme?: Theme; // implicit as typescript does not read the theme from provider
}

const Chips = styled(Link)<StyledProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 5px;
  padding: 7px;
  font-size: clamp(1.3rem, 1.2vw, 2.5rem);
  background: ${(props) => props.theme.colors.darkerBlue};
  transition: transform 0.2s ease;
  & .count {
    padding: 2px 5px;
    background: ${(props) => props.theme.colors.darkerBlue};
    color: ${(props) => props.theme.colors.pink};
  }

  :hover {
    transform: translateY(-2px);
  }
`;

export default MenuChips;
