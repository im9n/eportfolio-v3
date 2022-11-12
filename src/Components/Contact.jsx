import React, { useEffect, useRef, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setEmailSent(false);
    }, 5000);
  }, [emailSent]);

  function messageSent(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ujr70gc",
        "template_4w1lunc",
        form.current,
        "-I3lfMhRM3F9YE-Rx"
      )
      .then(
        (result) => {
          e.target.reset();
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {emailSent && (
        <div className="message__sent" data-aos="fade-left" data-aos-duration="500">
          <DoneIcon className="message__sent--tick" />
          <p>Message Sent</p>
          <CloseIcon className="message__sent--close" onClick={() => setEmailSent(false)} />
        </div>
      )}
      <section id="contact">
        <div className="container contact__container">
          <div className="contact__left">
            <h1>Let's get in touch</h1>
            <p>
              I'm always open for any suggestions, oppurtunities or just to have
              a chat.
            </p>
            <div className="contact__left--details">
              <div className="contact__left--detail">
                <LocalPhoneIcon />
                <p>Phone: +61 433 672 785 </p>
              </div>
              <div className="contact__left--detail">
                <MailIcon />
                <p>Email: imanwmusa@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact__right">
            <h1>Get in touch</h1>
            <form
              className="contact__form"
              onSubmit={(event) => messageSent(event)}
              ref={form}
            >
              <div className="contact__form--top">
                <div className="contact__form--input contact__form--name">
                  <h4>Full Name</h4>
                  <input
                    type="text"
                    required
                    name="user_name"
                    placeholder="Name"
                  />
                </div>
                <div className="contact__form--input contact__form--email">
                  <h4>Email Address</h4>
                  <input
                    type="email"
                    required
                    name="user_email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="contact__form--input contact__form--message">
                <h4>Message</h4>
                <textarea required placeholder="Message" name="message" />
              </div>
              <Button
                type="submit"
                className="contact__form--submit"
                variant="contained"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
