import "./our-story.css";
import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./img/profile image.png";
import Background from "./img/profile background.png";
import Location from "./img/location.png";
import Call from "./img/call.png";
import Email from "./img/email.png";

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
     border-bottom: 2px solid black;
    opacity: 1;
     
    
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  gap:10px
  font-size:10px
`;
const types = ["History", "Mission", "Vision"];

function OurStory() {
  const [active, setActive] = useState(types[0]);

  return (
    <div>
      <div>
        <div className="our-story">
          <h1>OUR STORY</h1>
          <h2>
            Designing the future, today - welcome to our <br /> architecture
          </h2>
        </div>

        <div className="back-profile">
          <img src={Background} className="background" alt="background"/>
        </div>
        <img src={Profile} className="profile" alt="profile"/>
        <div className="buttongroup">
          <ButtonGroup className="b-group">
            {types.map((type) => (
              <Tab
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
                className="dash"
              >
                {type}
              </Tab>
            ))}
          </ButtonGroup>
          <p className="tabs">
            We meet with you to discuss your project needs, budget and timeline.
            We may also visit the site to get We meet with you to discuss your
            project needs, budget and timeline. We may also visit the site to
            get We meet with you to discuss your project needs, budget and
            timeline.
          </p>
        </div>
        <div className="contact-us-section">
          <div className="contact-us">
            <h2>CONTACT US</h2>
          </div>
          <div className="contact-form">
            <div className="first-part">
              <div className="contact-page">
                <h2>Let’s get started with your project</h2>
                <p>
                  Together, let's shape a world where architectural marvels meet
                  human ingenuity.
                </p>
              </div>
              <div className="contacts-icon">
                <div className="call">
                  <img src={Call} className="icons-contact" alt="call"/>
                  <span className="contact-texts">
                    +234 81-9015879 / 70-8387377
                  </span>
                </div>
                <div className="email">
                  <img src={Email} className="icons-contact" alt="email"/>
                  <span className="contact-texts">
                    claycastproperties33@gmail.com
                  </span>
                </div>
                <div className="location">
                  <img src={Location} className="icons-contact" alt="location"/>
                  <span className="contact-texts">Jos, Nigeria</span>
                </div>
              </div>
            </div>
            <form className="part-two">
              <div className="name-email">
                <div className="name-field">
                  <input name="name" type="text" placeholder="Name" />
                </div>
                <div className="email-field">
                  <input name="email" type="text" placeholder="Email" />
                </div>
              </div>
              <div className="input-group">
                <textarea
                  id="Message"
                  name="Message"
                  class="form-control"
                  rows="6"
                  maxlength="3000"
                  placeholder="Type message here"
                  required
                ></textarea>
              </div>
              <button className="form-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurStory;
