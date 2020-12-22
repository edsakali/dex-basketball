import { FC, useState } from "react";
import { LoginForm } from "./components/loginForm/LoginForm";

export const LoginPage: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onClickIcon = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
      <LoginForm showPassword={showPassword} onClickIcon={onClickIcon} />
    </div>
  );
};
