import React from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../components/icons/Arrow";
import OfferCard from "../components/OfferCard";

import "swiper/css";
import "swiper/css/pagination";
import PricingPlans from "../components/PricingPlans";

const Home = () => {
  const offers = [
    {
      title: "Earned Wages On Demand",
      description:
        "Offer your employees instant access to their salaries at ZERO cost to you. This is not a cash advance or loan. Instead, employees gain access to a portion of their earned wages every day.",
      link: "/employers",
      image: null,
    },
    {
      title: "Payroll Processing",
      description:
        "Pay all your employees in a single action. Qiribu's streamlined payroll processing ensure on-time salary transfers and less hassle for you.",
      link: "/employers",
      image: "paroll.png",
    },
    {
      title: "HR Dashboards",
      description:
        "Manage all your employees in a single, centralized dashboard that allows you to track leave, shifts, onboarding and payslips",
      link: "/employers",
      image: "dashboard.svg",
    },
    {
      title: "Financial Trainings",
      description:
        "Provide your employees with financial trainings and budgeting tools so that your staff can better understand and manage their finances",
      link: "/employers",
      image: "training.png",
    },
  ];

  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="box-radius-bottom">
          <div className="container">
            <div className="text-center">
              <h3 className="color-brand-1 mb-15 wow animate__ animate__fadeInUp animated">
                Loved by Employees, Trusted by Employers
              </h3>
              <p className="font-lg color-grey-500 wow animate__ animate__fadeInUp animated"></p>
            </div>
            <div className="mt-30 wow animate__ animate__fadeInUp animated">
              <div className="box-swiper">
                <Swiper
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={30}
                  slidesPerView={8}
                  slidesPerGroup={3}
                  loop={true}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1199: {
                      slidesPerView: 8,
                    },
                    800: {
                      slidesPerView: 6,
                    },
                    600: {
                      slidesPerView: 5,
                    },
                    400: {
                      slidesPerView: 4,
                    },
                    350: {
                      slidesPerView: 2,
                    },
                    150: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <img
                      style={{ maxWidth: "50px" }}
                      src="https://starthubafrica.org/wp-content/uploads/2022/01/fav-1.png"
                      alt="Starthub Africa"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      style={{ maxWidth: "50px" }}
                      src="https://www.cabbily.com/images/logo512.png"
                      alt="Cabbily"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-100">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-8">
              <h2 className="color-brand-1 mb-20 wow animate__ animate__fadeInUp animated">
                What we Offer
              </h2>
              <p className="font-lg color-gray-500 wow animate__ animate__fadeInUp animated">
                We offer the convenience and flexibility of Earned Wages On
                Demand. <br />
                With our service, you no longer have to wait for your regular
                payday <br />
                to access the money you've earned. Instead, you can access a
                portion of <br /> your earned wages whenever you need them,
                instantly and hassle-free.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 text-md-end text-start">
              <Link
                to="#"
                className="btn btn-default font-sm-bold pl-0 wow animate__ animate__fadeInUp animated"
              >
                Learn More
                <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
              </Link>
            </div>
          </div>
          <div className="row mt-50">
            {offers.map((item, index) => (
              <OfferCard key={index} offer={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section mt-50 pt-50 pb-90">
        <div className="container">
          <div className="bg-brand-1 box-cover-video">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div
                  className="img-reveal"
                  style={{
                    visibility: "visible",
                    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
                  }}
                >
                  <img className="d-block" src="video_thumb.jpg" alt="video" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="box-info-video">
                  <span className="btn btn-tag wow animate__ animate__fadeInUp animated"></span>
                  <h3 className="color-brand-2 mt-10 mb-15 wow animate__ animate__fadeInUp animated">
                    A Better Way to Get Paid
                  </h3>
                  <p className="font-md color-white wow animate__ animate__fadeInUp animated">
                    No need to wait till payday to cover life&apos;s unexpected
                    expenses! Employees can instantly access a portion of their
                    earned, daily wage at zero interest and no hidden costs.
                    Qiribu offers this benefit at no cost to the employer, and
                    employees pay only a minimal flat transaction fee to
                    transfer funds to the account of the employee's choice...
                    <Link
                      to="https://www.benefitnews.com/opinion/earned-wage-access-the-most-important-benefit-in-a-post-covid-19-world"
                      target="_blank"
                      className="btn btn-default font-sm-bold color-white wow animate__ animate__fadeInUp animated"
                    >
                      Learn More{" "}
                      <Arrow svgStyle="w-6 h-6 icon-16 ml-5 color-white" />
                    </Link>
                  </p>
                  <div className="box-button-video wow animate__ animate__fadeInUp animated">
                    <Link
                      to="https://www.youtube.com/watch?v=olzHKEur-Bg"
                      target="_blank"
                      className="btn btn-play font-sm-bold popup-youtube hover-up"
                    >
                      Play Video
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingPlans />
    </>
  );
};

export default Home;
