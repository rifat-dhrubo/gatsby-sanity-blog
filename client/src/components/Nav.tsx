import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Theme } from "../styles/color";

const Nav = () => {
  return (
    <NavWrapper>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

type StyledProps = {
  theme?: Theme; // implicit as typescript does not read the theme frm provider
};

const NavWrapper = styled.header<StyledProps>`
  position: sticky;
  top: -1px;
  z-index: 3;
  background: ${(props) => props.theme.colors.darkerBlue};
  transition: background 350ms ease 0s;
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.88;

  & .nav {
    background: ${(props) => props.theme.colors.darkerBlue};
    max-width: 1200px;
    margin: 0 auto;
    height: 60px;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: center;
    ul {
      display: flex;

      li {
        margin: 10px;
        cursor: pointer;

        a {
          padding: 5px;
          cursor: pointer;
          position: relative;

          :before {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            height: 2px;
            background-color: ${(props) => props.theme.colors.pink};
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
    }
  }
`;

export default Nav;
