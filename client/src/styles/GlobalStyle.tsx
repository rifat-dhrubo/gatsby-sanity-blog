/* eslint-disable react/jsx-props-no-spreading */
import { Global, css } from '@emotion/react';
import tw, { styled, GlobalStyles } from 'twin.macro';
import React, { FC } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Theme } from './color';
import stylesBase from './styleBase';
import SEO from '../components/SEO';

const GlobalStyle: FC = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <GlobalStyles />
      <Global styles={stylesBase} />

      <Nav />
      {children}
      <Footer />
    </Wrapper>
  );
};

type StyledProps = {
  theme?: Theme; // implicit as typescript does not read the theme frm provider
};

const Wrapper = styled.div<StyledProps>`
  ${tw`min-h-screen bg-primary text-primary grid`};

  grid-template-rows: auto 1fr auto;
`;

export default GlobalStyle;
