import React from 'react';
import { SupportProgramsQuery } from '@/graphql';
import { PC } from './PC';
import { TabletMobile } from './TabletMobile';

function SupportProgramResults({ data }: { data: SupportProgramsQuery['supportPrograms'] }) {
  return (
    <div>
      <PC data={data} />
      <TabletMobile data={data} />
    </div>
  );
}

export default SupportProgramResults;
