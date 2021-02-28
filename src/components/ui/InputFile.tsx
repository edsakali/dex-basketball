import styled from "styled-components";
import { UseFormMethods } from "react-hook-form";
import { FC, ReactNode } from "react";
import { ReactComponent as AddPhotoIcon } from "../../assets/images/icons/addPhoto.svg";

interface InputProps extends Partial<Pick<UseFormMethods, "register">> {
  image: ReactNode;
}

export const InputFile: FC<InputProps> = ({ register, image }) => {
  return (
    <ImgInputWrapper>
      <FileInputIcon />
      {image}
      <StyledInput
        accept="image/png, image/jpg, image/jpeg"
        type="file"
        name="file"
        ref={register}
      />
    </ImgInputWrapper>
  );
};

const ImgInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 185px;
  width: 100%;
  height: 144px;
  margin-bottom: 48px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
  position: relative;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    max-width: 336px;
    width: 100%;
    height: 261px;
    margin-bottom: 0;
  }
`;

const FileInputIcon = styled(AddPhotoIcon)`
  position: absolute;
  z-index: 99;
  max-width: 41px;
  max-height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 100;
`;
