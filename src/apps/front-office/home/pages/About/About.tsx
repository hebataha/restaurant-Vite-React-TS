import React from "react";

export type AboutProps = {
  children: React.ReactNode;
};
function _About(props: AboutProps) {
  return (
    <>
      <h1>About</h1>
    </>
  );
}

const About = React.memo(_About);
export default About;
