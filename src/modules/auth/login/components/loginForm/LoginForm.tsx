import { FC } from "react";
import styled from "styled-components";
import { LayoutAuth } from "../../../../../components/layouts/LayoutAuth";
import { Button } from "../../../../../components/ui/Button";
import { FormInput } from "../../../../../components/ui/Input";
import { AuthNavigation } from "../../../../../components/navigation/AuthNavigation";
import iconVis from "../../../../../assets/images/icon/visibility_24px.png";
import iconVisOff from "../../../../../assets/images/icon/visibility_off_24px.svg";
import layer1 from "../../../../../assets/images/icon/Layer 1.png";

interface propsForm {
  onClickIcon?: () => void;
  showPassword: boolean;
}

export const LoginForm: FC<propsForm> = ({ showPassword, onClickIcon }) => {
  return (
    <LayoutAuth titleText="Sign In" img={layer1}>
      <Form>
        <FormInput
          placeholder="Enter Login"
          // value=""
          type="text"
          label="Login"
        />
        <FormInput
          placeholder="Enter Password"
          // value=""
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
