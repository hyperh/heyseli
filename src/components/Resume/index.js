import React from 'react';

import data from './data';

const Resume = () => (
  <div>
    {data.map(datum => {
      const { type, positions, degrees, skills } = datum;
      return (
        <div>
          <h1>{type}</h1>
          {
            positions ?
              <div>
                asdsdas
              </div> :
              null
          }
        </div>
      );
    })}
  </div>
);

export default Resume;
