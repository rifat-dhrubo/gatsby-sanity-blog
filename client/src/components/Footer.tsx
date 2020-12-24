import React from 'react';
import tw, { styled } from 'twin.macro';
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
  ${tw`w-full h-20 flex justify-center items-center bg-secondary`}

  footer {
    ${tw`max-w-6xl mx-auto flex flex-grow justify-between flex-wrap p-4 ring-neonPink `}

    & .copyright {
      ${tw`text-sm`}
    }

    & .links {
      a {
        ${tw`p-1 cursor-pointer relative`}

        :before {
          content: '';
          ${tw`absolute bottom-0 left-0 right-0  origin-bottom-left bg-neonPink`}
          transition: 0.3s all ease-in-out;
          height: 2px;
          transform: scaleX(0);
        }

        :hover {
          :before {
            ${tw`origin-bottom-right`}

            transform: scaleX(1);
          }
        }
      }
    }
  }
`;

export default Nav;
