import React, { FC } from "react";
import styled from "styled-components";
import { CustomSelect, SelectProps } from "./ui/CustomSelect";
import { Pagination } from "./Pagination";

const options = [
  { value: "6", label: "6" },
  { value: "12", label: "12" },
  { value: "24", label: "24" },
];

interface Props extends SelectProps {
  pageCount: number;
  onPageChange?(selectedItem: { selected: number }): void;
}

export const ContentFooter: FC<Props> = ({
  nameSelect,
  control,
  onPageChange,
  pageCount,
}) => {
  return (
    <ContentWrapper>
      <Pagination pageCount={pageCount} onPageChange={onPageChange} />
      <CustomSelectWrapper>
        <CustomSelect
          nameSelect={nameSelect}
          control={control}
          selectPageSize
          options={options}
        />
      </CustomSelectWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomSelectWrapper = styled.div`
  max-width: 60px;
  width: 100%;
  border: 0.5px solid #d1d1d1;
  border-radius: 4px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-width: 88px;
  }
`;
