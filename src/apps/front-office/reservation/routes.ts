import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import ReservationPage from "./pages/ReservationPage";

publicRoutes([
  {
    path: URLS.reservation,
    component: ReservationPage,
  },
]);
