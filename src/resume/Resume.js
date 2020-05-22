import React from 'react';
import styled from 'styled-components';
import data from './data';
import { bodyFont } from '../core/fonts';

const { experience, education } = data;

const Wrapper = styled.div`
  p {
    font-family: ${bodyFont};
  }
`;

const Resume = () => (
  <Wrapper>
    <div>
      <h1>Experience</h1>
      {experience.map((x) => {
        const { title, company, time } = x;
        const key = `${company}-${title}`;
        return (
          <p key={key}>
            <b>{title}</b>, {company}, <i>{time}</i>
          </p>
        );
      })}
    </div>

    <div>
      <h1>Education</h1>
      {education.map((x) => {
        const { school, type, faculty, gradYear } = x;
        return (
          <p key={type}>
            <b>{type}</b>, {school}, {faculty}, <i>{gradYear}</i>
          </p>
        );
      })}
    </div>
  </Wrapper>
);

export default Resume;
