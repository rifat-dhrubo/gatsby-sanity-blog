import styled from "@emotion/styled";
import { graphql, Link, PageProps } from "gatsby";
import React, { FC, useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "../components/Buttons";
import HeightGap from "../components/HeightGap";
import MenuChips from "../components/MenuChips";
import VisuallyHidden from "../components/VisuallyHidden";
import { Theme } from "../styles/color";
import ArticleCard from "../components/ArticleCard";

const TAGS = [
  { title: "History", count: 5 },
  { title: "Science", count: 6 },
  { title: "Religion", count: 15 },
  { title: "Politics", count: 4 },
  { title: "Philosophy", count: 27 },
  { title: "Films", count: 10 },
  { title: "Sports", count: 2 },
  { title: "Global", count: 8 },
];

type CategoryType = {
  id: string;
  title: string;
};

type ArticleType = {
  id: string;
  slug: {
    current: string;
  };
  title: string;
  description: string;
};

interface Props extends PageProps {
  data: {
    categories: {
      nodes: CategoryType[];
    };
    articles: {
      nodes: ArticleType[];
    };
  };
}

// markup
const IndexPage: FC<Props> = ({ data }) => {
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Wrapper>
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
          {data.categories.nodes.map((tag, index) => {
            return <MenuChips title={tag.title} count={2} key={tag.id} />;
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
            />
          );
        })}
      </ArticleList>
      <HeightGap gap="100px" />
    </Wrapper>
  );
};

export const query = graphql`
  query allCategoryQuery {
    categories: allSanityCategory {
      nodes {
        id
        title
      }
    }
    articles: allSanityPost {
      nodes {
        slug {
          current
        }
        id
        title
        description
      }
    }
  }
`;

interface StyledProps {
  theme?: Theme; // implicit as typescript does not read the theme from provider
}

const Wrapper = styled.div<StyledProps>`
  margin: 0 auto;
  background: ${(props) => props.theme.colors.darkerBlue};
  min-height: 100vh;
  color: ${(props) => props.theme.colors.text};
`;

const MenuWrapper = styled.div<StyledProps>`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 32px;
  padding: 0 32px;

  & .menu {
    background: ${(props) => props.theme.colors.darkblue};
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
  outline-color: ${(props) => props.theme.colors.pink};
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

export default IndexPage;
