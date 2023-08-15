import React from "react";

export type InformativePagesPageProps = {
  children: React.ReactNode;
};
function _InformativePagesPage(props: InformativePagesPageProps) {
  return (
    <>
      <h1>InformativePagesPage</h1>
    </>
  );
}

const InformativePagesPage = React.memo(_InformativePagesPage);
export default InformativePagesPage;
