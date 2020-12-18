import React, { FC } from "react";
import styled from "@emotion/styled";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "gatsby";
import HeightGap from "./HeightGap";
import { Theme } from "../styles/color";

type Props = {
  title: string;
  description: string;
  slug: string;
};

const ArticleCard: FC<Props> = ({ title, description, slug }) => {
  return (
    <Card to={`article/${slug}`} className="article">
      <article>
        <h1>{title}</h1>

        <p className="description">{description}</p>
        <HeightGap gap="10px" />
        <div className="arrow">
          <p>Read more</p>
          <span className="icon">
            <HiArrowRight />
          </span>
        </div>
      </article>
    </Card>
  );
};

interface StyledProps {
  theme?: Theme; // implicit as typescript does not read the theme from provider
}

const Card = styled(Link)<StyledProps>`
  background: ${(props) => props.theme.colors.darkblue};
  padding: 32px 32px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;

  & .description {
    margin-top: 16px;
  }

  & .arrow {
    position: relative;
    display: inline-flex;
    align-items: center;

    & .icon {
      font-size: 20px;
      display: inline-flex;
      margin-left: 8px;
      visibility: hidden;
      color: ${(props) => props.theme.colors.pink};
    }
  }

  :hover {
    h1 {
      color: ${(props) => props.theme.colors.pink};
    }

    & .arrow {
      & .icon {
        visibility: visible;
      }
    }
  }
`;

export default ArticleCard;
