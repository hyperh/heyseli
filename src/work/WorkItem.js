import PropTypes from 'prop-types';
import find from 'lodash/fp/find';
import React from 'react';
import styled from 'styled-components';
import WorkItemHeader from './WorkItemHeader';
import Gallery from './Gallery';
import { textFont } from '../core/fonts';
import Page from '../core/Page';
import data from './data';

const fontStyle = `
font-family: ${textFont};
font-weight: 300;
`;
const Desc = styled.div`
  ${fontStyle};
`;
const Made = styled.p`
  ${fontStyle};
`;

const WorkItem = ({ pageContext: { folderName } }) => {
  const findLink = find((item) => item.link === folderName);
  const workItem = findLink(data);

  const { name, platforms, url, imgFolder, headerImg, images = [] } = workItem;
  const carouselImages = images.map((image) => ({
    source: image,
  }));

  return (
    <Page>
      <div>
        <WorkItemHeader
          name={name}
          platforms={platforms}
          url={url}
          imgFolder={imgFolder}
          headerImg={headerImg}
        />
        <Desc>{workItem.desc}</Desc>

        <div>
          <h2>Made With</h2>
          <Made>{workItem.tech.sort().join(', ')}</Made>
        </div>
        <Gallery images={carouselImages} />
      </div>
    </Page>
  );
};

WorkItem.propTypes = {
  pageContext: PropTypes.shape({
    folderName: PropTypes.string,
  }),
};

export default WorkItem;
