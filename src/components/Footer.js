import "./Footer.css";
import Group from "./img/Group.png";

function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="mail-links">
          <div className="mail">
            <h2>Join our mailing list</h2>
            <p>
              Want to get some inspiration for your new project? Join our
              mailing list
            </p>
            <div className="buttons">
              <button className="email-button">Email</button>
              <button className="join-button">Join now</button>
            </div>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <div className="links">
              <div className="links-left">
                <p className="link-tags">Home</p>
                <p className="link-tags">About</p>
                <p className="link-tags">Portfolio</p>
              </div>
              <div className="links-right">
                <p className="link-tag">Services</p>
                <p className="link-tag">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
       

        <div className="footer-content">
          <div>
            <img src={Group} className="group-icon" alt="group"/>
            <span> 2023 Clay Cast Properties</span>
          </div>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
