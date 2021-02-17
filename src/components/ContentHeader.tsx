import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { PropsInputSearch, InputSearch } from "./ui/InputSearch";
import { Select, SelectOptions, SelectProps } from "./ui/Select/Select";
import { useSelector } from "react-redux";
import { playersSelector } from "../modules/players/playersSlice";

interface Props
  extends PropsInputSearch,
    Pick<SelectProps, "control" | "handleInputChange"> {
  addItemPath: string;
  nameSearchSelect?: string;
  loadOptions?: (inputValue: string) => Promise<any> | void;
  selectOptions?: SelectOptions;
}

export const ContentHeader = ({
  register,
  placeholder,
  nameSearch,
  addItemPath,
  nameSearchSelect,
  control,
  selectOptions,
  handleInputChange,
}: Props) => {
  const { loadingTeamsFilter } = useSelector(playersSelector);

  return (
    <Wrapper>
      <FilterContainer>
        <InputSearch
          register={register}
          placeholder={placeholder}
          nameSearch={nameSearch}
        />
        {nameSearchSelect &&
          selectOptions &&
          handleInputChange &&
          loadingTeamsFilter && (
            <SelectTeamName>
              <Select
                control={control}
                nameSelect={nameSearchSelect}
                isMulti
                options={selectOptions}
                handleInputChange={handleInputChange}
                loading={loadingTeamsFilter}
              />
            </SelectTeamName>
          )}
      </FilterContainer>
      <AddLink to={addItemPath}>
        <Button>Add +</Button>
      </AddLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 100%;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    flex-direction: row;
    gap: 24px;
  }
`;

const SelectTeamName = styled.div`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.lightestGrey};
  border-radius: 4px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-width: 364px;
    margin-right: 24px;
  }
`;

const AddLink = styled(Link)`
  margin-top: 16px;
  width: 100%;
  text-decoration: none;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    width: 104px;
    margin-top: 0;
  }
`;
