import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { authSelector } from "../authSlice";
import { LoginForm } from "./components/LoginForm";
import { signInAction } from "../authActions";
import { LoginParams } from "../../../api/auth/AuthDto";
import { pathList } from "../../../routers/pathList";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { user } = useSelector(authSelector);
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
