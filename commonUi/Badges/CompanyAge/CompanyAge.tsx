import React from 'react';
import * as Styled from './CompanyAge.styled';

function CompanyAge({ targetCompanyAges }: { targetCompanyAges: string[] }) {
  // TODO: targetCompanyAges 값이 2개 이상일 경우 처리
  let [targetCompanyAge] = targetCompanyAges;

  if (targetCompanyAge === 'PS') targetCompanyAge = '예비창업자';
  if (targetCompanyAge === 'NM') targetCompanyAge = '무관';

  return (
    <Styled.TagWrapper>
      <Styled.TagText color="#595959">{targetCompanyAge}</Styled.TagText>
    </Styled.TagWrapper>
  );
}

export default CompanyAge;
