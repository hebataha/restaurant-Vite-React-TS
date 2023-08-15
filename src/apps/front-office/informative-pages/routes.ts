import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import InformativePagesPage from "./pages/InformativePagesPage";

publicRoutes([
  {
    path: URLS.informativePages,
    component: InformativePagesPage,
  },
]);
