import { SignInLink, SignUpLink } from "links";
import SignIn from "modules/views/authorization/SignIn";
import SignUp from "modules/views/authorization/SignUp";
import { createBrowserRouter } from "react-router-dom";

export default function router() {
  const routing = createBrowserRouter([
    {
      path: SignInLink,
      element: <SignIn />,
    },
    {
      path: SignUpLink,
      element: <SignUp />,
    },
  ]);

  return { routing };
}
