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
import { AuthLayout } from "../../../components/layouts/AuthLayout";
import layer2 from "../../../assets/images/register-bg.png";
import { LoadingBackdrop } from "../../../components/LoadingBackdrop";
import { LoadState } from "../../../redux/loadState";

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
    <AuthLayout titleText="Sign Up" img={layer2}>
      <LoadingBackdrop loading={loading === LoadState.pending}>
        <RegistrationForm
          errors={errors}
          register={register}
          onSubmit={handleFormSubmit}
          showPassword={showPassword}
          onShowPassword={handleShowPassword}
          watchFields={watchFields}
        />
      </LoadingBackdrop>
    </AuthLayout>
  );
};
