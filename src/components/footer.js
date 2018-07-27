import React from "react";
import "../css/footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <section id="footer">
          <div className="container-fluid">
            <div className="row copyright-social">
              <div className="col-xs-12" />
              <p id="copyright">
                Copyright @ Theta Tau Colony - University of California, Santa
                Barbara
              </p>
              <p id="contact"> Contact us at: ucsbthetatau@gmail.com</p>
              <a href="https://www.facebook.com/UCSBThetaTau/" target="_blank">
                <img
                  id="fb-contact"
                  href="#"
                  src="../images/Home/facebook.svg"
                  class="img-responsive center-block"
                />
              </a>
              <p id="copyright">
                Website Designed By
                <p>Temp for later</p>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
