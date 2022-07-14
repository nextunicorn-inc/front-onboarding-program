import * as Styled from './TypeFilters.styled';
import Icons from '../../../../commonUi/Icons';
import { Responsive } from '../SupportProgramFilters.styled';

import { DEFAULT } from '../SupportProgramFilters.constants';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from '../../../../constants/supportPrograms';

import { SupportProgramTypes } from '../SupportProgramFilters.types';
import { SupportProgramTypeEnum } from '../../../../graphql';

type Props = {
  allTypes: SupportProgramTypes;
  activeTypes: SupportProgramTypes;
  onClick: (type: SupportProgramTypes[number]) => () => void;
};

function TypeFilters({ onClick, activeTypes, allTypes }: Props) {
  return (
    <Responsive>
      <Styled.TypeFilterList role="list">
        {[...DEFAULT, ...allTypes].map((type, index) => (
          <Styled.TypeFilterItem $active={activeTypes.includes(type)} key={type}>
            <button type="button" onClick={onClick(type)}>
              {SUPPORT_PROGRAM_TYPE_TEXTS[type]}
              {type === SupportProgramTypeEnum.Snl && <Icons.Fast32 />}
            </button>
            <Styled.TypeFilterNoticeLine $active={activeTypes.includes(type)} />
          </Styled.TypeFilterItem>
        ))}
      </Styled.TypeFilterList>
    </Responsive>
  );
}
export default TypeFilters;
