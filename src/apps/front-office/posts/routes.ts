import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import PostsPage from "./pages/PostsPage";

publicRoutes([
  {
    path: URLS.posts,
    component: PostsPage,
  },
]);
