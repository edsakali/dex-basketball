import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginForm } from "./components/loginForm/LoginForm";
import { useAppDispatch } from "../../../redux/store";
import { signInAction } from "../authActions";
import { LoginParams } from "../../../api/auth/AuthDto";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";
//
// import { authSelector } from "../authReducers";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const history = useHistory();

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
        callback: () => {
          history.push("/");
        },
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
