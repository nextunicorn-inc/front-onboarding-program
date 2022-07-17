import { useState } from 'react';

import { Chevron, Close, NextUnicornLogo, Search, Hamburger } from 'commonUi/Icons';
import * as Styled from './Header.styled';
import { IconBox } from './IconBox';

import {
  NAVIGATIONS,
  ALLIANCE_AND_EVENT,
  INTRODUCE_OF_SERVICES,
  LOGIN,
  SIGNUP,
} from './Header.constants';

function Header() {
  const [isClickIntroduceService, setIsClickIntroduceService] = useState(false);
  const [isClickSearch, setIsClickSearch] = useState(false);
  const [isClickSideMenu, setIsClickSideMenu] = useState(false);
  const [isClickSideDetailMenu, setIsClickSideDetailMenu] = useState(false);

  const handleClickIntroduceService = () => {
    setIsClickIntroduceService(!isClickIntroduceService);
  };

  const handleClickSearch = () => {
    setIsClickSearch(!isClickSearch);
  };

  const handleClickSideMenu = () => {
    setIsClickSideMenu(!isClickSideMenu);
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
            <NextUnicornLogo />

            <Styled.MenuList>
              {NAVIGATIONS.map(({ title, href }) => {
                if (title === '지원프로그램') {
                  return (
                    <Styled.ActiveMenu key={title}>
                      <a href={href}>{title}</a>
                    </Styled.ActiveMenu>
                  );
                }
                return (
                  <Styled.Menu key={title}>
                    <a href={href}>{title}</a>
                  </Styled.Menu>
                );
              })}
            </Styled.MenuList>
          </Styled.MenuWrapper>

          <Styled.MenuWrapper>
            <Styled.MenuList>
              <Styled.Menu>
                <a href={ALLIANCE_AND_EVENT.href}>{ALLIANCE_AND_EVENT.title}</a>
              </Styled.Menu>

              <Styled.ServiceMenu>
                <Styled.ServiceMenuTitle onClick={handleClickIntroduceService}>
                  {INTRODUCE_OF_SERVICES.title}
                </Styled.ServiceMenuTitle>

                {isClickIntroduceService && (
                  <Styled.ServiceDetailMenuList>
                    {INTRODUCE_OF_SERVICES.routes.map(({ title, href }) => (
                      <Styled.ServiceDetailMenu>
                        <a key={title} href={href}>
                          {title}
                        </a>
                      </Styled.ServiceDetailMenu>
                    ))}
                  </Styled.ServiceDetailMenuList>
                )}
              </Styled.ServiceMenu>

              <Styled.SearchMenu onClick={handleClickSearch}>
                <Search size={20} />
                <Styled.SearchTitle>검색</Styled.SearchTitle>
              </Styled.SearchMenu>

              {isClickSearch && (
                <Styled.SearchLayout>
                  <Styled.SearchInputLayout>
                    <Styled.SearchInputBoxWrapper>
                      <Styled.SearchInputBox>
                        <Styled.SearchInput placeholder="스타트업, 전문투자자, 스타트업 뉴스 검색하기" />
                        <Search size={40} />
                      </Styled.SearchInputBox>
                    </Styled.SearchInputBoxWrapper>
                  </Styled.SearchInputLayout>

                  <Styled.SearchInputOuter />
                </Styled.SearchLayout>
              )}

              <Styled.SignMenu>
                <a href={LOGIN.href}>{LOGIN.title}</a>

                <Styled.SignSeparator />

                <Styled.SignUpTitle>
                  <a href={SIGNUP.href}>{SIGNUP.title}</a>
                </Styled.SignUpTitle>
              </Styled.SignMenu>
            </Styled.MenuList>
          </Styled.MenuWrapper>

          <Styled.ResponsiveMenuList>
            <IconBox IconElement={Search} onClick={handleClickSearch} />
            <IconBox IconElement={Hamburger} onClick={handleClickSideMenu} />
            {isClickSearch && (
              <Styled.SearchLayout>
                <Styled.SearchInputLayout>
                  <Styled.SearchInputBoxWrapper>
                    <Styled.SearchInputBox>
                      <Styled.SearchInput placeholder="스타트업, 전문투자자, 스타트업 뉴스 검색하기" />
                      <Search size={40} />
                    </Styled.SearchInputBox>
                  </Styled.SearchInputBoxWrapper>
                </Styled.SearchInputLayout>

                <Styled.SearchInputOuter />
              </Styled.SearchLayout>
            )}
          </Styled.ResponsiveMenuList>
        </Styled.Navigation>

        {isClickSideMenu && <Styled.SideNavigation />}
        <Styled.SideMenuWrapper className={isClickSideMenu ? 'open' : 'close'}>
          <Styled.CloseMenuIcons onClick={handleClickSideMenu}>
            <Close size={24} color="var(--color-naturalgray7)" />
          </Styled.CloseMenuIcons>

          <Styled.SideSignButtonsWrapper>
            <Styled.SideLoginInTitle>
              <a href={LOGIN.href}>{LOGIN.title}</a>
            </Styled.SideLoginInTitle>

            <Styled.SideSignSeparator />

            <Styled.SideSignUpTitle>
              <a href={SIGNUP.href}>{SIGNUP.title}</a>
            </Styled.SideSignUpTitle>
          </Styled.SideSignButtonsWrapper>

          <Styled.SideMenuList>
            {NAVIGATIONS.map(({ title, href, Icon }) => (
              <Styled.SideMenu key={title}>
                <Icon />
                <a key={title} href={href}>
                  <Styled.SideMenuTitle>{title}</Styled.SideMenuTitle>
                </a>
              </Styled.SideMenu>
            ))}

            <Styled.SideServiceIntroduceWrapper onClick={handleClickSideDetailMenu}>
              <Styled.SideServiceIntroduceTitleBox>
                <INTRODUCE_OF_SERVICES.Icon />
                <Styled.SideMenuTitle>{INTRODUCE_OF_SERVICES.title}</Styled.SideMenuTitle>
              </Styled.SideServiceIntroduceTitleBox>
              <Chevron direction={isClickSideDetailMenu ? 'Up' : 'Down'} size={24} />
            </Styled.SideServiceIntroduceWrapper>

            {isClickSideDetailMenu && (
              <Styled.SideDetailMenu>
                {INTRODUCE_OF_SERVICES.routes.map(({ title, href }) => (
                  <li key={title}>
                    <Styled.SideDetailMenuTitle>
                      <a key={title} href={href}>
                        {title}
                      </a>
                    </Styled.SideDetailMenuTitle>
                  </li>
                ))}
              </Styled.SideDetailMenu>
            )}
          </Styled.SideMenuList>
        </Styled.SideMenuWrapper>
      </Styled.ResponsiveSection>
    </Styled.Layout>
  );
}

export default Header;
