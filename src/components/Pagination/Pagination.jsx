import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import scrollToTop from 'utils/scroll-to-top';

import { Container, Page, Shevron } from './Pagination.styled';

const MAX_DISPLAYED_PAGE_NUMBERS = 5;

const Pagination = ({ totalPages, currentPage, onClick }) => {
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
      scrollToTop();
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      onClick(currentPage + 1);
      scrollToTop();
    }
  };

  const handlePageNumberClick = pageNumber => {
    if (currentPage !== pageNumber) {
      onClick(pageNumber);
      scrollToTop();
    }
  };

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <Container>
      <Shevron
        onClick={handlePreviousPageClick}
        type="button"
        className={isPrevDisabled && 'disabled'}
      >
        <FiChevronLeft size={27} />
      </Shevron>
      {displayedPageNumbers.map(page => (
        <Page
          key={page}
          type="button"
          $active={currentPage === page ? 'true' : 'false'}
          onClick={() => {
            handlePageNumberClick(page);
          }}
        >
          {page}
        </Page>
      ))}
      <Shevron
        onClick={handleNextPageClick}
        type="button"
        className={isNextDisabled && 'disabled'}
      >
        <FiChevronRight size={27} />
      </Shevron>
    </Container>
  );
};

export default Pagination;
