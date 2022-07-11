import * as Styled from './SupportProgramFilters.styled';
import { DEFAULT, TYPE_MOCKUP } from './SupportProgramFilters.constants';
import { SUPPORT_PROGRAM_TYPE_TEXTS } from '../../../constants/supportPrograms';
import { SupportProgramTypes } from './SupportProgramFilters.types';

type Props = {
  activeTypes: SupportProgramTypes;
  onClick: (type: SupportProgramTypes[number]) => () => void;
};

function SupportProgramFilters({ onClick, activeTypes }: Props) {
  return (
    <Styled.TypeFilterList role="list">
      {[...DEFAULT, ...TYPE_MOCKUP].map((type, index) => (
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
export default SupportProgramFilters;
