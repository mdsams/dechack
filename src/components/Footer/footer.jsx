import React,{useEffect,useState} from "react";
import "./footer.scss";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
// import DevPost from "./icons8-dev-post.svg";
import facebookIcon from "./icons8-facebook.svg";
import PrivacyPolicy from "./Privacy policy.pdf";
// import TermsOfUse from "./Terms of use.pdf";
import Twitter from "./icons8-twitter.svg";
// import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS, FOOTER} from "../../Module/General";

function GithubTemplate(){

  return (
  <div class="template">
        <a href="https://github.com/Limbo-Hacks/Hackathon-website-template">  <p> Get this template <i class="fab fa-github-alt"></i> in github <i class="fas fa-times"></i></p></a>
  </div>
  )
}




export default function Footer() {

  const [template,setTemplate]=useState(false)

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800)
      setTemplate(true)
  else if(window.scrollY < 2800)
  setTemplate(false)
  }

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a   rel="noreferrer" target="_blank" href={SOCIALS.facebook}>
              <img className="facebook " src={facebookIcon} alt="" />
            </a>
          </div>
        </div>
        {/* <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )}
        </div> */}
        <div className="footer_info">
          <p>
            Contact us{" "}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{" "}
          </p>

          {FOOTER.Privacy_policy.required && (
            <a
              href={PrivacyPolicy}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Community Guidelines</p>
            </a>
          )}
          {/* {FOOTER.Terms_of_use.required && (
            <a
              href={TermsOfUse}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Terms of Use</p>
            </a>
          )} */}
          <p>Made with ❤️ OG website by Limbo Hacks</p>

        </div>
      {template &&<GithubTemplate/>}
      </div>
    </div>
  );
}
