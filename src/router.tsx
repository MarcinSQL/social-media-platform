import { SignInLink } from "links";
import SignIn from "modules/views/authorization/SignIn";
import { createBrowserRouter } from "react-router-dom";

export default function router() {
  const routing = createBrowserRouter([
    {
      path: SignInLink,
      element: <SignIn />,
    },
  ]);

  return { routing };
}
