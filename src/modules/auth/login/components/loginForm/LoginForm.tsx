import { FC } from "react";
import styled from "styled-components";
import { LayoutAuth } from "../../../../../components/layouts/LayoutAuth";
import { Button } from "../../../../../components/ui/Button";
import { InputFormAuth } from "../../../../../components/ui/InputFormAuth";
import { AuthNavigation } from "../../../../../components/navigation/AuthNavigation";
import iconVis from "../../../../../assets/images/icon/visibility_24px.png";
import iconVisOff from "../../../../../assets/images/icon/visibility_off_24px.svg";
import layer1 from "../../../../../assets/images/icon/Layer 1.png";
import { FieldErrors, UseFormMethods } from "react-hook-form";
import { FormFields } from "../../LoginPage";

interface FormProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  onClickIcon?: () => void;
  showPassword: boolean;
  onSubmit: () => void;
  errors: FieldErrors<FormFields>;
}

export const LoginForm: FC<FormProps> = ({
  showPassword,
  onClickIcon,
  onSubmit,
  register,
  errors,
}) => {
  console.log(errors);

  return (
    <LayoutAuth titleText="Sign In" img={layer1}>
      <Form onSubmit={onSubmit}>
        <InputFormAuth
          type="text"
          label="Login"
          name="login"
          register={register}
          error={errors.login}
          placeholder="Enter Login"
          registerOptions={{
            required: "Required",
            pattern: {
              value: /^[a-z0-9_-]{3,16}$/,
              message: "Required", // JS only: <p>error message</p> TS only support string
            },
          }}
        />

        <InputFormAuth
          placeholder="Enter Password"
          // value=""
          register={register}
          errors={errors}
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          icon={showPassword ? iconVis : iconVisOff}
          onClickIcon={onClickIcon}
        />
        <Button>Sign in</Button>
      </Form>
      <AuthNavigation
        text="Not a member yet?"
        actionText="Sign Up"
        path="/registration"
      />
    </LayoutAuth>
  );
};

const Form = styled.form`
  max-width: 366px;
  width: 100%;
`;
