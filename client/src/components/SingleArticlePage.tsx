import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { graphql, PageProps } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { Theme } from '../styles/color';
// type ArticleBody = [
//   children: { text: string }[]
// ];

interface Props extends PageProps {
  data: {
    article: {
      title: string;
      body: any;
    };
  };
}

// this needs to be dynamic based on the slug passed in via pageContext
export const query = graphql`
  query($slug: String!) {
    article: sanityPost(slug: { current: { eq: $slug } }, title: {}) {
      title
      body: _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const SingleArticlePage: FC<Props> = ({ data }) => {
  console.log(data.article.body);
  return (
    <Wrapper>
      <div className="article__title">
        <h1>{data.article.title}</h1>
      </div>
      <div className="article__wrapper">
        <main>
          {/* {data.article.body.map((bodyContent, index) => (
            <p key={bodyContent.children[0].text} className="paragraph">
              {bodyContent.children[0].text}
            </p>
          ))} */}
          <BlockContent blocks={data.article.body} className="body" />
        </main>
      </div>
    </Wrapper>
  );
};

interface StyledProps {
  theme?: Theme;
}

const Wrapper = styled.div<StyledProps>`
  ${tw`container mx-auto`}
  img {
    ${tw`mb-8`}
  }

  & .article__title {
    margin-top: 64px;
    padding: 96px 32px 72px;
    text-align: center;
  }

  & .article__wrapper {
    padding: 0 32px;

    main {
      max-width: 675px;
      margin: auto;
    }
  }

  & .body {
    p {
      font-size: 18px;
      margin-bottom: 1.5rem;
    }
  }
`;
export default SingleArticlePage;
