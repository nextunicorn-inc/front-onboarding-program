import { Fragment } from 'react';
import { NextUnicornLogo } from 'commonUi/Icons';
import * as Styled from './Footer.styled';
import { NAVIGATIONS, SOCIAL_NETWORKS, POLICIES_OF_SERVICES } from './Footer.constants';

function Footer() {
  return (
    <Styled.Layout>
      <Styled.ResponsiveSection>
        <Styled.Navigation>
          <NextUnicornLogo primary={false} />
          <Styled.MenuList>
            {NAVIGATIONS.map((navigation) => (
              <li key={navigation.title}>
                <Styled.MenuTitle>{navigation.title}</Styled.MenuTitle>
                <ul>
                  {navigation.routes.map((route) => (
                    <Styled.Link
                      href={route.href}
                      target="_blank"
                      rel="noreferrer"
                      key={route.title}
                    >
                      {route.title}
                    </Styled.Link>
                  ))}
                </ul>
              </li>
            ))}
          </Styled.MenuList>
        </Styled.Navigation>
        <Styled.CompanyInformation>
          <Styled.Contact>
            <div>
              <span>(주)하프스 l 대표자 장재용</span>
              <Styled.ContactSeparator>l</Styled.ContactSeparator>
              <span>개인정보책임관리자 이주영(contact@nextunicorn.kr)</span>
              <br />
              <span>사업자등록번호 139-87-00196</span>
              <Styled.ContactSeparator>l</Styled.ContactSeparator>
              <span>통신 판매 신고 번호제 2017-서울강남-04053 호</span>
              <br />
              <span>서울특별시 서초구 서초대로77길 55, 801호 </span>
              <Styled.ContactSeparator>l</Styled.ContactSeparator>
              <span>contact@nextunicorn.kr</span>
            </div>
          </Styled.Contact>
          <Styled.SocialNetworks>
            {SOCIAL_NETWORKS.map((socialNetwork) => {
              const { Icon } = socialNetwork;
              return (
                <a
                  key={socialNetwork.title}
                  href={socialNetwork.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon width={24} height={24} color="var(--color-naturalgray4)" />
                </a>
              );
            })}
          </Styled.SocialNetworks>
        </Styled.CompanyInformation>
        <Styled.PoliciesOfService>
          <div>
            {POLICIES_OF_SERVICES.map((policy, index, { length }) => {
              return (
                <Fragment key={policy.title}>
                  {index + 1 === length && <Styled.Bar />}
                  <Styled.TermLink href={policy.href} rel="noreferrer">
                    {policy.title}
                  </Styled.TermLink>
                </Fragment>
              );
            })}
          </div>
          <p>© Halfz Inc. All rights reserved.</p>
        </Styled.PoliciesOfService>
        <Styled.Notice>
          넥스트유니콘 서비스는 전문투자자와 스타트업이 자율적으로 서로에 대한 IR정보 등을 확인할 수
          있는 플랫폼 서비스로, 주식회사 하프스는 이를 중개하거나 자문하는 투자중개업 및
          투자자문업을 영위하지 않습니다. 따라서 실제 투자계약, 투자손실의 위험 등에 대한 책임은
          계약 당사자 각자에게 있습니다.
        </Styled.Notice>
      </Styled.ResponsiveSection>
    </Styled.Layout>
  );
}

export default Footer;
