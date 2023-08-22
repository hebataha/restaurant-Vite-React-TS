import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import ContactPage from "./pages/ContactPage";

publicRoutes([
  {
    path: URLS.contact,
    component: ContactPage,
  },
]);
