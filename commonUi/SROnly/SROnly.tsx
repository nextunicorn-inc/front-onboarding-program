import * as Styled from './SROnly.styled';

function SROnly({ children }: { children: string }) {
  return <Styled.SROnly>{children}</Styled.SROnly>;
}
export default SROnly;
