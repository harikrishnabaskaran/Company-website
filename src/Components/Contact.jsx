import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const ContactUs = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_exm2jnr",
        "template_v0natbm",
        form.current,
        "Wk9nNVnUgHqhNrz7u"
      )
      .then((result) => {
        console.log(result.text);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container2">
      <h1>
        <strong>Contact Us</strong>
      </h1>
      {isFormSubmitted ? (
        <div className="sub">
          <p>
            <strong>Form submitted successfully!</strong>
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      )}

      <div className="info">
        <p>
          Contact Us <br/>
           <span>&#9742;</span>  +49 155 5972346<br/>
           <span>&#128279;</span>  www.KbInfoTech.com<br/>
           <span>&#9993;</span>  info@KbInfoTech.com <br/>
           <span>&#128205;</span>  Brandshofer Deich 24, 20539 Hamburg,Germany
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
