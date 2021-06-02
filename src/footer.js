import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const footer = () => {
  return (
    <div className="contact footer">
      <h2>Connect with me!</h2>
      <p>
        Interested in working together? Let me know
      </p>
      <div className="social-icon-container">
        <a href="https//www.twitter.com/stanokstilo" className="social-rounded-container">
          <TwitterIcon className="icon" />
        </a>
        <a href="https//www.instagram.com/stanokstilo" className="social-rounded-container">
          <InstagramIcon className="icon" />
        </a>
        <a href="https//www.linkedin.com/in/stanokstilo" className="social-rounded-container">
          <LinkedInIcon className="icon" />
        </a>
        <a href="mailto:  okstilo@gmail.com" className="social-rounded-container">
          <EmailIcon className="icon" />
        </a>
        <a href="08161582098" className="social-rounded-container">
          <ChatIcon className="icon" />
        </a>
        <a href="08161582098" className="social-rounded-container">
          <PhoneInTalkIcon className="icon" />
        </a>
      </div>
    </div>
  );
};

export default footer;
