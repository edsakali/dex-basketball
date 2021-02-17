import { FileInput } from "../../../components/ui/FileInput";
import styled from "styled-components";
import { ReactComponent as AddPhotoIcon } from "../../../assets/images/icons/addPhoto.svg";
import { UseFormMethods } from "react-hook-form";
import { Button } from "../../../components/ui/Button";
import { CustomInput } from "../../../components/ui/CustomInput";
import {
  CustomSelect,
  SelectOptions,
  SelectProps,
} from "../../../components/ui/CustomSelect";
import { OptionTypeBase } from "react-select";

export interface PlayerFormFields {
  name: string;
  height: number;
  weight: number;
  number: number;
  file: FileList;
  birthday: string;
  position: OptionTypeBase;
  team: OptionTypeBase;
}

interface Props
  extends Partial<Pick<UseFormMethods, "register">>,
    Pick<SelectProps, "control" | "handleInputChange" | "loading"> {
  onSubmit: () => void;
  playerImage?: string;
  optionsPositions?: Array<{ value: string; label: string }>;
  teamsOptions?: SelectOptions;
  goBackHandler: () => void;
}

export const PlayerForm = ({
  onSubmit,
  register,
  playerImage,
  control,
  optionsPositions,
  teamsOptions,
  handleInputChange,
  loading,
  goBackHandler,
}: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <AddImg>
        <ImgInputWrapper>
          <FileInputIcon />
          {playerImage && <PlayerImg src={playerImage} />}
          <FileInput register={register} />
        </ImgInputWrapper>
      </AddImg>
      <WrapperItem>
        <CustomInput register={register} name="name" label="Name" type="text" />
        <CustomSelect
          control={control}
          nameSelect="position"
          label={"Position"}
          options={optionsPositions}
        />
        <CustomSelect
          control={control}
          nameSelect="team"
          label={"Team"}
          options={teamsOptions}
          handleInputChange={handleInputChange}
          loading={loading}
        />
        <WrapperItemGrid>
          <CustomInput
            register={register}
            name="height"
            label="Height (cm)"
            type="number"
          />
          <CustomInput
            register={register}
            name="weight"
            label="Weight (kg)"
            type="number"
          />
          <CustomInput
            register={register}
            name="birthday"
            label="Birthday"
            type="date"
          />
          <CustomInput
            register={register}
            name="number"
            label="Number"
            type="number"
          />
          <Button type="reset" onClick={goBackHandler} cancelBtn>
            Cancel
          </Button>
          <Button>Save</Button>
        </WrapperItemGrid>
      </WrapperItem>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  height: 100%;
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    flex-direction: row;
    align-items: flex-start;
    padding: 48px 0;
  }
`;

const PlayerImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 50;
  opacity: 0.5;
  object-fit: scale-down;
`;

const AddImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    justify-content: flex-start;
    max-width: 545px;
    margin: 0 75px;
  }
`;

const ImgInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 185px;
  width: 100%;
  height: 144px;
  margin-bottom: 48px;
  background: #9c9c9c;
  border-radius: 10px;
  position: relative;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    max-width: 336px;
    width: 100%;
    height: 100%;
    aspect-ratio: 1.287;
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

const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 366px;
  gap: 24px;
  width: 100%;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    margin-right: 24px;
  }
`;

const WrapperItemGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  width: 100%;
  gap: 24px;
`;
