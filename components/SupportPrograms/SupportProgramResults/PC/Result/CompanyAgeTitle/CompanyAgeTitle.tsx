import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';
import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';
import { TargetCompanyAgeEnum } from 'graphql';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  ${FontSize.size16}
  ${FontWeight.regular}
  color: var(--color-naturalgray7);
`;

function CompanyAgeTitle({
  companyAgeTitleData,
}: {
  companyAgeTitleData: Array<TargetCompanyAgeEnum>;
}) {
  return (
    <TitleWrapper>
      {companyAgeTitleData.map((companyAgeTitle) => (
        <Title key={companyAgeTitle}>{TARGET_COMPANY_AGE_TEXTS[companyAgeTitle]}</Title>
      ))}
    </TitleWrapper>
  );
}

export default CompanyAgeTitle;
