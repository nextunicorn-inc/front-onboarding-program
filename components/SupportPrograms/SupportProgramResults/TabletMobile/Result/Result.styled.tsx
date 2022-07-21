import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Container = styled.div`
  border-top: 1px solid rgb(165, 171, 191);
  border-bottom: 1px solid rgb(165, 171, 191);

  ${MediaQuery.tablet} {
    border-bottom: none;
  }

  ${MediaQuery.mobile} {
    border-bottom: 1px solid rgb(165, 171, 191);
  }
`;

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  padding-top: 17px;
  cursor: pointer;
  border-bottom: 1px solid var(--color-bluegray1);

  &:last-child {
    border-bottom: unset;
  }
`;

export const StatusAndApplyAreasWrapper = styled.div`
  display: flex;
  align-items: center;

  ${MediaQuery.tablet} {
    line-height: 18px;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h3`
  display: block;
  width: 100%;
  margin-top: 9px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${FontSize.size14};
  ${FontWeight.medium};
  color: var(--color-naturalgray7);
  line-height: 20px;
`;

export const CompanyName = styled.h5`
  margin-top: 12px;
  ${FontSize.size12};
  ${FontWeight.regular};
  line-height: 18px;
  color: var(--color-naturalgray5);
`;

export const DetailInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
`;
