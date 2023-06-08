import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "../components/icons/Arrow";
import OfferCard from "../components/OfferCard";

import "swiper/css";
import "swiper/css/pagination";
import PricingPlans from "../components/PricingPlans";
import TabLink from "../components/TabLink";
import CheckMark from "../components/icons/CheckMark";
import BottomSection from "../components/BottomSection";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";
import Accordion from "../components/Accordion";

const benefits = [
  "Reduce Financial Stress",
  "Boost Productivity",
  "Cut Turnover Costs",
  "Enhance Company Reputation",
  "Attract Top Talent",
  "Foster High Employee Morale",
];

const tabs = ["General Enquiries", "Employers", "Employees"];

const Home = () => {
  const [activeTab, setActiveTab] = useState("General Enquiries");
  const offers = [
    {
      title: "Earned Wages On Demand",
      description:
        "Offer your employees instant access to their salaries at ZERO cost to you. This is not a cash advance or loan. Instead, employees gain access to a portion of their earned wages every day.",
      link: "/employers",
      image: "EWA.png",
    },
    {
      title: "Payroll Processing",
      description:
        "Streamline payroll processing for hassle-free salary transfers. Qiribu ensures on-time payments in a single action, saving you time and effort. Simplify your payroll management with our efficient solution.",
      link: "/employers",
      image: "payroll.png",
    },
    {
      title: "HR Dashboards",
      description:
        "Effortlessly manage your employees with our centralised HR dashboard. Track leave, shifts, onboarding, and payslips from one place. Stay organised, streamline processes, and enhance employee management efficiency.",
      link: "/employers",
      image: "hr_dashboard.png",
    },
    {
      title: "Financial Tools",
      description:
        "Equip your employees with financial training and budgeting tools. Empower them to understand and manage their finances better. Provide the resources they need for financial success and peace of mind.",
      link: "/employers",
      image: "smart_budgets.png",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
              <p className="font-lg color-grey-500 wow animate__ animate__fadeInUp animated">
                As featured in
              </p>
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
                  {/* <SwiperSlide>
                    <Link target="_blank" to="https://starthubafrica.org/">
                      <img
                        style={{ maxWidth: "50px" }}
                        src="https://starthubafrica.org/wp-content/uploads/2022/01/fav-1.png"
                        alt="Starthub Africa"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link target="_blank" to="https://www.cabbily.com/">
                      <img
                        style={{ maxWidth: "50px" }}
                        src="https://www.cabbily.com/images/logo512.png"
                        alt="Cabbily"
                      />
                    </Link>
                  </SwiperSlide> */}
                  {[...Array(3)].map((_, index) => (
                    <SwiperSlide key={index}>
                      <img style={{ maxWidth: "100px" }} src={`${index + 1}.png`} alt="logo" />
                    </SwiperSlide>
                  ))}
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
                What We Offer
              </h2>
              <p className="font-lg color-gray-500 wow animate__ animate__fadeInUp animated">
                We have the right solutions to suit businesses of any size
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
                  <img className="d-block" src="employee_image.png" alt="video" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="box-info-video">
                  <h3 className="color-brand-2 mt-10 mb-15 wow animate__ animate__fadeInUp animated">
                    Instantly Access What You Have Earned - No Waiting, No Hidden Costs
                  </h3>
                  <p className="font-md color-white wow animate__ animate__fadeInUp animated">
                    Don't wait for payday to handle unexpected expenses! Qiribu enables employees to
                    instantly access a portion of their earned wage at zero interest and no hidden
                    costs. Employers enjoy this free benefit, while employees pay a minimal fee for
                    fund transfers. Boost performance, morale, and reduce turnover for business
                    success.
                    <Link
                      to="https://www.benefitnews.com/opinion/earned-wage-access-the-most-important-benefit-in-a-post-covid-19-world"
                      target="_blank"
                      className="btn btn-default font-sm-bold color-white wow animate__ animate__fadeInUp animated"
                    >
                      Learn More <Arrow svgStyle="w-6 h-6 icon-16 ml-5 color-white" />
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
      <section className="section pt-80 mb-30 bg-faqs">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-8">
              <h2 className="color-brand-1 mb-20 wow animate__ animate__fadeInUp animated">
                Frequently Asked Questions
              </h2>
              <p className="font-lg color-gray-500 wow animate__ animate__fadeInUp animated">
                Feeling inquisitive? Have a read through some of our FAQs or
                <br className="d-none d-lg-block" /> contact our supporters for help
              </p>
            </div>
            <div className="col-lg-4 col-md-4 text-md-end text-start wow animate__ animate__fadeInUp animated">
              <Link to="/contact" className="btn btn-default font-sm-bold pl-0">
                Contact Us
                <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
              </Link>
            </div>
          </div>
          <div className="row mt-50 mb-100">
            <div className="col-xl-3 col-lg-4">
              <ul className="list-faqs nav nav-tabs" role="tablist">
                {tabs.map((tab, index) => (
                  <TabLink
                    activeTab={activeTab}
                    setTab={handleTabChange}
                    key={index}
                    href={`#tab-${index}`}
                    isActive={index === 0}
                    label={tab}
                  />
                ))}
              </ul>
              <div className="mt-80 text-start mb-40 wow animate__ animate__fadeInUp animated">
                <Link className="btn btn-brand-1 hover-up" to="/contact">
                  Contact Us
                </Link>
                <Link className="btn btn-default font-sm-bold hover-up" to="#">
                  Request Demo
                  <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content tab-content-slider">
                <div className="tab-pane fade active show" role="tabpanel">
                  <Accordion activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom"></div>
      </section>
      <section className="section mt-50 mb-30">
        <div className="container">
          <div className="text-center mb-70">
            <h2 className="color-brand-1 mb-20 wow animate__ animate__fadeInUp animated">
              Offering earned wages on demand makes business sense
            </h2>
          </div>
          <div className="row mt-50 mb-100">
            <div className="col-xl-7 col-lg-6">
              <div className="box-images-project">
                <div className="box-images mt-50">
                  <img className="img-main-2" src="oval_image.png" alt="img" />
                  <div className="image-2 shape-3">
                    <img
                      style={{ maxWidth: "100px", borderRadius: "50%" }}
                      src="circle_logo.svg"
                      alt="qiribu"
                    />
                  </div>
                  <div className="image-3 shape-1">
                    <img
                      src="circle_image.png"
                      alt="qiribu"
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <span className="btn btn-tag wow animate__ animate__fadeInUp animated">Employer</span>
              <h3 className="color-brand-1 mt-10 mb-15 wow animate__ animate__fadeInUp animated">
                Qiribu helps teams of all sizes to grow and reach their objectives
              </h3>
              <p className="font-md color-grey-400 wow animate__ animate__fadeInUp animated">
                Providing earned wages on demand as an employee benefit just makes good financial
                sense for businesses. It shows you care about your employees' well-being, boosts
                loyalty, and attracts top talent, all leading to increased profitability and a
                positive company image.
              </p>
              <div className="mt-20 wow animate__ animate__fadeInUp animated">
                <ul className="list-ticks">
                  {benefits.map((item, index) => (
                    <li key={index}>
                      <CheckMark />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-50 text-start wow animate__ animate__fadeInUp animated">
                <Link className="btn btn-brand-1 hover-up" to="#">
                  Download App
                </Link>
                <Link className="btn btn-default font-sm-bold hover-up" to="#">
                  Learn More
                  <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                </Link>
              </div>
            </div>
          </div>
          <BottomSection />
        </div>
        <div className="border-bottom"></div>
      </section>
      <section className="section mt-50 bg-plant">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-8">
              <h2 className="color-brand-1 mb-20 wow animate__ animate__fadeInUp animated">
                What our clients are saying
              </h2>
              <p className="font-lg color-gray-500 wow animate__ animate__fadeInUp animated">
                Hear from business who have boosted their businesses with Qiribu
              </p>
            </div>
          </div>
          <div className="mt-50 wow animate__ animate__fadeInUp animated">
            <div className="box-swiper">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard key={index} data={t} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-50">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-8">
              <h2 className="color-brand-1 mb-20 wow animate__ animate__fadeInUp animated">
                From Our Blog
              </h2>
              <p className="font-lg color-gray-500 wow animate__ animate__fadeInUp animated">
                Check out our helpful articles on financial planning,
                <br className="d-none d-lg-block" />
                enterprise development and payroll processing
              </p>
            </div>
            <div className="col-lg-4 col-md-4 text-md-end text-start">
              <Link
                className="btn btn-default font-sm-bold pl-0 wow animate__ animate__fadeInUp animated"
                to="#"
              >
                <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-50">
        <div className="container">
          <div className="box-newsletter">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="box-image-newsletter">
                  <div className="wow animate__ animate__zoomIn animated">
                    <img className="img-main" src="footer_image.png" alt="qiribu subscribe" />
                  </div>
                  <div className="shape-2 image-1">
                    <img
                      style={{ maxWidth: "100px", borderRadius: "50%" }}
                      src="small_circle_logo.png"
                      alt="qiribu subscribe"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <span className="font-lg color-brand-1 wow animate__ animate__fadeIn animated">
                  Newsletter
                </span>
                <h2 className="color-brand-1 mb-15 mt-5 wow animate__ animate__fadeIn animated">
                  Subcribe to our newsletter
                </h2>
                <p className="font-md color-grey-500 wow animate__ animate__fadeIn animated">
                  By clicking the button, you are agreeing with our Term &amp; Conditions
                </p>
                <div className="form-newsletter mt-30 wow animate__ animate__fadeIn animated">
                  <form action="#">
                    <input type="text" placeholder="Enter you mail .." />
                    <button className="btn btn-submit-newsletter" type="submit">
                      <Arrow svgStyle="w-6 h-6 icon-16 ml-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
