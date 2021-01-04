import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { RegistrationForm } from "./components/registrationForm/RegistrationForm";
import { useAppDispatch } from "../../../redux/store";
import { signUpAction } from "../authActions";
import { RegisterParams } from "../../../api/auth/AuthDto";
// import { useHistory } from "react-router-dom";

export interface RegisterValues extends RegisterParams {
  password_repeat: string;
  terms: boolean;
}

export const RegistrationPage: FC = () => {
  const dispatch = useAppDispatch();
  // const history = useHistory();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, handleSubmit, errors, watch } = useForm<RegisterValues>({
    mode: "onBlur",
  });

  const watchFields = watch(["password", "terms"]);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = handleSubmit(async (registerValues) => {
    // history.push("/");
    const { userName, login, password } = registerValues;
    dispatch(signUpAction({ userName, login, password }));
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
