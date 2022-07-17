import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../../../../../utils';
import { TARGET_COMPANY_AGE_TEXTS } from '../../../../../../constants/supportPrograms';
import { TargetCompanyAgeEnum } from '../../../../../../graphql';

const Title = styled.h5`
  ${FontSize.size12};
  ${FontWeight.regular};
  line-height: 18px;
  color: var(--color-naturalgray7);

  ::after {
    margin-left: 4px;
    content: '|';
  }
`;

function CompanyAgeTitle({
  companyAgeTitleData,
}: {
  companyAgeTitleData: Array<TargetCompanyAgeEnum>;
}) {
  return (
    <>
      {companyAgeTitleData.map((companyAgeTitle) => (
        <Title>{TARGET_COMPANY_AGE_TEXTS[companyAgeTitle]}</Title>
      ))}
    </>
  );
}

export default CompanyAgeTitle;
