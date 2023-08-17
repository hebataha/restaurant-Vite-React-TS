import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import InformativePagesPage from "./pages/InformativePagesPage";
import About from "../home/pages/About/About";

publicRoutes([
  {
    path: URLS.informativePages,
    component: InformativePagesPage,
  },
  {
    path: URLS.pages.aboutUs,
    component: About,
  },
]);
