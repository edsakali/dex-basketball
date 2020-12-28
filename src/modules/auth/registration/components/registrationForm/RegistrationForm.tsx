import { FC } from "react";
import styled from "styled-components";
import { LayoutAuth } from "../../../../../components/layouts/LayoutAuth";
import { Button } from "../../../../../components/ui/Button";
import { InputFormAuth } from "../../../../../components/ui/InputFormAuth";
import { AuthNavigation } from "../../../../../components/navigation/AuthNavigation";
import iconVis from "../../../../../assets/images/icon/visibility_24px.png";
import iconVisOff from "../../../../../assets/images/icon/visibility_off_24px.svg";
import layer2 from "../../../../../assets/images/icon/Layer 2.png";
import { FieldErrors, UseFormMethods } from "react-hook-form";
import { FormFields } from "../../RegistrationPage";
import { CheckBox } from "../checkBox/CheckBox";

interface FormProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  onShowPassword: () => void;
  showPassword: boolean;
  onSubmit: () => void;
  errors: FieldErrors<FormFields>;
  watchFields: Partial<FormFields>;
}

export const RegistrationForm: FC<FormProps> = ({
  showPassword,
  onShowPassword,
  onSubmit,
  register,
  errors,
  watchFields,
}): JSX.Element => {
  return (
    <LayoutAuth titleText="Sign Up" img={layer2}>
      <Form onSubmit={onSubmit}>
        <InputFormAuth
          type="text"
          label="Name"
          name="name"
          error={errors.name}
          register={register}
          registerOptions={{
            required: "Name is required.",
          }}
        />
        <InputFormAuth
          type="text"
          label="Login"
          name="login"
          register={register}
          error={errors.login}
          registerOptions={{
            required: "Login is required.",
            pattern: {
              value: /^[a-z0-9_-]{3,16}$/,
              message: "Invalid login.",
            },
          }}
        />
        <InputFormAuth
          register={register}
          error={errors.password}
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          icon={showPassword ? iconVis : iconVisOff}
          onClickIcon={onShowPassword}
          registerOptions={{
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters.",
            },
          }}
        />
        <InputFormAuth
          register={register}
          error={errors.password_repeat}
          name="password_repeat"
          type={showPassword ? "text" : "password"}
          label="Enter your password again"
          icon={showPassword ? iconVis : iconVisOff}
          onClickIcon={onShowPassword}
          registerOptions={{
            required: "Password repeat is required.",
            validate: (value) =>
              value === watchFields.password || "The passwords do not match",
          }}
        />
        <CheckBox
          checked={watchFields.terms}
          register={register}
          name="terms"
          label="I accept the agreement"
          type="checkbox"
          error={errors.terms}
          registerOptions={{ required: "You must be accept the agreement." }}
        />
        <Button>Sign Up</Button>
      </Form>
      <AuthNavigation text="Not a member yet?" actionText="Sign In" path="/" />
    </LayoutAuth>
  );
};

const Form = styled.form`
  max-width: 366px;
  width: 100%;
`;
