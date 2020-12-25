import tw, { styled } from 'twin.macro';
import { graphql, Link, PageProps } from 'gatsby';
import React, { FC, useState } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { Button } from '../Buttons';
import HeightGap from '../HeightGap';
import MenuChips from '../MenuChips';
import VisuallyHidden from '../VisuallyHidden';
import { Theme } from '../../styles/color';
import ArticleCard from '../ArticleCard';
import SEO from '../SEO';

type CategoryType = {
  id: string;
  title: string;
  slug: {
    current: string;
  };
};

type ArticleType = {
  id: string;
  slug: {
    current: string;
  };
  title: string;
  description: string;
  author: {
    name: string;
  };
};

interface Props extends PageProps {
  data: {
    categories: {
      nodes: CategoryType[];
    };
    articles: {
      nodes: ArticleType[];
      totalCount: number;
    };
  };
}

export const query = graphql`
  query categoryBySlug($slug: String!) {
    categories: allSanityCategory {
      totalCount
      nodes {
        id
        title
        slug {
          current
        }
      }
    }
    articles: allSanityPost(
      sort: { order: ASC, fields: _updatedAt }
      filter: {
        categories: { elemMatch: { slug: { current: { eq: $slug } } } }
      }
    ) {
      nodes {
        title
        description
        id
        slug {
          current
        }
        author {
          name
        }
      }
      totalCount
    }
  }
`;

// markup
const PostsByCategory: FC<Props> = ({ data }) => {
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Wrapper>
      <SEO />
      <HeightGap gap="100px" />
      <MenuWrapper>
        {/* <ToggleMenuButton
          round
          lift
          type="button"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
          <VisuallyHidden>Toggle Menu</VisuallyHidden>
        </ToggleMenuButton> */}
        <div className="menu">
          <MenuChips
            title="All Posts"
            slug="/"
            count={data.articles.totalCount}
            all
          />
          {data.categories.nodes.map((tag, index) => {
            return (
              <MenuChips
                title={tag.title}
                count={2}
                key={tag.id}
                slug={tag.slug.current}
                all={false}
              />
            );
          })}
        </div>
      </MenuWrapper>
      <ArticleList>
        {data.articles.nodes.map((article, index) => {
          return (
            <ArticleCard
              slug={article.slug.current}
              title={article.title}
              description={article.description}
              key={article.id}
              author={article.author.name}
            />
          );
        })}
      </ArticleList>
      <HeightGap gap="100px" />
    </Wrapper>
  );
};

interface StyledProps {
  theme?: Theme; // implicit as typescript does not read the theme from provider
}

const Wrapper = styled.div<StyledProps>`
  ${tw`bg-primary text-primary`}
  margin: 0 auto;

  min-height: 100vh;
`;

const MenuWrapper = styled.div<StyledProps>`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 32px;
  padding: 0 32px;

  & .menu {
    ${tw`bg-secondary`}

    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 724px) {
    padding: 0 16px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const ToggleMenuButton = styled(Button)<StyledProps>`
  width: 50px;
  height: 50px;

  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  margin-left: auto;
`;

const ArticleList = styled.main<StyledProps>`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
  margin-top: 2rem;
  padding: 0 32px;

  @media (max-width: 724px) {
    grid-template-columns: 1fr;
    margin-left: 10px;
    margin-right: 10px;
    padding: 0 16px;
  }
`;

export default PostsByCategory;
