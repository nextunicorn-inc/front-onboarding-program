import styled from '@emotion/styled';
import { FontSize, FontWeight } from '../../utils';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: aliceblue;
`;

const LeftButtonWrapper = styled.ul`
  display: flex;
`;

const RightButtonWrapper = styled.ul`
  display: flex;
`;

const SearchButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInAndUpWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.a`
  color: var(--base-naturalgray8);
  ${FontSize.size14};
  ${FontWeight.regular};
  cursor: pointer;
  margin-right: 28px;
`;

const ActiveButton = styled.a`
  color: var(--color-primary);
  ${FontSize.size14};
  ${FontWeight.regular};
  cursor: pointer;
  margin-right: 28px;
`;

export {
  Wrapper,
  Button,
  ActiveButton,
  LeftButtonWrapper,
  RightButtonWrapper,
  SearchButtonWrapper,
  SignInAndUpWrapper,
};
