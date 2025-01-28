import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import {
  LeftArrow,
  LeftArrowWhite,
  RightArrow,
  RightArrowWhite,
} from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { fourSlider } from "../src/SliderProps";

const About = () => {
  return (
    <Layout bodyClass={"about"}>
      <PageBanner pageName={"Hakkımızda"} />
      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="ol-xl-7 col-lg-7 col-md-12">
              <div className="wrap-image ps-re">
                <img
                  src="assets/images/background/bg-aboutus-2.png"
                  alt=""
                  className="bg1-about"
                />
                <div className="fx m-b32 align-fl-end">
                  <div
                    className="image m-r30 wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src="assets/images/common/sc-about1.png"
                      alt="Images"
                    />
                  </div>
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <img
                      src="assets/images/common/sc-about2.png"
                      alt="Images"
                    />
                  </div>
                </div>
                <div className="image p-l70">
                  <img src="assets/images/common/sc-about3.jpeg" alt="Images" />
                </div>
                <div
                  className="box-parents wow fadeInUp animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <h5 className="clr-pri-2 title">
                    <span className="clr-pri-3"></span>Memnuniyetiniz bizim için
                    önemlidir.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2 p-t19">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">Hakkımızda</span>
                    <RightArrow />
                  </div>
                  <h2 className="title clr-pri-2">
                    Bizimle ilgili daha fazla bilgi edinin
                  </h2>
                </div>
                <div className="inner">
                  <p>Vizyon</p>
                  <p
                    className="wrap f-mulish clr-pri-4  wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    Garden Anaokulu, her çocuğun potansiyelini en üst düzeyde
                    ortaya çıkarabileceği, sevgi dolu ve öğrenmeye açık bir
                    ortam sunarak, geleceğin lider, yaratıcı ve özgüvenli
                    bireylerini yetiştirmeyi amaçlayan örnek ve öncü bir eğitim
                    kurumudur.
                  </p>
                  <p>Misyon</p>
                  <p
                    className="wrap f-mulish clr-pri-4  wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    Garden Anaokulu, çocuklarımızın duygusal, sosyal, bilişsel
                    ve fiziksel gelişimlerini dengeli bir şekilde destekleyerek,
                    onların öğrenmeye olan meraklarını artırmayı hedefler.
                    Çocuklarımızı sevgi, saygı ve özgür düşünce ile büyütürken,
                    oyun ve etkinlikler yoluyla özgüvenli, sorumluluk sahibi ve
                    empatik bireyler olmalarını sağlar. Eğitmenlerimiz, her
                    çocuğun farklı öğrenme tarzına saygı duyarak, onları
                    bireysel ihtiyaçlarına göre destekler ve ailelerle güçlü bir
                    işbirliği içinde çalışır.
                  </p>

                  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Bahçe Oyunları</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Spor Aktiviteleri</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Besleyici Yemekler</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Etkinlik &amp; Partiler</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-discovery-2">
        <div className="container">
          <div className="row jus-c-center">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-1 f-mulish">
                  <LeftArrowWhite />
                  <span className="inner-sub st-1">Neden Biz</span>
                  <RightArrowWhite />
                </div>
                <h2 className="title clr-pri-1">
                  Şimdi Garden Anaokulunu Keşfedin
                </h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="800ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={120}
                    height={100}
                    viewBox="0 0 120 100"
                  >
                    <g data-name={1}>
                      <image
                        width={120}
                        height={100}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/about">
                      <a>Eğitimde Yenilik</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Modern eğitim yöntemleriyle donatılmış sınıflarımızda,
                    çocukların gelişim düzeylerine uygun, eğlenceli ve öğretici
                    etkinlikler düzenliyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={128}
                    height={106}
                    viewBox="0 0 128 106"
                  >
                    <g data-name={3}>
                      <image
                        width={128}
                        height={106}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/about">
                      <a>Özgür Düşünce</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Çocuklarımızın özgürce düşünmelerini, fikirlerini ifade
                    etmelerini teşvik ediyoruz. Takım çalışması, empati ve saygı
                    gibi sosyal becerilerin gelişmesini sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div
                className="sc-discovery-2 wow fadeInUp animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1400ms"
              >
                <div className="box-feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={110}
                    height={107}
                    viewBox="0 0 110 107"
                  >
                    <g data-name={4}>
                      <image
                        width={110}
                        height={107}
                        xlinkHref="data:img/png;base64,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"
                      />
                    </g>
                  </svg>
                </div>
                <div className="box-content">
                  <h4 className="title">
                    <Link href="/about">
                      <a>Sevgi ve Güven</a>
                    </Link>
                  </h4>
                  <p className="wrap f-mulish">
                    Anaokulumuzda, her çocuk güvenli ve sevgi dolu bir ortamda
                    eğitim alır. Çocuklarımızın gelişimlerini destekleyerek
                    kendilerini ifade edebilmelerini sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TfCounter />

      <section className="tf-sc-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className="sc-contact wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="wrap">
                  <h2 className="title clr-pri-1">
                    Çocuğunuzu kaydetmeye ne dersiniz
                  </h2>
                  <p className="sub clr-pri-1 f-mulish"></p>
                </div>
                <div className="inner-sc-contact">
                  <div className="box-btn">
                    <Link href="/contact">
                      <a className="fl-btn st-9">
                        <span className="inner">Şimdi Kaydol</span>
                      </a>
                    </Link>
                  </div>
                  <div className="inner-contact fx">
                    <svg
                      id="CTA"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={49}
                      height={47}
                      viewBox="0 0 49 47"
                    >
                      <g id="Phone2">
                        <image
                          width={49}
                          height={47}
                          xlinkHref="data:img/png;base64,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"
                        />
                      </g>
                    </svg>
                    <ul>
                      <li className="clr-pri-1">Telefon</li>
                      <li className="clr-pri-1"> 0212 212 2233</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-feedback">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">Velilerin Yorumları</span>
                  <RightArrow />
                </div>
                <h2 className="title clr-pri-2">Neden veliler bizi seviyor</h2>
              </div>
            </div>
            <div className="col-12 pd0-135">
              <div className="slider-fb">
                <TestimonialSlider />
                {/*/.themesflat-carousel*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
