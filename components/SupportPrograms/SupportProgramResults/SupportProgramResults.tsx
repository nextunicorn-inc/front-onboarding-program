import React from 'react';
import { SupportProgramsQuery } from './SupportProgramResults.type';

import { PC } from './PC';
import { TabletMobile } from './TabletMobile';

function SupportProgramResults({
  data,
}: {
  data: SupportProgramsQuery['supportPrograms'] | undefined;
}) {
  return (
    <div>
      <PC data={data} />
      <TabletMobile data={data} />
    </div>
  );
}

export default SupportProgramResults;
