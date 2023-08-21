import React from "react";
import ReservationHeader from "./ReservationHeader";
import ReservationForm from "./ReservationForm";

export type ReservationPageProps = {
  children: React.ReactNode;
};
function _ReservationPage(props: ReservationPageProps) {
  return (
    <>
      <ReservationHeader />
      <ReservationForm/>
    </>
  );
}

const ReservationPage = React.memo(_ReservationPage);
export default ReservationPage;
