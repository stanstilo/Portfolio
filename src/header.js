import React from "react";
import { Link } from "react-scroll";


const header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center">
      <div className="nav-left">Stanley Okorie</div>
      <div className="nav-right">
        <ul className="d-flex">
          <li className="nav-list">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='about-nav'
              >
              About
            </Link>
          </li>
          <li className="nav-list">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='portfolio-nav'
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-list">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='connect'
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
