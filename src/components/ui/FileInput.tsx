import styled from "styled-components";
import { UseFormMethods } from "react-hook-form";
import { FC } from "react";

interface InputProps extends Partial<Pick<UseFormMethods, "register">> {}

export const FileInput: FC<InputProps> = ({ register }) => {
  return (
    <InputFile
      accept="image/png, image/jpg, image/jpeg"
      type="file"
      name="file"
      ref={register}
    />
  );
};

const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 100;
`;
