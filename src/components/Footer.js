import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
           <Link className="block link" to="/">Home</Link>
           <Link className="block link" to="/about">About</Link>
           <Link className="block link" to="/menu">Menu</Link>
           <Link className="block link" to="/reserve">Reserve</Link>

          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              123 Random Street
              <br />
             Random where, Rd 00001
            </address>
            <a className="footer-block" href="tel:+11234567890">
              123&#41;&nbsp;456&#45;7890
            </a>
            <br />
            <a className="footer-block" href="mailto: CSR@littlelemon.com">
             fahad_khan@littlelemon.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2023 Meta Front-End Developer by Fahad Khan.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
