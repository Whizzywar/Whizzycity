import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      if (!event.target.checkValidity()) {
        return;
      }
      formData.append("access_key", "cc0483c4-8023-4b5b-9466-345fe6e3635e");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} />
        </h3>
        <p>
          Verify the Directory Structure: Make sure your directory structure
          matches the import paths. For instance, if your assets folder is in
          the src directory, the paths should be correct as shown above.
          Sometimes, using your IDE’s autocomplete feature canhelp ensure the
          path is correct. Start typing the path and let the IDE suggest the
          correct file. you are most welcome
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            ubaniwisdom480@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +234-814-006-7333
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Brokelyn, U.S.A
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your message"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your name"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
