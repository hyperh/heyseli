import React from 'react';
import {
  FaGithub as Github,
  FaMedium as Medium,
  FaTwitter as Twitter,
} from 'react-icons/fa';
import { TiFolderOpen as PortfolioIcon } from 'react-icons/ti';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ExternalLink from '../core/ExternalLink';
import data from './data';
import HiddenEmail from './HiddenEmail';
import IntroLink from './IntroLink';
import { bodyFont } from '../core/fonts';

const linkStyle = `
display: flex;
text-decoration: none;
align-items: flex-start;
padding: 10px;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`;
const StyledExternalLink = styled(ExternalLink)`
  ${linkStyle};
`;
const StyledLink = styled(Link)`
  ${linkStyle};
`;

const Wrapper = styled.div`
  width: 100%;
  font-family: ${bodyFont};
  font-weight: 300;
`;

/* eslint-disable max-len */
const { email, twitter, medium, github, github2 } = data;
const Contact = () => (
  <Wrapper>
    <p>
      Hi! Thanks for visiting. I&apos;m Heyse and I&apos;m a full stack
      developer and designer. I love to bring ideas to life.
    </p>
    <p>
      I&apos;m available for contract and consulting work. If you would like to
      learn more about how I can help you make wonderful apps, you can contact
      me at{' '}
      <b>
        <i>
          <HiddenEmail email={email} />
        </i>
      </b>
    </p>

    <div>
      <IntroLink
        Icon={PortfolioIcon}
        Link={StyledLink}
        header="Portfolio"
        desc="My work"
        url="/work"
      />
      <IntroLink
        Icon={Github}
        Link={StyledExternalLink}
        header="Github"
        desc="Examples of my code and the contributions I've made to the open source
      community."
        url={github}
      />
      <IntroLink
        Icon={Github}
        Link={StyledExternalLink}
        header="Github"
        desc="Even more code examples."
        url={github2}
      />
      <IntroLink
        Icon={Medium}
        Link={StyledExternalLink}
        header="Medium"
        desc="I write mostly about issues that I encounter when programming and how I
      solved it."
        url={medium}
      />
      <IntroLink
        Icon={Twitter}
        Link={StyledExternalLink}
        header="Twitter"
        desc="I occasionally tweet."
        url={twitter}
      />
    </div>
  </Wrapper>
);

export default Contact;
