import React, { useState } from "react";
import axios from "axios";
import { setTimeout } from "timers";
import TitleComponent from "../components/about_components/AboutComponents";
import {
  AboutHero,
  AboutFilter
} from "../components/home_components/HeroComponentStyles";

export default function Contact_Page() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComment] = useState("");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleFirstname = event => {
    setFirstname(event.target.value);
  };

  const handleLastName = event => {
    setLastname(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleComments = event => {
    setComment(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();

    if (firstname && lastname && email && comments) {
      sendMail({ firstname, lastname, email, comments });
      displayConfirmationMsg("Your message was successfully sent, Thank you!!");
      resetFormFields();
    } else {
      setError("Please fill in all the fields");
      removeErrorMsg();
    }
  };

  async function sendMail(data) {
    const header = {
      "Content-Type": "application/json"
    };

    return await axios
      .post("https://formspree.io/xjvgdezy", data, {
        header
      })
      .then(res => res)
      .catch(err => err);
  }

  const resetFormFields = _ => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setComment("");
  };

  const removeErrorMsg = _ => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const displayConfirmationMsg = msg => {
    setConfirmation(msg);

    setTimeout(() => {
      setConfirmation("");
    }, 3000);
  };

  const bg_url =
    "url(../../resources/page-images/images/contactBcg.jpeg) center/cover no-repeat;";

  return (
    <div className="contact">
      <AboutHero bg={bg_url}>
        <AboutFilter />
      </AboutHero>
      <div className="contact-form">
        {error && (
          <div className="errorBorder">
            <div className="showError">
              <span>{error}</span>
            </div>
          </div>
        )}

        {confirmation && (
          <div className="confirmationBorder">
            <div className="showConfirmation">
              <span>{confirmation}</span>
            </div>
          </div>
        )}
        <div className="contact-title">
          <TitleComponent title="Contact Me" />
        </div>

        <form className="form1" autoComplete="off">
          <label htmlFor="firstName" className="first-name">
            Firstname
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstname}
            onChange={handleFirstname}
            placeholder="John"
          />

          <label htmlFor="lastName" className="last-name">
            Lastname
          </label>
          <input
            type="text"
            id="lastName"
            name="lastname"
            value={lastname}
            onChange={handleLastName}
            placeholder="Doe"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="someone@isp.com"
          />

          <label htmlFor="comments">Comments</label>
          <textarea
            type="comments"
            id="comments"
            rows="4"
            cols="50"
            value={comments}
            onChange={handleComments}
            placeholder="Your Comment..."
          ></textarea>

          <button type="submit" className="submitStyle" onClick={submitForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
