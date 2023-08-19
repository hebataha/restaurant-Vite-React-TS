import React from "react";
import AboutHeader from "./AboutHeader/AboutHeader";
import TitleComponent from "../../TitleComponent/TitleComponent";
import BookNow from "./BookNow/BookNow";
import Blog from "../../Blog/Blog";
import FoodItems from "./FoodItems/FoodItems";

export type AboutProps = {
  children: React.ReactNode;
};
function _About(props: AboutProps) {
  return (
    <>
      <AboutHeader />
      <div className="container">
        <TitleComponent about color />
      </div>
      <BookNow />
      <Blog />
      <FoodItems />
    </>
  );
}

const About = React.memo(_About);
export default About;
