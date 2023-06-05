import React from "react";
import PricingCard from "./PricingCard";

const PricingPlans = () => {
  const plans = [
    {
      title: "Qiribu Basic",
      image: "basic_plan.png",
      description: "For small businesses",
      price: "FREE - Sign up & register your employees",
      offer_list: [
        {
          text: "Earned Wages On Demand",
          is_checked: true,
        },
        {
          text: "Qiribu Card",
          is_checked: true,
        },
        {
          text: "Payroll Processing",
          is_checked: false,
        },
        {
          text: "HR Dashboard",
          is_checked: false,
        },
        {
          text: "Financial Trainings",
          is_checked: false,
        },
      ],
    },
    {
      title: "Qiribu Pro",
      image: "pro_plan.png",
      description: "For medium businesses",
      price:
        "UGX 50,000/month - Up to 10 Employees, and UGX 3,000 per additional employee",
      offer_list: [
        {
          text: "Earned Wages On Demand",
          is_checked: true,
        },
        {
          text: "Qiribu Card",
          is_checked: true,
        },
        {
          text: "Payroll Processing",
          is_checked: true,
        },
        {
          text: "HR Dashboard",
          is_checked: false,
        },
        {
          text: "Financial Trainings",
          is_checked: false,
        },
      ],
    },
    {
      title: "Qiribu Enterprise",
      description: "For large businesses",
      image: "enterprise_plan.svg",
      price:
        "UGX 100,000 /month - Up to 20 Employees, \nand UGX 3,000 per additional employee",
      offer_list: [
        {
          text: "Earned Wages On Demand",
          is_checked: true,
        },
        {
          text: "Qiribu Card",
          is_checked: true,
        },
        {
          text: "Payroll Processing",
          is_checked: true,
        },
        {
          text: "HR Dashboard",
          is_checked: true,
        },
        {
          text: "Financial Trainings",
          is_checked: true,
        },
      ],
    },
  ];
  return (
    <section className="section mt-50 bg-grey-80 bg-plan pt-110 pb-110">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-8">
            <h2 className="color-brand-1 mb-20 wow animate__ animate__fadeInUp animated">
              Qiribu Plans
            </h2>
            <p className="font-lg color-gray-500 wow animate__ animate__fadeInUp animated">
              We have a plan for everyone.
              <br className="d-none d-lg-block" />
              Find the plan that works best for you.
            </p>
          </div>
        </div>
        <div className="row mt-50">
          {plans.map((item, index) => (
            <PricingCard key={index} offer={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
