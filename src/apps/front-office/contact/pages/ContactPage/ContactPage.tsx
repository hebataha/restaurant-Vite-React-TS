import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
export type ContactPageProps = {
  children: React.ReactNode;
};
function _ContactPage(props: ContactPageProps) {
  return (
    <>
      <>
        <ContactHeader />
        <ContactForm />
      </>
    </>
  );
}

const ContactPage = React.memo(_ContactPage);
export default ContactPage;
