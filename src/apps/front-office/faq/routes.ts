import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import FaqPage from "./pages/FaqPage";

publicRoutes([
  {
    path: URLS.faq,
    component: FaqPage,
  },
]);
