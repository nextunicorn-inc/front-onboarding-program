import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from '../../../../utils';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const ContentsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 654px;
  min-height: 420px;
  max-height: 480px;
  padding: 32px 28px 0 28px;

  background-color: var(--color-naturalgray0);
  border-radius: 5px;
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.03);

  ${MediaQuery.mobile} {
    width: calc(100vw - 114px);
  }
`;

export const HeadingSection = styled.section`
  display: flex;
  justify-content: center;

  margin-bottom: 20px;

  ${MediaQuery.tablet} {
    justify-content: space-between;
    & > * {
      flex-basis: 100%;
    }
  }
`;

export const Heading = styled.h2`
  ${FontSize.size24};
  ${FontWeight.bold};
  color: #3a3a3a;
  letter-spacing: -0.002em;
`;

export const ApplyButton = styled.button`
  cursor: pointer;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  margin-bottom: 20px;
  ${FontSize.size14};
  ${FontWeight.regular};
  color: var(--color-naturalgray0);
  background-color: var(--color-unicornblue6);
  border: none;
  border-radius: 5px;

  transition: all 250ms linear;

  &:hover {
    background-color: var(--color-unicornblue7);
  }
`;
