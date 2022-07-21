import * as Styled from './CTASection.styled';
import { HREF } from './CTASection.constants';

function CTASection() {
  return (
    <Styled.Container>
      <Styled.ResposiveContainer>
        <Styled.Wrapper>
          <Styled.Description>
            <p>스타트업 모집과 홍보가 필요하신가요?</p>
            <span>지원프로그램 등록 문의를 남겨주세요.</span>
          </Styled.Description>
          <Styled.CTA href={HREF} target="_blank" rel="noreferrer">
            지원프로그램 등록 신청
          </Styled.CTA>
          <Styled.SemiCircle $upward={false} />
          <Styled.SemiCircle $upward />
        </Styled.Wrapper>
      </Styled.ResposiveContainer>
    </Styled.Container>
  );
}

export default CTASection;
