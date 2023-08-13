import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import "./HomePage.css";
import reactLogo from "assets/images/react.svg";
import { Link } from "@mongez/react-router";
import Slider from "../../Slider/Slider";
import BookReservation from "../../BookReservation/BookReservation";
import Welcome from "../../Welcome/Welcome";


export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="App">
        <Slider/>
        <BookReservation/>
        <Welcome/>
    </div>
    </>
  );
}
