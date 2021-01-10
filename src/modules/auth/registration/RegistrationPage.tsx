import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RegistrationForm } from "./components/RegistrationForm";
import { useAppDispatch } from "../../../redux/store";
import { signUpAction } from "../authActions";
import { RegisterParams } from "../../../api/auth/AuthDto";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../authSlice";
// import { pathList } from "../../../core/router/pathList";

export interface RegisterValues extends RegisterParams {
  password_repeat: string;
  terms: boolean;
}

export const RegistrationPage: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { user } = useSelector(authSelector);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    user && push("/");
  }, [user, push]);

  const { register, handleSubmit, errors, watch } = useForm<RegisterValues>({
    mode: "onBlur",
  });

  const watchFields = watch(["password", "terms"]);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = handleSubmit(async (registerValues) => {
    const { userName, login, password } = registerValues;
    dispatch(
      signUpAction({
        registerParams: { userName, login, password },
        // callback: () => {
        //   history.push("/");
        // },
      })
    );
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
