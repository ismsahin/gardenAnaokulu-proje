// import DonutChart from "../src/components/DonutChart";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import TfCounter from "../src/components/TfCounter";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
const DonutChart = dynamic(() => import("../src/components/DonutChart"), {
  ssr: false,
});

const Teacher = () => {
  return (
    <Layout bodyClass={"teacher"}>
      <PageBanner pageName={"Öğretmenlerimiz"} />

      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Öğretmnenlerimiz</span>
                  <RightArrow />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-1">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Ayşe B.</a>
                    </Link>
                  </h4>

                  <div className="social">
                    <a href="#" className="active">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-3">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Melike Ş.</a>
                    </Link>
                  </h4>

                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-4">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Sıla A.</a>
                    </Link>
                  </h4>

                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <div
                className="sc-employee wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature">
                  <img
                    src="assets/images/common/sc-employee-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="box-content st-5">
                  <h4 className="name">
                    <Link href="/teacher-details">
                      <a className="clr-pri-1">Eren C.</a>
                    </Link>
                  </h4>

                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TfCounter />
    </Layout>
  );
};
export default Teacher;
