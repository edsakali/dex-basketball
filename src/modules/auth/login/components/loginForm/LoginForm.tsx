import { FC } from "react";
import styled from "styled-components";
import { LayoutAuth } from "../../../../../components/layouts/LayoutAuth";
import { Button } from "../../../../../components/ui/Button";
import { FormInput } from "../../../../../components/ui/Input";
import { AuthNavigation } from "../../../../../components/navigation/AuthNavigation";
import iconVis from "../../../../../assets/images/icon/visibility_24px.png";
import iconVisOff from "../../../../../assets/images/icon/visibility_off_24px.svg";
import layer1 from "../../../../../assets/images/icon/Layer 1.png";
import { UseFormMethods } from "react-hook-form";

interface propsForm {
  onClickIcon?: () => void;
  showPassword: boolean;
  onSubmit: () => void;
}

interface FormProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  onClickIcon?: () => void;
  showPassword: boolean;
  onSubmit: () => void;
}

export const LoginForm: FC<FormProps> = ({
  showPassword,
  onClickIcon,
  onSubmit,
  register,
}) => {
  return (
    <LayoutAuth titleText="Sign In" img={layer1}>
      <FormLogin onSubmit={onSubmit}>
        <FormInput
          register={register}
          placeholder="Enter Login"
          // value=""
          type="text"
          label="Login"
          name="login"
        />

        <FormInput
          placeholder="Enter Password"
          // value=""
          register={register}
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          icon={showPassword ? iconVis : iconVisOff}
          onClickIcon={onClickIcon}
        />
        <Button>Sign in</Button>
      </FormLogin>
      <AuthNavigation
        text="Not a member yet?"
        actionText="Sign Up"
        path="/registration"
      />
    </LayoutAuth>
  );
};

const FormLogin = styled.form`
  max-width: 366px;
  width: 100%;
`;
