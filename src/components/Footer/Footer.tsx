import "bootstrap/dist/css/bootstrap.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaDribbble,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="py-5 colorchang">
        <div className="container py-4 colorchang">
          <div className="row">
            <div className="col-lg-4">
              <div className="ps-lg-3 ps-0 pb-5">
                <h6 className="fw-bold text-white pb-3">
                  About Impact<span className="text-danger">.</span>{" "}
                </h6>
                <p className="text-secondary pb-2">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>

                <div>
                  <span className="social-icons">
                    <FaInstagram color="white" />
                  </span>
                  <span className="social-icons">
                    <FaTwitter color="white" />
                  </span>
                  <span className="social-icons">
                    <FaFacebook color="white" />
                  </span>
                  <span className="social-icons">
                    <FaLinkedinIn color="white" />
                  </span>
                  <span className="social-icons">
                    <FaPinterest color="white" />
                  </span>
                  <span className="social-icons">
                    <FaDribbble color="white" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-cols">
                <h6 className="text-white fw-bold pb-3">Links</h6>
                <ul className="text-secondary list-unstyled">
                  <li className="pb-2">About us</li>
                  <li className="pb-2">Services</li>
                  <li className="pb-2">News</li>
                  <li className="pb-2">Careers</li>
                  <li className="pb-2">Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-cols">
                <h6 className="text-white fw-bold pb-3">Company</h6>
                <ul className="text-secondary list-unstyled">
                  <li className="pb-2">About us</li>
                  <li className="pb-2">Services</li>
                  <li className="pb-2">News</li>
                  <li className="pb-2">Careers</li>
                  <li className="pb-2">Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-cols">
                <h6 className="text-white fw-bold pb-3">Contact</h6>
                <ul className="text-secondary list-unstyled">
                  <li className="pb-2">
                    43 Raymouth Rd. Baltemoer, London 3910
                  </li>
                  <li className="pb-2">+1(123)-456-7890</li>
                  <li className="pb-2">+1(123)-456-7890</li>
                  <li className="pb-2">info@mydomain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-secondary pt-5">
            Copyright ©2022. All Rights Reserved. — Designed with love by{" "}
            <span className="text-white">Untree.co • License</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
