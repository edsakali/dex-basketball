import styled from "styled-components";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

type Props = Pick<
  ReactPaginateProps,
  "pageCount" | "onPageChange" | "initialPage"
>;
export const Pagination = (props: Props) => (
  <PaginationWrapper>
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      containerClassName={"pagination"}
      pageLinkClassName={"page-link"}
      {...props}
    />
  </PaginationWrapper>
);
const PaginationWrapper = styled.div`
  .pagination > li {
    display: inline-block;
    padding-left: 0;
  }

  .pagination > li {
    list-style: none;
  }

  .pagination > li > a {
    position: relative;
    float: left;
    padding: 5px 14px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    background-color: transparent;
  }

  .pagination .selected a {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red};
    border: none;
    outline: none;
    box-shadow: none;
  }

  .pagination .page-link:hover {
    background-color: ${({ theme }) => theme.colors.lightestRed};
    color: ${({ theme }) => theme.colors.white};
  }

  .pagination .previous a {
    background: none;
    color: ${({ theme }) => theme.colors.grey};
  }

  .pagination .next a {
    background: none;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
