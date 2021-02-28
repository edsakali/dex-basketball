import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { authSelector } from "../authSlice";
import { LoginForm } from "./components/LoginForm";
import { signInAction } from "../authActions";
import { LoginParams } from "../../../api/auth/AuthDto";
import { pathList } from "../../../routers/pathList";
import { LoadingBackdrop } from "../../../components/LoadingBackdrop";
import { LoadState } from "../../../redux/loadState";
import { AuthLayout } from "../../../components/layouts/AuthLayout";
import layer1 from "../../../assets/images/login-bg.png";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { user, loading } = useSelector(authSelector);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm<LoginParams>({
    mode: "onBlur",
  });

  useEffect(() => {
    user && push(pathList.content.teams);
  }, [user, push]);

  const onClickIcon = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = handleSubmit((loginValues) => {
    dispatch(signInAction(loginValues));
  });

  return (
    <AuthLayout titleText="Sign In" img={layer1}>
      <LoadingBackdrop loading={loading === LoadState.pending}>
        <LoginForm
          errors={errors}
          register={register}
          onSubmit={onSubmit}
          showPassword={showPassword}
          onClickIcon={onClickIcon}
        />
      </LoadingBackdrop>
    </AuthLayout>
  );
};
