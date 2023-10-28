import { authSignIn, authSignUp } from "api/auth.service";
import { SignInLink } from "links";
import {
  ISignIn,
  ISignUp,
} from "modules/types/authorization/authorization.types";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export function useSignInMutation() {
  //const navigate = useNavigate();

  return useMutation<unknown, unknown, ISignIn>(
    (data) => {
      return authSignIn(data);
    },
    {
      onSuccess: (response: any) => {
        //navigate(SignUpInfoLink);
      },
      onError: (response: any) => {},
    }
  );
}

export function useSignUpMutation() {
  const navigate = useNavigate();

  return useMutation<unknown, unknown, ISignUp>(
    (data) => {
      return authSignUp(data);
    },
    {
      onSuccess: (response: any) => {
        navigate(SignInLink);
      },
      onError: (response: any) => {},
    }
  );
}
