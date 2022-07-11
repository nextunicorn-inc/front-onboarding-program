import { useState } from 'react';
import { useSupportProgramFilters, SupportProgramFilters } from './SupportProgramFilters';

import type { SupportProgramTypes, Areas, TargetCompanyAges } from './SupportProgramFilters';

function SupportPrograms() {
  const [types, setTypes] = useState<SupportProgramTypes>(['all']);

  const toggleTypes = (nextType: SupportProgramTypes[number]) => () => {
    setTypes((prev) => {
      if (prev.includes(nextType)) {
        return prev;
      }
      return [nextType];
    });
  };

  return (
    <div>
      <SupportProgramFilters activeTypes={types} onClick={toggleTypes} />
    </div>
  );
}

export default SupportPrograms;
