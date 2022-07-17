import React from 'react';
import * as Styled from './Title.styled';

function Title({ titleData }: { titleData: { title: string; companyName: string } }) {
  return (
    <Styled.TitleWrapper>
      <Styled.Title>{titleData.title}</Styled.Title>
      <Styled.CompanyName>{titleData.companyName}</Styled.CompanyName>
    </Styled.TitleWrapper>
  );
}

export default Title;
