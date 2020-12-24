import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginForm } from "./components/loginForm/LoginForm";

export type FormFields = {
  login: string;
  password: string;
};

export const LoginPage: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, errors } = useForm<FormFields>({
    mode: "onBlur",
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
        errors={errors}
        register={register}
        onSubmit={onSubmit}
        showPassword={showPassword}
        onClickIcon={onClickIcon}
      />
    </>
  );
};
