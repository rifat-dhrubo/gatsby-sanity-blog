import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Theme } from '../styles/color';

const Nav = () => {
  return (
    <FooterWrapper>
      <footer>
        <div className="copyright">
          <p>&copy; 2021-Present All rights Reserved</p>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </footer>
    </FooterWrapper>
  );
};

type StyledProps = {
  theme?: Theme; // implicit as typescript does not read the theme from provider
};

const FooterWrapper = styled.div<StyledProps>`
  width: 100%;
  background: ${(props) => props.theme.colors.darkblue};
  color: ${(props) => props.theme.colors.pink};
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  footer {
    max-width: 1200px;
    margin: 0 auto;
    background: ${(props) => props.theme.colors.darkblue};
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;

    & .copyright {
      font-size: 14px;
    }

    & .links {
      a {
        padding: 5px;
        cursor: pointer;
        position: relative;

        :before {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          height: 2px;
          background-color: ${(props) => props.theme.colors.white};
          transform-origin: right bottom;
          transform: scaleX(0);
          transition: transform 0.5s ease 0s;
        }

        :hover {
          :before {
            transform-origin: left bottom;
            transform: scaleX(1);
          }
        }
      }
    }

    p {
      margin: 0;
    }
  }
`;

export default Nav;
