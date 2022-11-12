import React, { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(true);

  function messageSent(event) {
    event.preventDefault();
    setEmailSent(true);
  }

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__left">
          <h1>Let's get in touch</h1>
          <p>
            I'm always open for any suggestions, oppurtunities or just to have a
            chat.
          </p>
          <div className="contact__left--details">
            <div className="contact__left--detail">
              <LocalPhoneIcon />
              <p>Phone: +61 433 672 785 </p>
            </div>
            <div className="contact__left--detail">
              <MailIcon />
              <p>Email: me@imanmusa.com</p>
            </div>
          </div>
        </div>
        <div className="contact__right">
          {emailSent ? (
            <>
            <div className="contact__right--top">
              <h1>Message Sent!</h1>
              <p>I'll get back to you as soon as possible.</p>
            </div>
            <figure>
              
            </figure>
            </>
          ) : (
            <>
              <form
                className="contact__form"
                action="https://formsubmit.co/imanmusa2022@gmail.com"
                method="POST"
                onSubmit={(event) => messageSent(event)}
              >
                <div className="contact__form--top">
                  <div className="contact__form--input contact__form--name">
                    <h4>Full Name</h4>
                    <input
                      type="text"
                      required
                      name="Name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="contact__form--input contact__form--email">
                    <h4>Email Address</h4>
                    <input
                      type="email"
                      required
                      name="Email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="contact__form--input contact__form--message">
                  <h4>Message</h4>
                  <textarea required placeholder="Message" name="Message" />
                </div>
                <Button
                  type="submit"
                  className="contact__form--submit"
                  variant="contained"
                >
                  Send
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
