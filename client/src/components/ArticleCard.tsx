import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'gatsby';
import HeightGap from './HeightGap';
import { Theme } from '../styles/color';

type Props = {
  title: string;
  description: string;
  slug: string;
};

const ArticleCard: FC<Props> = ({ title, description, slug }) => {
  return (
    <Card to={`article/${slug}`} className="article">
      <article>
        <h1 className="title">{title}</h1>

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
  ${tw`bg-secondary p-16 rounded-3xl transition-all `}

  & .title {
    ${tw`text-xl`}
  }

  & .description {
    ${tw`mt-4 text-base`}
  }

  & .arrow {
    ${tw`relative inline-flex text-center`}

    & .icon {
      ${tw`text-neonPink text-lg inline-flex ml-2 invisible`}
    }
  }

  :hover {
    h1 {
      ${tw`text-neonPink`}
    }

    & .arrow {
      & .icon {
        visibility: visible;
      }
    }
  }
`;

export default ArticleCard;
