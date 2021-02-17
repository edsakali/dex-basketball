import styled from "styled-components";
import { UseFormMethods } from "react-hook-form";
import { ReactComponent as SearchImg } from "../../assets/images/icons/search.svg";

export interface PropsInputSearch
  extends Partial<Pick<UseFormMethods, "register">> {
  placeholder: string;
  nameSearch: string;
  type?: "text";
}

export const InputSearch = ({
  nameSearch,
  placeholder,
  register,
  type,
}: PropsInputSearch) => (
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
  min-height: 40px;
  padding: 0 12px;
  border: 0.5px solid ${({ theme }) => theme.colors.lightestGrey};
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
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
