import React, { PropTypes } from 'react';

const WorkItem = ({ params }) => (
  <div>
    WORK ITEM {params.name}
  </div>
);

WorkItem.propTypes = {
  params: PropTypes.object,
};

export default WorkItem;
