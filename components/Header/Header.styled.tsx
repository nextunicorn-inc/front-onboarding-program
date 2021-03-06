import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Layout = styled.header`
  width: 100%;
  height: 60px;
`;

export const Navigation = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid rgb(209, 209, 209);
  z-index: 10;
  background-color: var(--color-naturalgray0);

  @media screen and (max-width: 1239px) {
    padding: 0 20px;
  }
`;

export const MenuWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const ResponsiveMenuList = styled.ul`
  display: none;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const ResponsiveIcon = styled.span`
  cursor: pointer;
`;

export const Menu = styled.li`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray8);
  cursor: pointer;
  margin-left: 28px;
`;

export const ActiveMenu = styled.li`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-unicornblue6);
  cursor: pointer;
  margin-left: 28px;
`;

export const ServiceMenu = styled.li`
  position: relative;
  cursor: pointer;
  margin-left: 28px;
`;

export const ServiceMenuTitle = styled.h5`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray8);
`;

export const ServiceDetailMenuList = styled.ul`
  z-index: 9;
  display: block;
  position: absolute;
  top: 42px;
  right: -80%;
  background-color: rgb(254, 254, 254);
  box-shadow: rgb(0 0 0 / 30%) 0 4px 9px 0;
  border-radius: 3px;
  padding: 2px 16px;
  text-align: center;
`;

export const ServiceDetailMenu = styled.li`
  display: block;
  min-width: 148px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 14px 0;
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray8);
`;

export const SearchMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 28px;
  cursor: pointer;
`;

export const SearchLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 60px;
  left: 0;
`;

export const SearchInputLayout = styled.div`
  width: 100%;
  height: 200px;
  padding-top: 56px;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(0 0 0 / 8%) 0 12px 28px 0;
  transition: width 0.2s ease-in-out 0s;
  background-color: var(--color-naturalgray0);

  @media screen and (max-width: 1080px) {
    display: flex;
  }

  ${MediaQuery.mobile} {
    height: 97px;
    padding-top: 26px;
  }
`;

export const SearchInputBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchInputBox = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(58, 58, 58);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  ${FontSize.size30};
  line-height: 45px;
  padding: 0;
  border: 0;
  overflow: visible;
  outline: none;
  color: rgb(89, 89, 89);

  ::placeholder {
    color: #656565;
    opacity: 0.2;
  }

  ${MediaQuery.mobile} {
    ::placeholder {
      color: #656565;
      opacity: 0.2;
      font-size: 24px;
    }
  }
`;

export const SearchInputOuter = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-color: rgb(0, 0, 0);
`;

export const SearchTitle = styled.h5`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray8);
  cursor: pointer;
  margin-left: 2px;
`;

export const SignMenu = styled.li`
  display: flex;
  align-items: center;
  margin-left: 28px;
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray8);
`;

export const SignUpTitle = styled.h5`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-unicornblue6);
`;

export const SignSeparator = styled.div`
  width: 1px;
  height: 12px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: var(--color-naturalgray4);
`;

export const SideNavigation = styled.div`
  display: flex;
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const SideMenuWrapper = styled.div`
  flex: 1 0 auto;
  flex-direction: column;
  position: fixed;
  top: 0;
  background-color: rgb(254, 254, 254);
  width: 280px;
  height: 100%;
  padding-bottom: 26px;
  overflow-y: scroll;
  transition: all 300ms cubic-bezier(0.82, 0.085, 0.395, 0.895) 0s;
  z-index: 100;

  &.open {
    right: 0;
  }
  &.close {
    right: -300px;
  }

  ${MediaQuery.mobile} {
    &.open {
      width: 220px;
      right: 0;
    }
    &.close {
      right: -300px;
    }
  }
`;

export const CloseMenuIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;

export const SideSignButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
  margin: 16px;
  padding: 0 16px;
  border-radius: 5px;
  background-color: var(--color-unicornblue6);
`;

export const SideLoginInTitle = styled.h5`
  ${FontSize.size14}
  ${FontWeight.regular}
  color: white;
  cursor: pointer;
`;

export const SideSignUpTitle = styled.h5`
  ${FontSize.size14}
  ${FontWeight.bold}
  color: white;
  cursor: pointer;
`;

export const SideSignSeparator = styled.div`
  width: 1px;
  height: 12px;
  margin: 0 10px;
  background-color: white;
`;

export const SideMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideMenu = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;

  :hover {
    background-color: #b3d4fc;
    color: var(--color-naturalgray8);
    text-shadow: none;
  }
`;

export const SideMenuTitle = styled.h5`
  ${FontSize.size14};
  ${FontWeight.regular};
  color: #595959;
  margin-left: 8px;
`;

export const SideDetailMenu = styled.ul`
  padding-left: 34px;
`;

export const SideDetailMenuTitle = styled.h5`
  display: block;
  margin-top: 14px;
  ${FontSize.size14};
  ${FontWeight.regular};
  color: #595959;
  cursor: pointer;
`;

export const SideServiceIntroduceWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;

  :hover {
    background-color: #b3d4fc;
    color: var(--color-naturalgray8);
    text-shadow: none;
  }
`;

export const SideServiceIntroduceTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
