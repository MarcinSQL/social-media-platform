import { ISignIn, ISignUp } from "modules/types/authorization/authorization.types";
import service from "utils/axios";

const baseURL = "/auth/";

export const authSignIn = (signInData: ISignIn) => {
  return service.post(`${baseURL}sign-in`, signInData).then((response) => {
    return Promise.resolve(response);
  });
};

export const authSignUp = (signUpData: ISignUp) => {
    return service.post(`${baseURL}sign-up`, signUpData).then((response) => {
      return Promise.resolve(response);
    });
  };
