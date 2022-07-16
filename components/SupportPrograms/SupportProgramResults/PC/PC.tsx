import React, { useState, useEffect } from 'react';
import * as Styled from './PC.styled';
import { HeaderMenu } from './HeaderMenu';
import { Result } from './Result';
import { SupportProgramsQuery } from '../../../../graphql';

function PC({ data }: { data: SupportProgramsQuery['supportPrograms'] }) {
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    if (data) {
      setDataCount(data.data.length);
    }
  }, [data]);

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>지원 가능 프로그램 {dataCount}개</Styled.Title>
      </Styled.TitleWrapper>

      <Styled.ResultWrapper>
        <Styled.ResultContainer>
          <HeaderMenu />
          <Result data={data} />
        </Styled.ResultContainer>
      </Styled.ResultWrapper>
    </Styled.Wrapper>
  );
}

export default PC;
