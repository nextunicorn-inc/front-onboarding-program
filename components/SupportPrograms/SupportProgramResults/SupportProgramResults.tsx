import React from 'react';
import { PC } from './PC';
import { TabletMobile } from './TabletMobile';
import { SupportProgramsQuery } from '@/graphql';

function SupportProgramResults({ data }: { data: SupportProgramsQuery['supportPrograms'] }) {
  return (
    <div>
      <PC data={data} />
      <TabletMobile data={data} />
    </div>
  );
}

export default SupportProgramResults;
