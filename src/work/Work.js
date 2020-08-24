import React from 'react';
import styled from 'styled-components';
import WorkPreview from './WorkPreview';
import data from './data';

const yearDesc = (a, b) => b.year - a.year;
const sorted = data.sort(yearDesc);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Work = () => (
  <div>
    <h1>Work</h1>
    <Wrapper>
      {sorted.map((item) => (
        <WorkPreview
          key={item.name}
          name={item.name}
          platform={item.platform}
          link={item.link}
          previewImg={item.previewImg}
        />
      ))}
    </Wrapper>
  </div>
);

export default Work;
