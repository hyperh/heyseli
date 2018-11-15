import PropTypes from 'prop-types';
import React from 'react';
import find from 'lodash/fp/find';
import styled from 'styled-components';
import WorkItemHeader from './WorkItemHeader';
import Gallery from './Gallery';
import data from './data';
import { textFont } from '../core/fonts';

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

const WorkItem = ({ match: { params } }) => {
  const findLink = find(item => item.link === params.link);
  const workItem = findLink(data);
  const { name, platforms, url, imgFolder, headerImg, images = [] } = workItem;
  const lightboxImgs = images.map(image => ({
    src: image
  }));

  return (
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

      <Gallery images={lightboxImgs} />
    </div>
  );
};

WorkItem.propTypes = {
  match: PropTypes.object
};

export default WorkItem;
