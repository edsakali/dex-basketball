import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RegistrationForm } from "./components/RegistrationForm";
import { useAppDispatch } from "../../../redux/store";
import { signUpAction } from "../authActions";
import { RegisterParams } from "../../../api/auth/AuthDto";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../authSlice";
import { pathList } from "../../../routers/pathList";

export interface RegisterValues extends RegisterParams {
  password_repeat: string;
  terms: boolean;
}

export const RegistrationPage: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { user } = useSelector(authSelector);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, errors, watch } = useForm<RegisterValues>({
    mode: "onBlur",
  });

  useEffect(() => {
    user && push(pathList.content.teams);
  }, [user, push]);

  const watchFields = watch(["password", "terms"]);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = handleSubmit(async (registerValues) => {
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
