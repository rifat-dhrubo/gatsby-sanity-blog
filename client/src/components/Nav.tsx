import React, { useContext } from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';
import { Theme } from '../styles/color';
import { ThemeContext } from '../styles/themeContext';
import { Button } from './Buttons';
import { Moon, Sun } from './SunMoon';

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const handleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };
  return (
    <NavWrapper>
      <nav className="nav">
        <ul>
          <div className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
          <div className="right">
            <button type="button" className="right" onClick={handleTheme}>
              <span className="icon">
                {theme === 'dark' ? <Sun /> : <Moon />}
              </span>
            </button>
          </div>
        </ul>
      </nav>
    </NavWrapper>
  );
};

type StyledProps = {
  theme?: Theme; // implicit as typescript does not read the theme frm provider
};

const NavWrapper = styled.header<StyledProps>`
  ${tw`sticky  z-40 transition-all w-full opacity-80 `}
  top: --1px;

  & .nav {
    ${tw`max-w-6xl mx-auto h-16 font-bold flex justify-between items-center rounded bg-secondary px-3 `}

    ul {
      ${tw`flex flex-grow justify-between items-center`}
      & .left {
        ${tw`flex justify-between`}
      }

      & .right {
        button {
          ${tw`w-8 h-8 text-2xl rounded-full focus:outline-none focus:ring-2 ring-neonPink `}
        }
        & .icon {
          ${tw`rounded-full flex justify-center items-center`}
        }
      }

      li {
        ${tw`m-2 cursor-pointer`}

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
  }
`;

export default Nav;
