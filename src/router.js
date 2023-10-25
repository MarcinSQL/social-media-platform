import { createBrowserRouter } from "react-router-dom";
import SignIn from "./modules/view/authorization/SignIn";
import { SignInLink } from "./links";

export default function router() {
  const routing = createBrowserRouter([
    {
        path: SignInLink,
        element: <SignIn />
    }
  ]);

  return { routing };
}
