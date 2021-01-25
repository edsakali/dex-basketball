import styled from "styled-components";
import { FC } from "react";
import { ContentHeader } from "../ContentHeader";
import { PropsInputSearch } from "../ui/InputSearch";
import { ContentFooter } from "../ContentFooter";
import { SelectProps } from "../ui/CustomSelect";

interface Props extends PropsInputSearch, SelectProps {
  onSubmit: () => void;
}

export const ContentLayout: FC<Props> = ({
  register,
  placeholder,
  nameSearch,
  onSubmit,
  nameSelect,
  control,
  children,
}) => {
  return (
    <CardsSection>
      <ContentHeader
        register={register}
        placeholder={placeholder}
        nameSearch={nameSearch}
        onSubmit={onSubmit}
      />
      <CardsContainer>{children}</CardsContainer>
      <ContentFooter nameSelect={nameSelect} control={control} />
    </CardsSection>
  );
};
const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 16px 0;
  overflow-y: auto;
  max-height: 752px;
  height: 100%;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    height: 100%;
    margin: 32px 0;
  } ;
`;
