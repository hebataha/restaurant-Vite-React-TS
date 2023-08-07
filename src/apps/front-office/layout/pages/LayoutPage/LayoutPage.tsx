import React from "react";

export type LayoutPageProps = {
  children: React.ReactNode;
};
function _LayoutPage(props: LayoutPageProps) {
  return (
    <>
      <h1>LayoutPage</h1>
    </>
  );
}

const LayoutPage = React.memo(_LayoutPage);
export default LayoutPage;
