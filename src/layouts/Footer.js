import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logo/logofootert.png"
                          alt="kinco"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish">Yeşilköy mah.</p>
                  <div className="list-contact">
                    <ul>
                      <li className="fx">
                        <span>
                          <i className="far fa-map-marker-alt" />{" "}
                          Bakırköy/İstanbul
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:destek@gardenanaokulu.com">
                          <i className="far fa-envelope" />{" "}
                          destek@gardenanaokulu.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> 0212 212 2233
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business">
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">Çalışma Saatleri</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">Pazartesi - Cuma</span>
                        </li>
                        <li>
                          <span className="f-mulish">07:00 - 18:00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright © {new Date().getFullYear()}, Garden Anaokulu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
