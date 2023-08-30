import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import About from "./pages/AboutUsPage/AboutUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";

publicRoutes([
  {
    path: URLS.pages.aboutUs,
    component: About,
  },
  {
    path: URLS.pages.privacyPolicy,
    component: PrivacyPolicyPage,
  },
  {
    path: URLS.pages.termsConditions,
    component: TermsPage,
  },
]);
