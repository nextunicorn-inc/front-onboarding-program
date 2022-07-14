import styled from '@emotion/styled';
import { FontSize, FontWeight } from 'utils';

export const Wrapper = styled.article`
  position: relative;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 12px;
  padding-right: 42px;

  ${FontSize.size14};

  border: 1px solid #d6dae3;
  border-radius: 5px;
  color: hsla(var(--base-naturalgray), 40%);

  &:focus {
    outline: 1px solid var(--color-unicornblue6);
  }

  &::placeholder {
    color: var(--color-naturalgray4);
  }

  & + svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
`;

export const SearchResults = styled.ul`
  position: absolute;
  width: 100%;
  height: 158px;
  padding: 12px 20px;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  background-color: white;
  z-index: 2;

  border: 1px solid var(--color-unicornblue6);
  border-radius: 5px;
`;

export const SearchResultWrapper = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CheckboxContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms linear;

  &:hover {
    background-color: rgb(217, 233, 255);
  }
`;

export const Checkbox = styled.input`
  margin: 0;
  padding: 0;
  width: 13px;
  height: 13px;
`;

export const SearchResultTitle = styled.p`
  ${FontSize.size14};
  color: rgb(89, 89, 89);
`;

export const MatchedKeyword = styled.span`
  color: var(--color-unicornblue6);
  ${FontWeight.medium};
`;

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-unicorngray7);
  ${FontSize.size14}

  & > h3 {
    ${FontWeight.bold};
    margin-bottom: 4px;
  }
`;
