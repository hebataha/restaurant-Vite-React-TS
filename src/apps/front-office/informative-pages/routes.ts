import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import InformativePagesPage from "./pages/InformativePagesPage";
import About from "../home/pages/About/About";
import Login from "../home/pages/Login/Login";
import Register from "../home/pages/Register/Register";

publicRoutes([
  {
    path: URLS.informativePages,
    component: InformativePagesPage,
  },
  {
    path: URLS.pages.aboutUs,
    component: About,
  },
  {
    path: URLS.auth.login,
    component: Login,
  },
  {
    path: URLS.auth.register,
    component: Register,
  },
]);
