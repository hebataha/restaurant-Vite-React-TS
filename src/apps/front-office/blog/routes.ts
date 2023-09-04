import URLS from "apps/front-office/utils/urls";
import { publicRoutes } from "apps/front-office/utils/router";
import BlogPage from "./pages/BlogPage/BlogPage";
import SinglePostPage from "./pages/BlogPage/SinglePostPage/SinglePostPage";

publicRoutes([
  {
    path: URLS.blog.root,
    component: BlogPage,
  },
  {
    path: URLS.blog.viewRoute,
    component: SinglePostPage,
  },
]);
