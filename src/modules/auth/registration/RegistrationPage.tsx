import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { RegistrationForm } from "./components/registrationForm/RegistrationForm";

export type FormFields = {
  name: string;
  login: string;
  password: string;
  password_repeat: string;
  terms: boolean;
};

export const RegistrationPage: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, errors, watch } = useForm<FormFields>({
    mode: "onBlur",
  });

  const watchFields = watch(["password", "terms"]);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = handleSubmit(async (data) => {
    console.log("data", data);
  });

  return (
    <RegistrationForm
      errors={errors}
      register={register}
      onSubmit={handleFormSubmit}
      showPassword={showPassword}
      onShowPassword={handleShowPassword}
      watchFields={watchFields}
    />
  );
};
