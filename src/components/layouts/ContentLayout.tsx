import styled from "styled-components";
import React, { FC } from "react";
import { ContentHeader } from "../ContentHeader";
import { PropsInputSearch } from "../ui/InputSearch";
import { ContentFooter } from "../ContentFooter";
import { SelectOptions, SelectProps } from "../ui/Select/Select";

interface Props
  extends PropsInputSearch,
    Pick<SelectProps, "control" | "handleInputChange"> {
  pageCount: number;
  onPageChange(selectedItem: { selected: number }): void;
  addItemPath: string;
  nameSearchSelect?: string;
  selectOptions?: SelectOptions;
}

export const ContentLayout: FC<Props> = ({
  register,
  placeholder,
  nameSearch,
  control,
  children,
  onPageChange,
  addItemPath,
  pageCount,
  nameSearchSelect,
  selectOptions,
  handleInputChange,
}) => {
  return (
    <CardsSection>
      <ContentHeader
        selectOptions={selectOptions}
        handleInputChange={handleInputChange}
        nameSearchSelect={nameSearchSelect}
        control={control}
        addItemPath={addItemPath}
        register={register}
        placeholder={placeholder}
        nameSearch={nameSearch}
      />
      <ContentWrapper>{children}</ContentWrapper>
      <ContentFooter
        pageCount={pageCount}
        control={control}
        onPageChange={onPageChange}
      />
    </CardsSection>
  );
};
const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  min-height: 650px;
  margin: 16px 0;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    margin: 0;
  }
`;
