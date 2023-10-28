import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";
import { useSignUpMutation } from "./mutations";
import { useContext } from "react";
import AuthContext from "store/auth-context";

interface IFormInput {
  username: string;
  email: string;
  password: string;
}

export default function useSignUp() {
  const mutation = useSignUpMutation();
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const goToSignIn = () => {
    navigate(SignInLink);
    ctx.isError = false;
  };

  let userSchema = yup.object().shape({
    username: yup.string().required("Nazwa użytkownika jest wymagana"),
    email: yup
      .string()
      .email("Niepoprawny typ maila")
      .required("Email jest wymagany"),
    password: yup
      .string()
      .min(6, "Wymagane min 6 znaków")
      .required("Hasło jest wymagane"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (signUpData) => {
    mutation.mutate(signUpData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
    goToSignIn,
  };
}
