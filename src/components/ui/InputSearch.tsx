import { ReactComponent as SearchImg } from "../../assets/images/icons/search.svg";
import styled from "styled-components";
import { UseFormMethods } from "react-hook-form";
import { FC } from "react";

export interface PropsInputSearch
  extends Partial<Pick<UseFormMethods, "register">> {
  placeholder: string;
  type?: "text";
  nameSearch: string;
}

export const SearchInput: FC<PropsInputSearch> = ({
  register,
  type,
  nameSearch,
  placeholder,
}) => (
  <InputWrapper>
    <Input
      ref={register}
      type={type}
      id={nameSearch}
      name={nameSearch}
      placeholder={placeholder}
    />
    <IconWrapper>
      <SearchImg />
    </IconWrapper>
  </InputWrapper>
);

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 12px;
  border: 0.5px solid #d1d1d1;
  border-radius: 4px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-width: 365px;
    width: 100%;
  }
`;
const Input = styled.input`
  width: 100%;
  background: transparent;
  line-height: 24px;
  border: none;
  padding: 4px 0;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 8px 0;
  } ;
`;
const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;
