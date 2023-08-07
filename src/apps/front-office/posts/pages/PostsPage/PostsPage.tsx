import React from "react";

export type PostsPageProps = {
  children: React.ReactNode;
};
function _PostsPage(props: PostsPageProps) {
  return (
    <>
      <h1>PostsPage</h1>
    </>
  );
}

const PostsPage = React.memo(_PostsPage);
export default PostsPage;
