import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginForm } from "./components/loginForm/LoginForm";

type FormData = {
  login: string;
  password: string;
};

export const LoginPage: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onClickIcon = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <LoginForm
        register={register}
        onSubmit={onSubmit}
        showPassword={showPassword}
        onClickIcon={onClickIcon}
      />
    </>
  );
};
