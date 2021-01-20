import { FC } from "react";
import styled from "styled-components";
import { CustomSelect, SelectProps } from "./ui/CustomSelect";
import { Pagination } from "./Pagination";

export const ContentFooter: FC<SelectProps> = ({ nameSelect, control }) => {
  return (
    <Wrapper>
      <Pagination pageCount={10} onPageChange={() => {}} />
      <CustomSelect nameSelect={nameSelect} control={control} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
