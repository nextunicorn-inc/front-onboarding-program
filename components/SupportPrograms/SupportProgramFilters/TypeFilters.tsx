import * as Styled from './SupportProgramFilters.styled';
import { DEFAULT } from './SupportProgramFilters.constants';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from '../../../constants/supportPrograms';

import { SupportProgramTypes } from './SupportProgramFilters.types';

type Props = {
  allTypes: SupportProgramTypes;
  activeTypes: SupportProgramTypes;
  onClick: (type: SupportProgramTypes[number]) => () => void;
};

function TypeFilters({ onClick, activeTypes, allTypes }: Props) {
  return (
    <Styled.TypeFilterList role="list">
      {[...DEFAULT, ...allTypes].map((type, index) => (
        <Styled.TypeFilterItem
          onClick={onClick(type)}
          $active={activeTypes.includes(type)}
          key={type}
        >
          {SUPPORT_PROGRAM_TYPE_TEXTS[type]}
          <Styled.TypeFilterNoticeLine $active={activeTypes.includes(type)} />
        </Styled.TypeFilterItem>
      ))}
    </Styled.TypeFilterList>
  );
}
export default TypeFilters;
