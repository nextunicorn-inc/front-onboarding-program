import React from 'react';
import * as Styled from './PC.styled';
import { HeaderMenu } from './HeaderMenu';
import { Result } from './Result';

function PC() {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>지원 가능 프로그램 XX개</Styled.Title>
      </Styled.TitleWrapper>

      <Styled.ResultWrapper>
        <Styled.ResultContainer>
          <HeaderMenu />
          <Result />
        </Styled.ResultContainer>
      </Styled.ResultWrapper>
    </Styled.Wrapper>
  );
}

export default PC;
