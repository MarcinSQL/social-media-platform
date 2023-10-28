import { MainPageLink, SignInLink, SignUpLink } from "links";
import SignIn from "modules/views/authorization/SignIn";
import SignUp from "modules/views/authorization/SignUp";
import MainPage from "modules/views/dashboard/MainPage";
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
    {
      path: MainPageLink,
      element: <MainPage />,
    },
  ]);

  return { routing };
}
