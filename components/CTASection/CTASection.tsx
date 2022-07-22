import * as Styled from './CTASection.styled';
import { DESCRIPTIONS, HREF, CTA_TEXT } from './CTASection.constants';

function CTASection() {
  return (
    <Styled.Container>
      <Styled.ResposiveContainer>
        <Styled.Wrapper>
          <Styled.Description>
            {DESCRIPTIONS.map((description) => (
              <p key={description}>{description}</p>
            ))}
          </Styled.Description>
          <Styled.CTA href={HREF} target="_blank" rel="noreferrer">
            {CTA_TEXT}
          </Styled.CTA>
          <Styled.SemiCircle $upward={false} />
          <Styled.SemiCircle $upward />
        </Styled.Wrapper>
      </Styled.ResposiveContainer>
    </Styled.Container>
  );
}

export default CTASection;
