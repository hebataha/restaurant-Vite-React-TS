import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import LayoutPage from "./pages/LayoutPage";

publicRoutes([
  {
    path: URLS.layout,
    component: LayoutPage,
  },
]);
