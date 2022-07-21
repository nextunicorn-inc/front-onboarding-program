import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';
import { TARGET_COMPANY_AGE_TEXTS } from 'constants/supportPrograms';
import { TargetCompanyAgeEnum } from 'graphql';

const TitleWrapper = styled.div`
  width: 75px;
  display: flex;
  justify-content: flex-start;
  margin-left: 28px;
`;

const Title = styled.h3`
  ${FontSize.size16};
  ${FontWeight.regular};
  line-height: 24px;
  color: var(--color-naturalgray7);
`;

function CompanyAgeTitle({
  companyAgeTitleData,
}: {
  companyAgeTitleData: Array<TargetCompanyAgeEnum>;
}) {
  if (!companyAgeTitleData.length) {
    return (
      <TitleWrapper>
        <Title>창업자</Title>
      </TitleWrapper>
    );
  }

  return (
    <TitleWrapper>
      {companyAgeTitleData.map((companyAgeTitle) => (
        <Title key={companyAgeTitle}>{TARGET_COMPANY_AGE_TEXTS[companyAgeTitle]}</Title>
      ))}
    </TitleWrapper>
  );
}

export default CompanyAgeTitle;
