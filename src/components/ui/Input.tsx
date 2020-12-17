import { FC, ReactNode } from "react";
import styled from "styled-components";

interface propsInput {
  placeholder: string;
  value?: string;
  type: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  icon?: ReactNode;
  onClickIcon?: () => void;
}

export const FormInput: FC<propsInput> = ({
  value,
  type,
  label,
  placeholder,
  icon,
  onClickIcon,
}) => {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <InputWrapper>
        <Input placeholder={placeholder} type={type} value={value} />
        {icon && <IconWrapper onClick={onClickIcon}>{icon}</IconWrapper>}
      </InputWrapper>
    </InputContainer>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.lightestGrey1};
  height: 40px;
  width: 100%;
  padding: 0 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lightestGrey};
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    box-shadow: 0px 0px 5px #d9d9d9;
  }

  &:disabled {
    cursor: not-allowed;
    &::placeholder {
      color: ${({ theme }) => theme.colors.lightestGrey};
    }
    &:hover {
      background: ${({ theme }) => theme.colors.lightestGrey1};
    }
  }

  &error {
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  /* position: relative; */

  & > label {
    color: ${({ theme }) => theme.colors.grey};
    /* position: absolute; */
    /* top: -25px; */
    transition: all 0.2s ease;
    z-index: 500;
  }
`;
const IconWrapper = styled.div`
  z-index: 1;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;
