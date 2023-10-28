import { ISignIn } from "modules/types/authorization/authorization.types";
import service from "utils/axios";

const baseURL = "/auth/";

export const authSignIn = (loginData: ISignIn) => {
  return service.post(`${baseURL}login`, loginData).then((response) => {
    return Promise.resolve(response);
  });
};
