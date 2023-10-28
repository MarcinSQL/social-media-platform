import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignUpLink } from "links";
import { useSignInMutation } from "./mutations";
import { useContext } from "react";

interface IFormInput {
  email: string;
  password: string;
}

export default function useSignIn() {
  const mutation = useSignInMutation();
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate(SignUpLink);
  };

  let userSchema = yup.object().shape({
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

  const onSubmit: SubmitHandler<IFormInput> = (signInData) => {
    mutation.mutate(signInData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
    goToSignUp,
  };
}
