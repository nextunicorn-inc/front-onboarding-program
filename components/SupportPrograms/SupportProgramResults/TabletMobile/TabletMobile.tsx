import React from 'react';
import * as Styled from './TabletMobile.styled';
import { SupportProgramsQuery } from '../SupportProgramResults.type';
import { Result } from './Result';

function TabletMobile({ data }: { data: SupportProgramsQuery['supportPrograms'] | undefined }) {
  const possibleApplyCount = data?.paging.openedElements;

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>지원 가능 프로그램 {possibleApplyCount}개</Styled.Title>
      </Styled.TitleWrapper>

      <Styled.ResultWrapper>
        <Styled.ResultContainer>
          <Result data={data} />
        </Styled.ResultContainer>
      </Styled.ResultWrapper>
    </Styled.Wrapper>
  );
}

export default TabletMobile;
