import styled from "styled-components";
import React, { FC } from "react";
import { ContentHeader } from "../ContentHeader";
import { PropsInputSearch } from "../ui/InputSearch";
import { ContentFooter } from "../ContentFooter";
import { SelectProps } from "../ui/CustomSelect";

interface Props extends PropsInputSearch, SelectProps {
  pageCount: number;
  onSubmit: () => void;
  onPageChange(selectedItem: { selected: number }): void;
  addItemPath: string;
}

export const ContentLayout: FC<Props> = ({
  register,
  placeholder,
  nameSearch,
  onSubmit,
  nameSelect,
  control,
  children,
  onPageChange,
  addItemPath,
  pageCount,
}) => {
  return (
    <CardsSection>
      <ContentTopWrapper>
        <ContentHeader
          addItemPath={addItemPath}
          register={register}
          placeholder={placeholder}
          nameSearch={nameSearch}
          onSubmit={onSubmit}
        />
        {children}
      </ContentTopWrapper>
      <ContentFooter
        pageCount={pageCount}
        nameSelect={nameSelect}
        control={control}
        onPageChange={onPageChange}
      />
    </CardsSection>
  );
};
const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 0 12px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 0;
  }
`;

const ContentTopWrapper = styled.div``;
