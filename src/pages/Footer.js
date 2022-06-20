import FooterCSS from "./Footer.module.css";
import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import Mockup from "../img/mockup.png";
import Logo from "../img/Logo.png";
const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className={FooterCSS.footer_wrapper}>
        <section className={FooterCSS.footer_newsletter}>
          <div className={FooterCSS.footer_imgContainer}>
            <img src={Mockup} className={FooterCSS.footer_mockup} />
          </div>
          <div className={FooterCSS.newsletter_container}>
            <div className={FooterCSS.newsletter}>
              <p className={FooterCSS.newsletter_heading}>
                Get the latest recipes and best
                <span className={FooterCSS.branding_color}> Filipino</span> dish
                right in your inbox
              </p>
              <p className={FooterCSS.newsletter_description}>
                Join our newsletter to get new recipe updates, a free copy of
                our “The Best Filipino Dinners” Cookbook, exclusive meal plans,
                and more.
              </p>
            </div>
            <form className={FooterCSS.newsletter_form}>
              <input type="text" placeholder="Your Email Address" />
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </section>
      </div>
      <section className={FooterCSS.footer_link}>
        <div className={FooterCSS.link_container}>
          <div className={FooterCSS.logo_container}>
            <img className={FooterCSS.footer_logo} src={Logo} />
          </div>
          <ul className={FooterCSS.socials}>
            <li>
              <a href="#">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <BsYoutube />
              </a>
            </li>
            <li>
              <a href="#">
                <BsInstagram />
              </a>
            </li>
          </ul>
          <ul className={FooterCSS.aboutUS}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className={FooterCSS.trademark_container}>
          © 2022 FoodHub . All Rights Reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
