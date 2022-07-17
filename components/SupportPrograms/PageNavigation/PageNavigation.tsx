import * as Styled from './PageNavigation.styled';

function PageNavigation() {
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <Styled.Wrapper>
      {pageNumbers.map((page) => (
        <Styled.pageButton key={page}>{page}</Styled.pageButton>
      ))}
    </Styled.Wrapper>
  );
}

export default PageNavigation;
