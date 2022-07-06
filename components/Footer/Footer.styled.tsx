import styled from '@emotion/styled';
import { FontSize, FontWeight, MediaQuery } from '../../utils';

export const Layout = styled.footer`
  padding-bottom: 60px;
  background-color: var(--color-naturalgray0);
  color: var(--color-naturalgray6);

  & a:hover {
    color: var(--color-naturalgray7);
  }

  ${MediaQuery.tablet} {
    padding-left: 32px;
    padding-right: 33px;
  }

  ${MediaQuery.mobile} {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 32px;
  }
`;

export const ResponsiveSection = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-top: 35px;
  padding-bottom: 40px;
  margin-bottom: 32px;

  border-bottom: 1px solid var(--color-naturalgray2);

  ${MediaQuery.mobile} {
    padding-bottom: 24px;
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const MockupLogo = styled.button`
  flex-shrink: 0;
  display: block;
  border: none;
  width: 134px;
  height: 20px;
  background-color: steelblue;

  ${MediaQuery.mobile} {
    margin: 0 auto;
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

export const Link = styled.a`
  display: block;
  width: max-content;
  ${FontSize.size14};
  line-height: 26px;
`;

export const CompanyInformation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${FontSize.size12};

  ${MediaQuery.mobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25.5px;
  }
`;

export const Contact = styled.address`
  font-style: normal;
  margin-bottom: 16px;

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
  gap: 16px;
  align-items: center;
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

  ${MediaQuery.mobile} {
    width: 100%;
    padding-top: 16px;
    text-align: center;
    border-top: 1px solid var(--color-naturalgray2);
  }
`;
