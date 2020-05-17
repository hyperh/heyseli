import React, { Component } from 'react';
import { Link } from 'gatsby';
import { MdMenu as OpenBtn, MdClose as CloseBtn } from 'react-icons/md';
import styled from 'styled-components';

const Content = styled.div`
  width: 17em;
  height: 100vh;
  padding: 3em;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    background-color: white;
    width: 100vw;
    transition: left 0.3s;
    left: ${(props) => (props.open ? '0' : '-100vw')};
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

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      open: false,
    };
  }

  onClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <OpenBtnStyled onClick={this.onClick} />

        <Content open={open}>
          {open ? <CloseBtnStyled onClick={this.onClick} /> : null}
          <Name>heyse li</Name>
          <div>
            <Item>
              <Link to="/contact" onClick={this.onClick}>
                contact
              </Link>
            </Item>
            <Item>
              <Link to="/work" onClick={this.onClick}>
                work
              </Link>
            </Item>
            <Item>
              <Link to="/publications" onClick={this.onClick}>
                publications
              </Link>
            </Item>
            <Item>
              <Link to="/resume" onClick={this.onClick}>
                resume
              </Link>
            </Item>
          </div>
        </Content>
      </div>
    );
  }
}

export default Sidebar;
