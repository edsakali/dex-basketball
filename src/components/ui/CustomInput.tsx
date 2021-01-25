import { FC } from "react";
import styled from "styled-components";
import { FieldError, RegisterOptions, UseFormMethods } from "react-hook-form";

interface InputProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  name: string;
  label: string;
  type: "text" | "password";
  registerOptions?: RegisterOptions;
  value?: string;
  disabled?: boolean;
  icon?: string;
  onClickIcon?: () => void;
  error?: FieldError;
}

export const CustomInput: FC<InputProps> = ({
  registerOptions,
  type,
  label,
  name,
  register,
  icon,
  onClickIcon,
  error,
}): JSX.Element => {
  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <InputWrapper error={!!error}>
        <Input
          ref={register && register(registerOptions)}
          type={type}
          id={name}
          name={name}
        />
        {icon && (
          <IconWrapper onClick={onClickIcon}>
            <img src={icon} alt="visibility" />
          </IconWrapper>
        )}
      </InputWrapper>
      {error && (
        <ErrorMessage style={{ color: "#FF768E" }}>
          {error.message}
        </ErrorMessage>
      )}
    </InputContainer>
  );
};

const InputWrapper = styled.div<{ error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.lightestGrey1};
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: ${({ error }) => (error ? "1px solid #FF768E" : "none")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lightestGrey};
    transition: all 0.2s ease-in-out;
  }

  &:focus-within {
    box-shadow: 0 0 5px #d9d9d9;
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
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    height: 40px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    color: ${({ theme }) => theme.colors.grey};
    transition: all 0.2s ease;
    z-index: 500;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;
const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.lightRed};
  font-size: 12px;
  line-height: 18px;
`;
