import styled from "styled-components";
import { Button } from "./ui/Button";
import { PropsInputSearch, SearchInput } from "./ui/InputSearch";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { pathList } from "../routers/pathList";

interface Props extends PropsInputSearch {
  onSubmit: () => void;
}

export const ContentHeader: FC<Props> = ({
  register,
  placeholder,
  nameSearch,
  onSubmit,
}) => {
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
      <ButtonSearch onClick={() => push(pathList.content.addTeam)}>
        Add +
      </ButtonSearch>
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
