import { useState } from "react";
import { GlobalStyle } from "./assets/styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/styledTheming";
import { Button } from "./components/ui/Button";
import { FormInput } from "./components/ui/Input";
import iconVis from "./assets/images/icon/visibility_24px.png";
import iconVisOff from "./assets/images/icon/visibility_off_24px.png";

const FormWrapper = styled.div`
  margin: 50px auto;
  max-width: 366px;
  width: 100%;
`;

export const App: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onClickIcon = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormWrapper>
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
          icon={
            showPassword ? (
              <img src={iconVis} alt="visibility" />
            ) : (
              <img src={iconVisOff} alt="visibility" />
            )
          }
          onClickIcon={onClickIcon}
        />
        <Button>Sign in</Button>
      </FormWrapper>
    </ThemeProvider>
  );
};
