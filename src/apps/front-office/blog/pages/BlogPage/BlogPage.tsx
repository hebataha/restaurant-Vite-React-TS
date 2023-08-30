import React from "react";

export type BlogPageProps = {
  children: React.ReactNode;
};
function _BlogPage() {
  return (
    <>
      <h1>BlogPage</h1>
    </>
  );
}

const BlogPage = React.memo(_BlogPage);
export default BlogPage;
