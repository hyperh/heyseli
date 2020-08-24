import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdMenu as OpenBtn, MdClose as CloseBtn } from 'react-icons/md';
import { FiMoon as DarkBtn, FiSun as LightBtn } from 'react-icons/fi';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

const Content = styled.div`
  width: 17em;
  height: 100vh;
  padding: 3em;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    background-color: var(--backgroundColor);
    width: 100vw;
    transition: left 0.3s;
    left: ${(props) => (props.isOpen ? '0' : '-100vw')};
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
  padding: 0.5em;
`;

const Item = styled.div`
  padding: 1em;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const darkMode = useDarkMode(false);

  return (
    <header>
      <OpenBtnStyled onClick={toggleOpen} />

      <Content isOpen={isOpen}>
        {isOpen ? <CloseBtnStyled onClick={toggleOpen} /> : null}
        <Name>heyse li</Name>
        <nav>
          <Item>
            <Link to="/contact" onClick={toggleOpen}>
              contact
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
            {darkMode.value ? (
              <LightBtn onClick={darkMode.toggle} size={24} />
            ) : (
              <DarkBtn onClick={darkMode.toggle} size={24} />
            )}
          </Item>
        </nav>
      </Content>
    </header>
  );
};

export default Sidebar;
