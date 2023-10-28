import { authSignIn } from "api/auth.service";
import { ISignIn } from "modules/types/authorization/authorization.types";
import { useMutation } from "react-query";

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
