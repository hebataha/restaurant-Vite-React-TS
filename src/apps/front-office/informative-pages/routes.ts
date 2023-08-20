import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import About from "./pages/AboutUsPage/AboutUsPage";


publicRoutes([
  {
    path: URLS.pages.aboutUs,
    component: About,
  },
]);
