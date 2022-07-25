import { Thunder } from 'commonUi/Icons';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from 'constants/supportPrograms';
import { useMediaQuery } from 'hooks';
import { SupportProgramTypeEnum } from '@/graphql';

import * as Styled from './TypeFilters.styled';

import { Responsive } from '../SupportProgramFilters.styled';
import { Type } from '../SupportProgramFilters.types';
import { useSupportProgramFilters, useFilterByQueryString } from '../SupportProgramFilters.hooks';
import { identity } from '../../SupportPrograms.utils';

function TypeFilters() {
  const query = useSupportProgramFilters();

  const [activeTypes, toggle] = useFilterByQueryString<Type>({
    list: query.data?.types ?? [],
    queryKey: 'type',
    matcher: identity,
    forceToMerge: true,
  });

  const isTablet = useMediaQuery('(max-width: 1023px)');

  return (
    <Responsive>
      <Styled.TypeFilterList role="list">
        <Styled.TypeFilterItem $active={!activeTypes} key="all">
          <button type="button" onClick={toggle(null)}>
            {SUPPORT_PROGRAM_TYPE_TEXTS.all}
          </button>
          <Styled.TypeFilterNoticeLine $active={activeTypes === null} />
        </Styled.TypeFilterItem>
        {query.data?.types.map((type) => {
          const isActive = activeTypes?.includes(type) ?? false;
          const opacity = isActive ? 1 : 0.4;

          return (
            <Styled.TypeFilterItem $active={isActive} key={type}>
              <button type="button" onClick={toggle(type)}>
                {SUPPORT_PROGRAM_TYPE_TEXTS[type]}
                {type === SupportProgramTypeEnum.Snl &&
                  (isTablet ? (
                    <Thunder size={15} opacity={opacity} />
                  ) : (
                    <Thunder size={26} opacity={opacity} />
                  ))}
              </button>
              <Styled.TypeFilterNoticeLine aria-hidden $active={isActive} />
            </Styled.TypeFilterItem>
          );
        })}
      </Styled.TypeFilterList>
    </Responsive>
  );
}
export default TypeFilters;
