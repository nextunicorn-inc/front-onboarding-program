import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';
import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';
import { TargetCompanyAgeEnum } from 'graphql';

const Title = styled.p`
  ${FontSize.size12};
  ${FontWeight.regular};
  line-height: 18px;
  color: var(--color-naturalgray6);

  ::after {
    margin-left: 4px;
    content: '|';
    color: var(--color-naturalgray6);
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
        <Title key={companyAgeTitle}>{TARGET_COMPANY_AGE_TEXTS[companyAgeTitle]}</Title>
      ))}
    </>
  );
}

export default CompanyAgeTitle;
