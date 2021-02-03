import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Button } from "./ui/Button";
import { PropsInputSearch, SearchInput } from "./ui/InputSearch";

interface Props extends PropsInputSearch {
  onSubmit: () => void;
  addItemPath: string;
}

export const ContentHeader = ({
  register,
  placeholder,
  nameSearch,
  onSubmit,
  addItemPath,
}: Props) => {
  const { push } = useHistory();
  return (
    <Wrapper>
      <FormFilter onSubmit={onSubmit}>
        <SearchInput
          register={register}
          placeholder={placeholder}
          nameSearch={nameSearch}
        />
      </FormFilter>
      <ButtonSearch onClick={() => push(addItemPath)}>Add +</ButtonSearch>
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

const FormFilter = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonSearch = styled(Button)`
  margin: 16px 0 0 0;
  width: 100%;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    width: 104px;
    margin: 0;
  }
`;
