import * as Styled from './CompanyAgeTitle.styled';
import { TARGET_COMPANY_AGE_TEXTS } from '../../../../../constants/supportPrograms';
import { TargetCompanyAgeEnum } from '../../../../../graphql';

function CompanyAgeTitle({
  companyAgeTitleData,
}: {
  companyAgeTitleData: Array<TargetCompanyAgeEnum>;
}) {
  const companyAgeTitle = TARGET_COMPANY_AGE_TEXTS[companyAgeTitleData];

  return <Styled.Title>{companyAgeTitle}</Styled.Title>;
}

export default CompanyAgeTitle;
