import React from "react";

export type ReservationPageProps = {
  children: React.ReactNode;
};
function _ReservationPage(props: ReservationPageProps) {
  return (
    <>
      <h1>ReservationPage</h1>
    </>
  );
}

const ReservationPage = React.memo(_ReservationPage);
export default ReservationPage;
