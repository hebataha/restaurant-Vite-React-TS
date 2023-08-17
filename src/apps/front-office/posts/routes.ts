import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import PostsPage from "./pages/PostsPage";
import About from "../home/pages/About/About";

publicRoutes([
  {
    path: URLS.posts,
    component: PostsPage,
  },
  {
    path: URLS.pages.aboutUs,
    component: About,
  },
]);
