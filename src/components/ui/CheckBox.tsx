import { FC } from "react";
import { FieldError, RegisterOptions, UseFormMethods } from "react-hook-form";
import styled from "styled-components";

interface CheckBoxProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  name: string;
  label: string;
  type: "checkbox";
  error?: FieldError;
  registerOptions?: RegisterOptions;
  checked?: boolean;
}

export const CheckBox: FC<CheckBoxProps> = ({
  label,
  name,
  type,
  register,
  error,
  registerOptions,
  checked,
}) => {
  return (
    <>
      <CheckBoxWrapper>
        <CheckboxContainer>
          <CheckBoxLabel error={!!error} htmlFor={name}>
            <HiddenCheckbox
              name={name}
              id={name}
              type={type}
              ref={register && register(registerOptions)}
            />
            <StyledCheckbox error={!!error} checked={checked}>
              <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </Icon>
            </StyledCheckbox>
            {label}
          </CheckBoxLabel>
        </CheckboxContainer>
      </CheckBoxWrapper>
      {error && (
        <ErrorMessage style={{ color: "#FF768E" }}>
          {error.message}
        </ErrorMessage>
      )}
    </>
  );
};

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.label<{ error: boolean }>`
  cursor: pointer;
  color: ${({ error }) => (error ? " #FF768E" : "#707070")};
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.lightRed};
  font-size: 12px;
  line-height: 18px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.svg`
  display: block;
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  border: 1px solid #e4163a;
`;

const StyledCheckbox = styled.div<{ checked?: boolean; error?: boolean }>`
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  width: 12px;
  height: 12px;
  background: ${({ checked }) => (checked ? "#E4163A" : "#FFFFFF")};
  border: ${({ error }) => (error ? "1px solid #E4163A" : "1px solid #9c9c9c")};
  border-radius: 2px;
  transition: all 150ms;

  &:hover {
    border: 1px solid #e4163a;
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;
