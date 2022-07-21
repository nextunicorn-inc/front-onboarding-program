import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from 'utils';

export const Layout = styled.footer`
  padding-bottom: 60px;
  background-color: var(--color-naturalgray0);
  color: var(--color-naturalgray6);

  & a:hover {
    color: var(--color-naturalgray7);
  }
  ${MediaQuery.tablet} {
    border-top: 1px solid var(--color-naturalgray2);
  }

  ${MediaQuery.mobile} {
    padding-bottom: 32px;
  }
`;

export const ResponsiveSection = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  @media screen and (max-width: 1239px) {
    padding: 0 32px;
  }

  ${MediaQuery.mobile} {
    padding: 0 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-top: 36px;
  padding-bottom: 40px;
  margin-bottom: 32px;

  border-bottom: 1px solid var(--color-naturalgray2);

  ${MediaQuery.mobile} {
    justify-content: center;
    padding-bottom: 24px;
    margin-bottom: 0;
    border-bottom: none;
  }

  & > svg {
    flex-shrink: 0;
    ${MediaQuery.mobile} {
      margin: 0 auto;
    }
  }
`;

export const MenuList = styled.ul`
  width: 50%;
  display: flex;

  ${MediaQuery.tablet} {
    width: 100%;
    margin-left: 60px;
  }

  ${MediaQuery.mobile} {
    display: none;
  }

  & > li {
    flex-basis: 100%;
  }
`;

export const MenuTitle = styled.h2`
  ${FontSize.size14};
  ${FontWeight.bold};
  margin-bottom: 10px;
`;

export const MenuLink = styled.a`
  display: block;
  width: max-content;
  ${FontSize.size14};
  line-height: 26px;
`;

export const CompanyInformation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 16px;

  ${FontSize.size12};

  ${MediaQuery.mobile} {
    margin-bottom: 24px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Contact = styled.address`
  font-style: normal;

  ${MediaQuery.mobile} {
    display: flex;
    margin-bottom: 17.5px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      & br {
        display: none;
      }
    }
  }
`;

export const ContactSeparator = styled.span`
  display: inline-block;
  margin-left: 3px;
  margin-right: 3px;
  ${MediaQuery.mobile} {
    display: none;
  }
`;

export const SocialNetworks = styled.nav`
  display: inline-flex;
  align-items: center;

  ${MediaQuery.mobile} {
    gap: 15px;
  }
`;

export const SocialNetworkLink = styled.a`
  width: 24px;
  height: 24px;
  display: block;
  &:not(:first-of-type) {
    margin-left: 11px;
  }
  ${MediaQuery.mobile} {
    &:not(:first-of-type) {
      margin-left: 0;
    }
  }
`;

export const PoliciesOfService = styled.nav`
  display: inline-block;
  ${FontSize.size12};
  margin-bottom: 32px;

  & > p {
    color: var(--color-naturalgray5);
  }

  ${MediaQuery.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TermLink = styled.a`
  ${FontWeight.bold};
`;

export const Bar = styled.span`
  display: inline-block;
  width: 2px;
  height: 11px;
  position: relative;
  top: 1px;
  margin: 0 6px;
  background-color: var(--color-naturalgray6);
`;

export const Notice = styled.p`
  width: 675px;
  ${FontSize.size14};
  color: var(--color-naturalgray5);
  white-space: pre-wrap;

  ${MediaQuery.mobile} {
    width: 100%;

    padding: 16px 13px 0 13px;
    ${FontSize.size12};
    text-align: center;
    border-top: 1px solid var(--color-naturalgray3);
  }
`;
