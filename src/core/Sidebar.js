import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdMenu as OpenBtn, MdClose as CloseBtn } from 'react-icons/md';
import { FiMoon as DarkBtn, FiSun as LightBtn } from 'react-icons/fi';
import styled from 'styled-components';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const Content = styled.div`
  width: 12em;
  height: 100vh;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    background-color: var(--backgroundColor);
    width: 100vw;
    transition: left 0.3s;
    left: ${(props) => (props.isOpen ? '0' : '-100vw')};
    padding: 4rem 2rem;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const btnSide = '4em';
const btnStyle = `
display: none;
@media (max-width: 768px) {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: ${btnSide};
  height: ${btnSide};
  padding: 1em;
}
`;
const OpenBtnStyled = styled(OpenBtn)`
  ${btnStyle};
`;
const CloseBtnStyled = styled(CloseBtn)`
  ${btnStyle};
`;

const Name = styled.div`
  font-size: 2em;
`;

const Item = styled.div`
  padding: 1em 0;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <header>
      <OpenBtnStyled onClick={toggleOpen} />

      <Content isOpen={isOpen}>
        {isOpen ? <CloseBtnStyled onClick={toggleOpen} /> : null}
        <Name>heyse li</Name>
        <nav>
          <Item>
            <Link to="/about" onClick={toggleOpen}>
              about
            </Link>
          </Item>
          <Item>
            <Link to="/work" onClick={toggleOpen}>
              work
            </Link>
          </Item>
          <Item>
            <Link to="/publications" onClick={toggleOpen}>
              publications
            </Link>
          </Item>
          <Item>
            <Link to="/resume" onClick={toggleOpen}>
              resume
            </Link>
          </Item>

          <Item>
            <ThemeToggler>
              {({ theme, toggleTheme }) => {
                // Don't render anything at compile time. Deferring rendering until we
                // know which theme to use on the client avoids incorrect initial
                // state being displayed.
                if (theme == null) {
                  return null;
                }

                const onClick = () =>
                  toggleTheme(theme === 'dark' ? 'light' : 'dark');

                return theme === 'dark' ? (
                  <LightBtn
                    onClick={onClick}
                    size={24}
                    title="Toggle light mode"
                  />
                ) : (
                  <DarkBtn
                    onClick={onClick}
                    size={24}
                    title="Toggle dark mode"
                  />
                );
              }}
            </ThemeToggler>
          </Item>
        </nav>
      </Content>
    </header>
  );
};

export default Sidebar;
