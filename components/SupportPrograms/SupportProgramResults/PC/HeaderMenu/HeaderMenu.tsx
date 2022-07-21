import * as Styled from './HeaderMenu.styled';

function HeaderMenu() {
  return (
    <Styled.MenuTitleWrapper>
      <Styled.MenuTitle>진행 상태</Styled.MenuTitle>
      <Styled.ApplyAreasTitle>지원 분야</Styled.ApplyAreasTitle>
      <Styled.ProgramTitle>프로그램 명</Styled.ProgramTitle>
      <Styled.CompanyAgeTitle>창업 기간</Styled.CompanyAgeTitle>
      <Styled.EndDataTitle>마감일</Styled.EndDataTitle>
      <Styled.ApplyWayTitle>지원 방법</Styled.ApplyWayTitle>
    </Styled.MenuTitleWrapper>
  );
}

export default HeaderMenu;
