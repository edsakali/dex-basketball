import React, { FC } from "react";
import styled from "styled-components";
import { CustomSelect, SelectProps } from "./ui/CustomSelect";
import { Pagination } from "./Pagination";
import { useSelector } from "react-redux";
import { teamsSelector } from "../modules/teams/teamsSlice";

const options = [
  { value: "6", label: "6" },
  { value: "12", label: "12" },
  { value: "24", label: "24" },
];

interface Props extends SelectProps {
  onPageChange?(selectedItem: { selected: number }): void;
}

const pageCount = (count = 6, size = 6) => count / size;

export const ContentFooter: FC<Props> = ({
  nameSelect,
  control,
  onPageChange,
}) => {
  const { count, size } = useSelector(teamsSelector);

  return (
    <Wrapper>
      <Pagination
        pageCount={Math.ceil(pageCount(count, size))}
        onPageChange={onPageChange}
      />
      <CustomSelect
        nameSelect={nameSelect}
        control={control}
        selectPageSize
        options={options}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
