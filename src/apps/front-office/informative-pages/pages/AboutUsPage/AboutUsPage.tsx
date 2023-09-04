import React from "react";
import AboutHeader from "./AboutHeader/AboutHeader";
import BookNow from "./BookNow/BookNow";
import FoodItems from "./FoodItems/FoodItems";
import TitleComponent from "apps/front-office/home/TitleComponent/TitleComponent";
import HomeBlog from "apps/front-office/home/HomeBlog/HomeBlog";

export type AboutProps = {
  children: React.ReactNode;
};
function _About() {
  return (
    <>
      <AboutHeader />
      <div className="container">
        <TitleComponent about color />
      </div>
      <BookNow />
      <HomeBlog />
      <FoodItems />
    </>
  );
}

const About = React.memo(_About);
export default About;
