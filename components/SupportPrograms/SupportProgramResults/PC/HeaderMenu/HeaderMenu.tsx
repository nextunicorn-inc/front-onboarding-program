import * as Styled from './HeaderMenu.styled';

function HeaderMenu() {
  return (
    <Styled.MenuTitleWrapper>
      <Styled.MenuTitle>진행 상태</Styled.MenuTitle>

      {/* <Styled.MenuTitle>지원 분야</Styled.MenuTitle> */}
      <Styled.ApplyAreasTitle>지원 분야</Styled.ApplyAreasTitle>

      <Styled.ProgramTitle>프로그램 명</Styled.ProgramTitle>

      <Styled.CompanyAgeTitle>창업 기간</Styled.CompanyAgeTitle>
      {/* <Styled.MenuTitle>창업 기간</Styled.MenuTitle> */}

      {/* <Styled.MenuTitle>마감일</Styled.MenuTitle> */}
      <Styled.EndDataTitle>마감일</Styled.EndDataTitle>

      {/* <Styled.MenuTitle>지원 방법</Styled.MenuTitle> */}
      <Styled.ApplyWayTitle>지원 방법</Styled.ApplyWayTitle>
    </Styled.MenuTitleWrapper>
  );
}

export default HeaderMenu;
