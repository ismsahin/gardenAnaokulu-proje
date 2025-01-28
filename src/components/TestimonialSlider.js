import { Swiper, SwiperSlide } from "swiper/react";
import { twoSlider } from "../SliderProps";

const TestimonialSlider = () => {
  return (
    <Swiper {...twoSlider} className="owl-carousel owl-theme none">
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">B. A.</h4>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                Oğlumuz yaklaşık 3 yaşından beri bu güzel ailenin bir parçası ve
                kendimizi çok şanslı hissediyoruz. Okul yöneticilerinden
                müdürüne ve sevgili öğretmenlerimize teşekkür borçluyuz.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt"></div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">C. U.</h4>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                Tavsiye üzerine tanıştığımız TohumÇocuk Anaokulu gösterdikleri
                sevgi ve özveri için teşekkür ederim.Kızım, 1,5 yıldır mutlu ve
                dolu dolu bir eğitim süreci geçiriyor. İyi ki varsınız! 😊
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">B. C.</h4>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                Hijyen ve titizlikleri sayesinde, oğlumuzu gönül rahatlığıyla
                okula göndermeye devam ediyoruz. Tüm Garden Anaokulu ailesine
                teşekkür ediyor, başarılarının devamını diliyoruz.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          data-dot=""
          className="item-fb wow fadeIn animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1300ms"
        >
          <div className="coustom-padding">
            <div className="heading fx">
              <div className="box-avt"></div>
              <ul>
                <li>
                  <h4 className="name-author clr-pri-2">A. Y.</h4>
                </li>
              </ul>
            </div>
            <div className="wrap">
              <p className="clr-pri-2">
                Oğlumuz 3,5 yaşındayken TohumÇocuk Anaokulu ile tanıştık ve o
                günden beri burayı çok seviyoruz. Hem oğlumuzun mutluluğu hem de
                okulun sıcak, samimi ortamı bizi çok memnun etti. 🙂
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default TestimonialSlider;
