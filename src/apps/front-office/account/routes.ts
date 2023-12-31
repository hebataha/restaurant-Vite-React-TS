import { publicRoutes } from "../utils/router";
import URLS from "../utils/urls";
import ForgetPassword from "./ForgetPassword/ForgetPassword";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ResetPassword from "./ResetPassword/ResetPassword";

publicRoutes([
  // login routes
  {
    path: URLS.auth.login,
    component: Login,
  },
  {
    path: URLS.auth.register,
    component: Register,
  },
  {
    path: URLS.auth.forgetPassword,
    component: ForgetPassword,
  },
  {
    path: URLS.auth.resetPassword,
    component: ResetPassword,
  },
]);
