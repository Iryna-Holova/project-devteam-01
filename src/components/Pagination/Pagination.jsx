import React from 'react';
import {
  Container,
  StyledChevronLeft,
  StyledChevronRight,
  Page,
} from './Pagination.styled';

const MAX_DISPLAYED_PAGE_NUMBERS = 5;

const Pagination = ({
  totalPages,
  currentPage,
  onClick,
  scrollId = null,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  let firstPageIndex = currentPage > 2 ? currentPage - 2 : 1;
  let lastPageIndex = firstPageIndex + MAX_DISPLAYED_PAGE_NUMBERS - 1;

  if (lastPageIndex > totalPages) {
    lastPageIndex = totalPages;
    firstPageIndex = lastPageIndex - MAX_DISPLAYED_PAGE_NUMBERS + 1;

    if (firstPageIndex < 1) {
      firstPageIndex = 1;
    }
  }

  const displayedPageNumbers = pageNumbers.slice(
    firstPageIndex - 1,
    lastPageIndex
  );

  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      onClick(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      onClick(currentPage + 1);
    }
  };

  const handlePageNumberClick = (pageNumber) => {
    if (currentPage !== pageNumber) {
      onClick(pageNumber);
    }
  };

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <Container>
      <StyledChevronLeft
        size={30}
        onClick={handlePreviousPageClick}
        disabled={isPrevDisabled}
        style={{ opacity: isPrevDisabled ? 0.5 : 1 }}
      />
      {displayedPageNumbers.map((page) => (
        <Page
          key={page}
          $active={currentPage === page ? 'true' : 'false'}
          onClick={() => {
            handlePageNumberClick(page);
          }}
        >
          {page}
        </Page>
      ))}
      <StyledChevronRight
        size={30}
        onClick={handleNextPageClick}
        disabled={isNextDisabled}
        style={{ opacity: isNextDisabled ? 0.5 : 1 }}
      />
    </Container>
  );
};

export default Pagination;
