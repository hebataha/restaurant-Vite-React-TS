import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import "./HomePage.css";
import Slider from "../../Slider/Slider";
import BookReservation from "../../BookReservation/BookReservation";
import Welcome from "../../Welcome/Welcome";
import FindFood from "../../FindFood/FindFood";
import MainDishes from "../../MainDishes/MainDishes";
import Blog from "../../Blog/Blog";
import Gallery from "../../Gallary";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="App">
        <Slider />
        <BookReservation />
        <Welcome />
        <FindFood />
        <MainDishes />
        <Gallery />
        <Blog />
      </div>
    </>
  );
}
