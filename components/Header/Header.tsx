import Logo from '../../commonUi/Icons/Logo/nextunicorn.svg';

import {
  Wrapper,
  Button,
  ActiveButton,
  LeftButtonWrapper,
  RightButtonWrapper,
  SearchButtonWrapper,
  SignInAndUpWrapper,
  LogoWrapper,
} from './Header.styled';

function Header() {
  return (
    <Wrapper>
      <LeftButtonWrapper>
        <LogoWrapper>
          <Logo fill="var(--color-unicornblue6)" />
        </LogoWrapper>
        <li>
          <Button>파인터</Button>
        </li>
        <li>
          <Button>유니콘LIVE</Button>
        </li>
        <li>
          <ActiveButton>지원프로그램</ActiveButton>
        </li>
        <li>
          <Button>뉴스룸</Button>
        </li>
        <li>
          <Button>유니콘CLASS</Button>
        </li>
      </LeftButtonWrapper>

      <RightButtonWrapper>
        <li>
          <Button>제휴/서비스</Button>
        </li>
        <li>
          <Button>서비스 안내</Button>
        </li>
        <li>
          <SearchButtonWrapper>
            <Button>검색</Button>
          </SearchButtonWrapper>
        </li>
        <li>
          <SignInAndUpWrapper>
            <Button>로그인</Button>
            <ActiveButton>회원가입</ActiveButton>
          </SignInAndUpWrapper>
        </li>
      </RightButtonWrapper>
    </Wrapper>
  );
}

export default Header;
