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
    padding: 5px 10px;
    line-height: 1.42857143;
    text-decoration: none;
    color: #707070;
    cursor: pointer;
    font-size: 12px;
    background-color: transparent;
  }

  .pagination .selected a {
    color: #ffffff;
    background-color: #e4163a;
    border: none;
    outline: none;
    box-shadow: none;
  }

  .pagination .page-link:hover {
    background-color: #ff768e;
    color: #ffffff;
  }

  .pagination .previous a {
    background: none;
    color: #707070;
  }

  .pagination .next a {
    background: none;
    color: #707070;
  }

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    .pagination > li > a {
      padding: 6px 14px;
      line-height: 1.42857143;
      font-size: 18px;
    }
  }
`;
