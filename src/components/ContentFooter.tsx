import React from "react";
import styled from "styled-components";
import { Select, SelectProps } from "./ui/Select/Select";
import { Pagination } from "./Pagination";

const options = [
  { value: "6", label: "6" },
  { value: "12", label: "12" },
  { value: "24", label: "24" },
];

interface Props extends Pick<SelectProps, "control"> {
  pageCount: number;
  onPageChange?(selectedItem: { selected: number }): void;
}

export const ContentFooter = ({ control, onPageChange, pageCount }: Props) => {
  return (
    <ContentWrapper>
      <Pagination pageCount={pageCount} onPageChange={onPageChange} />
      <SelectWrapper>
        <Select
          nameSelect={"pageSize"}
          control={control}
          selectPageSize
          options={options}
        />
      </SelectWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectWrapper = styled.div`
  max-width: 88px;
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.lightestGrey};
  border-radius: 4px;
`;
