import React from 'react';
import simPaper from '../../../publications/assets/sim.pdf';

export default {
  name: 'Data Center Simulation',
  link: 'data-center',
  platforms: ['Desktop'],
  desc: (
    <div>
      <p>
        A platform to run simulations to aid in the research of resource-aware
        scheduling of computational jobs in a large-scale heterogeneous data
        center. The project was funded by a Google Research Award and the
        Natural Sciences and Engineering Research Council of Canada (NSERC).
      </p>
      <p>
        I worked in a team of 3 to develop the simulation platform. The research
        eventually yielded a{' '}
        <a href={simPaper}>refereed conference article in MISTA</a>.
      </p>
    </div>
  ),
  tech: ['C++', 'SVN'],
  year: 2011,
};
