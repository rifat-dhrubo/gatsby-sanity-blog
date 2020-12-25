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
  author: string;
};

const ArticleCard: FC<Props> = ({ title, description, slug, author }) => {
  return (
    <Card to={`/article/${slug}`} className="article">
      <article>
        <h1 className="article__title">{title}</h1>

        <p className="article__description">{description}</p>

        <span className="article__author">By {author}</span>

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
  ${tw`bg-secondary p-8 rounded-xl transition-all`}

  article {
    ${tw`space-y-3 flex flex-col transition-all `}
    & .article__title {
      ${tw`text-xl`}
    }

    & .article__description {
      ${tw` text-base`}
    }

    & .article__author {
      ${tw``}
    }
  }

  & .arrow {
    ${tw`relative inline-flex text-center items-center`}

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
