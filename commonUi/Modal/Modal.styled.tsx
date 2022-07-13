import styled from '@emotion/styled';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 8;
  background-color: hsla(0, 0%, 0%, 0.4);
`;
