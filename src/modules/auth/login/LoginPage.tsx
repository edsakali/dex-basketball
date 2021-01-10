import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginForm } from "./components/LoginForm";
import { useAppDispatch } from "../../../redux/store";
import { signInAction } from "../authActions";
import { LoginParams } from "../../../api/auth/AuthDto";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../authSlice";
// import { useSelector } from "react-redux";
//
// import { authSelector } from "../authReducers";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { user } = useSelector(authSelector);
  const { push } = useHistory();

  useEffect(() => {
    user && push("/");
  }, [user, push]);

  const { register, handleSubmit, errors } = useForm<LoginParams>({
    mode: "onBlur",
  });

  const onClickIcon = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = handleSubmit((loginValues) => {
    dispatch(
      signInAction({
        loginParams: loginValues,
        // callback: () => {
        //   push("/");
        // },
      })
    );
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
