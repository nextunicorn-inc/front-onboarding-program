import styled from '@emotion/styled';
import { MediaQuery, FontSize, FontWeight } from 'utils';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;

  ${MediaQuery.tablet} {
    padding-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1304px;
  padding: 0 32px;
  margin: 0 auto;
  position: relative;

  ${MediaQuery.tablet || MediaQuery.mobile} {
    padding: 0 0 0 32px;
  }

  ${MediaQuery.mobile} {
    padding: 0 0 0 20px;
  }
`;

export const NoticeHeaderTitle = styled.h3`
  margin: 0;
  ${FontSize.size14}
  ${FontWeight.regular}
  color: var(--color-naturalgray8);
`;

export const SupportProgramsTitle = styled.h2`
  padding-left: 8px;
  ${FontWeight.bold}
  ${FontSize.size24}
  color: var(--color-naturalgray9);

  ${MediaQuery.mobile} {
    padding-left: 0;
  }

  ${MediaQuery.tablet} {
    padding-left: 0;
  }
`;
