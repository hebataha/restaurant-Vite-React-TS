import React from "react";
import AboutHeader from "./AboutHeader/AboutHeader";
import BookNow from "./BookNow/BookNow";
import FoodItems from "./FoodItems/FoodItems";
import TitleComponent from "apps/front-office/home/TitleComponent/TitleComponent";
import Blog from "apps/front-office/home/Blog/Blog";

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
