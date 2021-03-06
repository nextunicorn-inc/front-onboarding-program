import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  ${MediaQuery.mobile} {
    width: 100vw;
    height: 100vh;
  }
`;

export const CloseButton = styled.button`
  padding: 0;
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
  padding-top: 32px;

  background-color: var(--color-naturalgray0);
  border-radius: 5px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.03);

  ${MediaQuery.tablet} {
    padding-top: 15px;
    margin-bottom: 23px;
    height: 720px;
  }

  ${MediaQuery.mobile} {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
`;

export const HeadingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  ${MediaQuery.tablet} {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  ${MediaQuery.mobile} {
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h2`
  ${FontSize.size24};
  ${FontWeight.bold};
  color: #3a3a3a;
  letter-spacing: -0.002em;

  ${MediaQuery.tablet} {
    ${FontSize.size16}
  }
`;

export const Xpadding = styled.div`
  padding: 0 28px;

  ${MediaQuery.mobile} {
    padding: 0 20px;
  }
`;

export const FilterListWrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;

  padding: 0 28px 72px 28px;
  ${MediaQuery.mobile} {
    padding: 0 20px 32px 20px;
  }
`;

export const ApplyButtonWrapper = styled(Xpadding)`
  padding-top: 12px;
  padding-bottom: 24px;
  ${MediaQuery.mobile} {
    padding-bottom: 24px;
  }
`;

export const ApplyButton = styled.button`
  cursor: pointer;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 48px;

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

  ${MediaQuery.tablet} {
    width: 220px;
    margin: 0 auto;
  }

  ${MediaQuery.mobile} {
    width: 100%;
  }
`;

export const ResetButton = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  color: var(--color-naturalgray7);
  background-color: var(--color-bluegray0);

  ${FontSize.size14};
`;
