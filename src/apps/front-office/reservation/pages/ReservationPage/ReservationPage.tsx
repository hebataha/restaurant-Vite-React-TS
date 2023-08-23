import React from "react";
import ReservationHeader from "./ReservationHeader";
import BookReservation from "../../../home/BookReservation";

export type ReservationPageProps = {
  children: React.ReactNode;
};
function _ReservationPage() {
  return (
    <>
      <ReservationHeader />
      <BookReservation reservation />
    </>
  );
}

const ReservationPage = React.memo(_ReservationPage);
export default ReservationPage;
