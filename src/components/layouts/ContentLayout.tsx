import styled from "styled-components";
import React, { FC } from "react";
import { ContentHeader } from "../ContentHeader";
import { PropsInputSearch } from "../ui/InputSearch";
import { ContentFooter } from "../ContentFooter";
import { SelectProps } from "../ui/CustomSelect";

interface Props extends PropsInputSearch, SelectProps {
  onSubmit: () => void;
  onPageChange?(selectedItem: { selected: number }): void;
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
}) => {
  return (
    <CardsSection>
      <ContentHeader
        addItemPath={addItemPath}
        register={register}
        placeholder={placeholder}
        nameSearch={nameSearch}
        onSubmit={onSubmit}
      />
      {children}
      <ContentFooter
        nameSelect={nameSelect}
        control={control}
        onPageChange={onPageChange}
      />
    </CardsSection>
  );
};
const CardsSection = styled.section`
  padding: 0 12px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 0;
  }
`;
