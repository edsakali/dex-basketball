import { FC } from "react";
import styled from "styled-components";
import { FieldError, RegisterOptions, UseFormMethods } from "react-hook-form";

interface InputProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  name: string;
  label: string;
  type: "text" | "password";
  placeholder: string;
  registerOptions?: RegisterOptions;
  value?: string;
  disabled?: boolean;
  icon?: string;
  onClickIcon?: () => void;
  error?: FieldError;
}

export const InputFormAuth: FC<InputProps> = ({
  registerOptions,
  type,
  label,
  name,
  register,
  placeholder,
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
          placeholder={placeholder}
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
      {error && <p style={{ color: "#FF768E" }}>{error.message}</p>}
    </InputContainer>
  );
};

const InputWrapper = styled.div<{ error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.lightestGrey1};
  height: 40px;
  width: 100%;
  padding: 0 12px;
  border: ${({ error }) => (error ? "1px solid #FF768E" : "none")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lightestGrey};
    transition: all 0.2s ease-in-out;
  }

  &:focus-within {
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
  display: flex;
  align-items: center;
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
