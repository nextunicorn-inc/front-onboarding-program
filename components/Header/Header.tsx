import Link from 'next/link';
import { useState } from 'react';
import Icons from '../../commonUi/Icons';

import {
  NAVIGATIONS,
  ALLIANCE_AND_EVENT,
  INTRODUCE_OF_SERVICES,
  LOGIN,
  SIGNUP,
} from './Header.constants';

import * as Styled from './Header.styled';

function Header() {
  const [isClickIntroduceService, setIsClickIntroduceService] = useState(false);
  const [isClickSearch, setIsClickSearch] = useState(false);
  const [isClickSidMenu, setIsClickSideMenu] = useState(false);
  const [isClickSideDetailMenu, setIsClickSideDetailMenu] = useState(false);

  const handleClickIntroduceService = () => {
    setIsClickIntroduceService(!isClickIntroduceService);
  };

  const handleClickSearch = () => {
    setIsClickSearch(!isClickSearch);
  };

  const handleClickSideMenu = () => {
    setIsClickSideMenu(!isClickSidMenu);
    setIsClickSearch(false);
    setIsClickSideDetailMenu(false);
  };

  const handleClickSideDetailMenu = () => {
    setIsClickSideDetailMenu(!isClickSideDetailMenu);
  };

  return (
    <Styled.Layout>
      <Styled.ResponsiveSection>
        <Styled.Navigation>
          <Styled.MenuWrapper>
            <Icons.Logo color="#006CFF" />

            <Styled.MenuList>
              {NAVIGATIONS.map(({ title, href }) => {
                if (title === '지원프로그램') {
                  return (
                    <Link key={title} href={href} passHref>
                      <Styled.ActiveMenu>{title}</Styled.ActiveMenu>
                    </Link>
                  );
                }
                return (
                  <Link key={title} href={href} passHref>
                    <Styled.Menu>{title}</Styled.Menu>
                  </Link>
                );
              })}
            </Styled.MenuList>
          </Styled.MenuWrapper>

          <Styled.MenuWrapper>
            <Styled.MenuList>
              <Link href={ALLIANCE_AND_EVENT.href} passHref>
                <Styled.Menu>{ALLIANCE_AND_EVENT.title}</Styled.Menu>
              </Link>

              <Styled.ServiceMenu>
                <Styled.ServiceMenuTitle onClick={handleClickIntroduceService}>
                  {INTRODUCE_OF_SERVICES.title}
                </Styled.ServiceMenuTitle>

                {isClickIntroduceService && (
                  <Styled.ServiceDetailMenu>
                    {INTRODUCE_OF_SERVICES.routes.map(({ title, href }) => (
                      <Link key={title} href={href} passHref>
                        <Styled.ServiceDetailMenuTitle>{title}</Styled.ServiceDetailMenuTitle>
                      </Link>
                    ))}
                  </Styled.ServiceDetailMenu>
                )}
              </Styled.ServiceMenu>

              <Styled.SearchMenu onClick={handleClickSearch}>
                <Icons.Search />
                <Styled.SearchTitle>검색</Styled.SearchTitle>
              </Styled.SearchMenu>

              {isClickSearch && (
                <Styled.SearchLayout>
                  <Styled.SearchInputLayout>
                    <Styled.SearchInputBoxWrapper>
                      <Styled.SearchInputBox>
                        <Styled.SearchInput placeholder="스타트업, 전문투자자, 스타트업 뉴스 검색하기" />
                        <Icons.Search />
                      </Styled.SearchInputBox>
                    </Styled.SearchInputBoxWrapper>
                  </Styled.SearchInputLayout>

                  <Styled.SearchInputOuter />
                </Styled.SearchLayout>
              )}

              <Styled.SignMenu>
                <Link href={LOGIN.href} passHref>
                  <Styled.LoginTitle>{LOGIN.title}</Styled.LoginTitle>
                </Link>

                <Styled.SignSeparator />

                <Link href={SIGNUP.href} passHref>
                  <Styled.SignUpTitle>{SIGNUP.title}</Styled.SignUpTitle>
                </Link>
              </Styled.SignMenu>
            </Styled.MenuList>
          </Styled.MenuWrapper>

          <Styled.ResponsiveMenuList>
            <Styled.ResponsiveSearchIcon onClick={handleClickSearch}>
              <Icons.Search24 />
            </Styled.ResponsiveSearchIcon>

            <Styled.ResponsiveMenuIcon onClick={handleClickSideMenu}>
              <Icons.Menu24 />
            </Styled.ResponsiveMenuIcon>

            {isClickSearch && (
              <Styled.SearchLayout>
                <Styled.SearchInputLayout>
                  <Styled.SearchInputBoxWrapper>
                    <Styled.SearchInputBox>
                      <Styled.SearchInput placeholder="스타트업, 전문투자자, 스타트업 뉴스 검색하기" />
                      <Icons.Search24 />
                    </Styled.SearchInputBox>
                  </Styled.SearchInputBoxWrapper>
                </Styled.SearchInputLayout>

                <Styled.SearchInputOuter />
              </Styled.SearchLayout>
            )}
          </Styled.ResponsiveMenuList>
        </Styled.Navigation>

        {isClickSidMenu && (
          <Styled.SideNavigation>
            <Styled.SideMenuWrapper>
              <Styled.CloseMenuIcons onClick={handleClickSideMenu}>
                <Icons.CloseMenu />
              </Styled.CloseMenuIcons>

              <Styled.SideSignButtonsWrapper>
                <Link href={LOGIN.href} passHref>
                  <Styled.SideLoginInTitle>{LOGIN.title}</Styled.SideLoginInTitle>
                </Link>

                <Styled.SideSignSeparator />

                <Link href={SIGNUP.href} passHref>
                  <Styled.SideSignUpTitle>{SIGNUP.title}</Styled.SideSignUpTitle>
                </Link>
              </Styled.SideSignButtonsWrapper>

              <Styled.SideMenuList>
                {NAVIGATIONS.map(({ title, href, Icon }) => (
                  <Styled.SideMenu>
                    <Icon />
                    <Link key={title} href={href} passHref>
                      <Styled.SideMenuTitle>{title}</Styled.SideMenuTitle>
                    </Link>
                  </Styled.SideMenu>
                ))}

                <Styled.SideServiceIntroduceWrapper onClick={handleClickSideDetailMenu}>
                  <Styled.SideServiceIntroduceTitleBox>
                    <INTRODUCE_OF_SERVICES.Icon />
                    <Styled.SideMenuTitle>{INTRODUCE_OF_SERVICES.title}</Styled.SideMenuTitle>
                  </Styled.SideServiceIntroduceTitleBox>

                  {isClickSideDetailMenu ? <Icons.TopArrow /> : <Icons.BottomArrow />}
                </Styled.SideServiceIntroduceWrapper>

                {isClickSideDetailMenu && (
                  <Styled.SideDetailMenu>
                    {INTRODUCE_OF_SERVICES.routes.map(({ title, href }) => (
                      <Link key={title} href={href} passHref>
                        <Styled.SideDetailMenuTitle>{title}</Styled.SideDetailMenuTitle>
                      </Link>
                    ))}
                  </Styled.SideDetailMenu>
                )}
              </Styled.SideMenuList>
            </Styled.SideMenuWrapper>
          </Styled.SideNavigation>
        )}
      </Styled.ResponsiveSection>
    </Styled.Layout>
  );
}

export default Header;
