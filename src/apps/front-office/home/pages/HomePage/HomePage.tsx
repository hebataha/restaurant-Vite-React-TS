import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import "./HomePage.css";
import reactLogo from "assets/images/react.svg";
import { Link } from "@mongez/react-router";
import Slider from "../../Slider/Slider";


export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="App">
        <Slider/>
    </div>
    </>
  );
}
