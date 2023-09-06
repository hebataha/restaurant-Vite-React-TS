import HomeBlog from "apps/front-office/home/HomeBlog/HomeBlog";
import React from "react";

export type BlogPageProps = {
  children: React.ReactNode;
};
function _BlogPage() {
  return (
    <>
      <HomeBlog />
    </>
  );
}

const BlogPage = React.memo(_BlogPage);
export default BlogPage;
