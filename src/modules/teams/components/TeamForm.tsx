import styled from "styled-components";
import { FieldErrors, UseFormMethods } from "react-hook-form";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { InputFile } from "../../../components/ui/InputFile";
import { ReactComponent as AddPhotoIcon } from "../../../assets/images/icons/addPhoto.svg";

interface Props extends Partial<Pick<UseFormMethods, "register">> {
  onSubmit: () => void;
  teamLogo?: string;
  errors: FieldErrors;
  goBackHandler: () => void;
}

export const TeamForm = ({
  onSubmit,
  register,
  teamLogo,
  errors,
  goBackHandler,
}: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <AddImg>
        <InputFile
          register={register}
          image={teamLogo && <TeamImg src={teamLogo} />}
        />
      </AddImg>
      <WrapperItem>
        <AddTeamDetails>
          <Input
            register={register}
            name="name"
            label="Name"
            type="text"
            error={errors.name}
            registerOptions={{
              required: "Name is required.",
            }}
          />
          <Input
            register={register}
            name="division"
            label="Division"
            type="text"
            error={errors.division}
            registerOptions={{
              required: "Division is required.",
            }}
          />
          <Input
            register={register}
            name="conference"
            label="Conference"
            type="text"
            error={errors.conference}
            registerOptions={{
              required: "Conference is required.",
            }}
          />
          <Input
            register={register}
            name="foundationYear"
            label="Year of foundation"
            type="number"
            error={errors.foundationYear}
            registerOptions={{
              required: "Year of foundation is required.",
            }}
          />
        </AddTeamDetails>
        <ButtonsWrapper>
          <Button type="reset" onClick={goBackHandler} cancelBtn>
            Cancel
          </Button>
          <Button>Save</Button>
        </ButtonsWrapper>
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

const AddImg = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  height: 100%;
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    justify-content: flex-start;
    max-width: 545px;
    margin: 0 75px;
  }
`;

const TeamImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 50;
  top: 50%;
  left: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
  position: absolute;
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

const AddTeamDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;
