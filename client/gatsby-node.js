/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/prefer-default-export */
const path = require('path');

async function turnArticleIntoPages({ graphql, actions }) {
  const articlePageTemplate = path.resolve(
    './src/components/pages/SingleArticlePage.tsx'
  );

  const { data } = await graphql(`
    query {
      articles: allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.articles.nodes.forEach((article) => {
    actions.createPage({
      path: `article/${article.slug.current}`,
      component: articlePageTemplate,
      context: {
        slug: article.slug.current,
      },
    });
  });
}

async function createPostsByCategoryPages({ graphql, actions }) {
  const categoryPageTemplate = path.resolve(
    './src/components/pages/PostsByCategory.tsx'
  );
  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((category) => {
    actions.createPage({
      path: `category/${category.slug.current}`,
      component: categoryPageTemplate,
      context: {
        slug: category.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  await turnArticleIntoPages(params);
  await createPostsByCategoryPages(params);
};
