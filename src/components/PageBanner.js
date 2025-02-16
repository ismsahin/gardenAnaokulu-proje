import Link from "next/link";
const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section className="tf-page-title">
      <div className="overlay" />
      <div className="overlay-bg" />
      <img
        src="assets/images/background/img1innerpage.png"
        className="bg-inner1"
        alt=""
      />
      <img
        src="assets/images/background/img2innerpage.png"
        className="bg-inner2"
        alt=""
      />
      <img
        src="assets/images/background/img3innerpage.png"
        className="bg-inner3"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title inner">
              <h1 className="title">{pageTitle ? pageTitle : pageName}</h1>
              <div className="breadcrumbs">
                <ul className="jus-ct">
                  <li>
                    <Link href="/">
                      <a className="f-rubik">ANASAYFA</a>
                    </Link>
                  </li>
                  <li>
                    <p className="breadcrumbs-inner f-rubik">{pageName}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
