import { Thunder } from 'commonUi/Icons';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from 'constants/supportPrograms';
import { useMediaQuery } from 'hooks';
import { SupportProgramTypeEnum } from '@/graphql';

import * as Styled from './TypeFilters.styled';

import { Responsive } from '../SupportProgramFilters.styled';
import { DEFAULT } from '../SupportProgramFilters.constants';
import { Type } from '../SupportProgramFilters.types';
import { useFilterByQueryString, useSupportProgramFilters } from '../SupportProgramFilters.hooks';
import { identity } from '../../SupportPrograms.utils';

function TypeFilters() {
  const query = useSupportProgramFilters();
  const [activeTypes, _, chooseForce] = useFilterByQueryString<Type>(
    query.data?.types ?? [],
    'type',
    identity,
  );
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Responsive>
      <Styled.TypeFilterList role="list">
        {[...DEFAULT, ...(query.data?.types ?? [])].map((type, index) => {
          const isAllButton = type === 'all';
          const isActive = isAllButton ? activeTypes.length === 0 : activeTypes.includes(type);

          return (
            <Styled.TypeFilterItem $active={isActive} key={type}>
              <button type="button" onClick={chooseForce(isAllButton ? 'all' : type)}>
                {SUPPORT_PROGRAM_TYPE_TEXTS[type]}
                {type === SupportProgramTypeEnum.Snl &&
                  (isMobile ? <Thunder size={15} /> : <Thunder size={26} />)}
              </button>
              <Styled.TypeFilterNoticeLine $active={isActive} />
            </Styled.TypeFilterItem>
          );
        })}
      </Styled.TypeFilterList>
    </Responsive>
  );
}
export default TypeFilters;
