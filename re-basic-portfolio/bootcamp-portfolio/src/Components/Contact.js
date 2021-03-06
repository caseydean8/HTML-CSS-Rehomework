import React from "react";

function Contact() {
  return (
    <div className="content">
      <div className="contact">
        <h1>Contact</h1>
        <form>
          <ul>
            <li>
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Yo Mama"
              ></input>
            </li>
            <li>
              <label>Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="whatever@dude.com"
              ></input>
            </li>
            <li>
              <label>Message</label>
              <input type="text" id="message" name="message"></input>
            </li>
          </ul>
        </form>
        <button type="submit" id="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
