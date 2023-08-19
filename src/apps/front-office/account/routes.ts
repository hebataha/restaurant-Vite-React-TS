import { publicRoutes, reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import Login from "./Login/Login";
import Register from "./Register/Register";

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
]);
