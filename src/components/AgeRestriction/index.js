import React from "react";
import Wrapper from "./AgeRestriction.style";
import { AgeCalendarForm } from "./AgeRestriction.style";

import AgeLogo from "./assets/deliveryhobe-logo.png";
import AgeVideo from "./assets/age-bg-video-clip.mp4";

const AgeRestrictions = () => {
  return (
    <Wrapper>
      <div className="age-bg-video">
        <video className="age-bg-video-content" autoPlay muted loop>
          <source src={AgeVideo} type="video/mp4" />
          {/* <source src={AgeVideo} type="video/webm" /> */}
          Your browser is not supported
        </video>
      </div>
      <div className="age-info-area">
        <h1>
          Are you <br /> above 18?
        </h1>
        <p>
          as per state law you will have to confirm your age to place orders in
          “Smoking Essentials”
        </p>
        <AgeCalendarForm>
          <form className="age-restriction-form" action="#">
            {/* <div className="age-confirmation">
              <input type="date" name="birthday" id="birthday" />
              <button>
                <a href="#">Confirm</a>
              </button>
            </div> */}
            <button className="age-not-allowed-btn age-not-allowed-btn--1">
              <a href="#">Yes, I am above 18!</a>
            </button>

            <button className="age-not-allowed-btn age-not-allowed-btn--2">
              <a href="#">I am below 18 and I want to leave</a>
            </button>
          </form>
        </AgeCalendarForm>
      </div>

      <div className="logo-box">
        <figure>
          <img src={AgeLogo} alt="deliveryHobe logo" />
        </figure>
      </div>
    </Wrapper>
  );
};

export default AgeRestrictions;
