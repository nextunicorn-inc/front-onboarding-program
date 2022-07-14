import Icons from 'commonUi/Icons';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from 'constants/supportPrograms';
import { useMediaQuery } from 'hooks';
import { SupportProgramTypeEnum } from '@/graphql';

import * as Styled from './TypeFilters.styled';

import { Responsive } from '../SupportProgramFilters.styled';
import { DEFAULT } from '../SupportProgramFilters.constants';
import { SupportProgramTypes } from '../SupportProgramFilters.types';

type Props = {
  allTypes: SupportProgramTypes;
  activeTypes: SupportProgramTypes;
  onClick: (type: SupportProgramTypes[number]) => () => void;
};

function TypeFilters({ onClick, activeTypes, allTypes }: Props) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Responsive>
      <Styled.TypeFilterList role="list">
        {[...DEFAULT, ...allTypes].map((type, index) => (
          <Styled.TypeFilterItem $active={activeTypes.includes(type)} key={type}>
            <button type="button" onClick={onClick(type)}>
              {SUPPORT_PROGRAM_TYPE_TEXTS[type]}
              {type === SupportProgramTypeEnum.Snl &&
                (isMobile ? <Icons.Fast16 /> : <Icons.Fast32 />)}
            </button>
            <Styled.TypeFilterNoticeLine $active={activeTypes.includes(type)} />
          </Styled.TypeFilterItem>
        ))}
      </Styled.TypeFilterList>
    </Responsive>
  );
}
export default TypeFilters;
