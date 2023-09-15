import { footerContributeText } from "../../data/texts";
import "./Footer.css";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer-item">Terms of Service</div>
      <div className="footer-item">Privacy Policy</div>
      <div className="footer-item">
        © Made by {/* Redirect to LinkedIn */}
        <a
          id="footer-credit-link"
          href="https://www.linkedin.com/in/adir-barak-4ab698257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adir
        </a>{" "}
        and{" "}
        <a
          id="footer-credit-link"
          href="https://www.linkedin.com/in/arie-levental/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arie
        </a>
      </div>
      <div
        className="footer-item tooltip-container"
        // data-tooltip={footerContributeText}
      >
        <div className="tooltip-text">
        {footerContributeText}
        </div>
        Contribute!
      </div>
    </div>
  );
};

export default Footer;
