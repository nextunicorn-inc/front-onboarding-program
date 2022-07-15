import * as Styled from './HeaderMenu.styled';

function HeaderMenu() {
  return (
    <Styled.MenuTitleWrapper>
      <Styled.MenuTitle>진행 상태</Styled.MenuTitle>
      <Styled.MenuTitle>지원 분야</Styled.MenuTitle>
      <Styled.ProgramTitle>프로그램 명</Styled.ProgramTitle>
      <Styled.MenuTitle>창업 기간</Styled.MenuTitle>
      <Styled.MenuTitle>마감일</Styled.MenuTitle>
      <Styled.MenuTitle>지원 방법</Styled.MenuTitle>
    </Styled.MenuTitleWrapper>
  );
}

export default HeaderMenu;
