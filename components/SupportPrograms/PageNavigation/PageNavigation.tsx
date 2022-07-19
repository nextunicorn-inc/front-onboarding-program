import React from 'react';
import { useRouter } from 'next/router';
import * as Styled from './PageNavigation.styled';
import { Chevron } from '../../../commonUi/Icons';

function PageNavigation({ data, onClick }) {
  const router = useRouter();

  const totalDataCount = data?.paging.totalElements;
  const lastPageNumber = data?.paging.totalPages;
  const currentPageNumber = parseInt(router.query.page ?? 1, 10);

  const totalPages = data?.paging.totalPages;

  const pageNumberList = Array(totalPages)
    .fill(0)
    .map((arr: [], i: number) => i + 1);

  return (
    <Styled.Wrapper>
      {currentPageNumber !== 1 && (
        <Styled.ArrowButtonWrapper role="button" onClick={() => onClick(currentPageNumber - 1)}>
          <Chevron direction={'Left'} size={24} />
        </Styled.ArrowButtonWrapper>
      )}

      {pageNumberList.map((page) => (
        <Styled.PageButton
          key={page}
          $isActive={currentPageNumber === page}
          onClick={() => onClick(page)}
        >
          {page}
        </Styled.PageButton>
      ))}

      {totalDataCount && lastPageNumber !== currentPageNumber && (
        <Styled.ArrowButtonWrapper role="button" onClick={() => onClick(currentPageNumber + 1)}>
          <Chevron direction={'Right'} size={24} />
        </Styled.ArrowButtonWrapper>
      )}
    </Styled.Wrapper>
  );
}

export default PageNavigation;
