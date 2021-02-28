import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { RegistrationForm } from "./components/RegistrationForm";
import { useAppDispatch } from "../../../redux/store";
import { signUpAction } from "../authActions";
import { RegisterParams } from "../../../api/auth/AuthDto";
import { authSelector } from "../authSlice";
import { pathList } from "../../../routers/pathList";
import { LoadState } from "../../../redux/loadState";
import { LoadingBackdrop } from "../../../components/LoadingBackdrop";

export interface RegisterValues extends RegisterParams {
  password_repeat: string;
  terms: boolean;
}

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { user, loading } = useSelector(authSelector);
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
    <>
      <RegistrationForm
        errors={errors}
        register={register}
        onSubmit={handleFormSubmit}
        showPassword={showPassword}
        onShowPassword={handleShowPassword}
        watchFields={watchFields}
      />
      {loading === LoadState.pending && <LoadingBackdrop />}
    </>
  );
};
