import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Footer from "../../components/Footer";
import WhileBuyingVehicleValuationColumnwhatisveh from "../../components/WhileBuyingVehicleValuationColumnwhatisveh";
import WhilebuyingvehiclevaluationColumnOne from "./WhilebuyingvehiclevaluationColumnOne";
import WhilebuyingvehiclevaluationColumnThree from "./WhilebuyingvehiclevaluationColumnThree";
import WhilebuyingvehiclevaluationRow from "./WhilebuyingvehiclevaluationRow";
import WhilebuyingvehiclevaluationRowuntitleddesi from "./WhilebuyingvehiclevaluationRowuntitleddesi";
import React, { Suspense } from "react";
const data = [
  {
    whatisvehicle: "What is Vehicle Valuation?",
    description: (
      <>
        {" "}
        Vehicle Valuation is a service that <br /> suggests a certain price
        range for <br /> each vehicle using the current ad <br /> data on
        sahibinden.com. You can <br /> immediately learn the accurate <br /> and
        reliable value of the vehicle <br /> you want to sell or buy by entering{" "}
        <br /> its features with Vehicle Valuation.{" "}
      </>
    ),
  },
  {
    whatisvehicle: "How Do We Calculate?",
    description: (
      <>
        {" "}
        It is calculated using statistical <br /> modeling created using
        variables <br /> such as vehicle brand, model, <br /> production year,
        fuel type, gear <br /> type, body type and mileage and <br /> the price
        published in the <br /> advertisement, according to the <br />{" "}
        advertisement data published on <br /> sahibinden.com in the last 30
        days. The vehicle&#39;s paint, damage status, whether the body has been
        renovated and additional equipment features are not taken into
        consideration in the calculation.{" "}
      </>
    ),
  },
  {
    whatisvehicle: "Important Information",
    description: (
      <>
        {" "}
        sahibinden.com is not responsible <br /> for any damages that users or
        third parties may suffer if any transaction, including purchase or sale,
        is made or not made based on the information provided in the vehicle
        valuation service.{" "}
      </>
    ),
  },
];
export default function WhileBuyingVehicleValuationPage() {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Sahibinden</title>{" "}
        <meta
          name="description"
          content="Web site created using create-react-app"
        />{" "}
      </Helmet>{" "}
      <div className="w-full bg-white">
        {" "}
        <header className="mr-10 flex flex-col items-center gap-[30px] md:mr-0">
          {" "}
          <WhilebuyingvehiclevaluationRowuntitleddesi />{" "}
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text as="p" className="text-[16px] font-medium">
                    {" "}
                    While Buying{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text as="p" className="text-[16px] font-medium">
                    {" "}
                    When Selling{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:font-medium"
                  >
                    {" "}
                    Maintenance & Repair{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:font-medium"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:font-medium"
                  >
                    {" "}
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>
        <div className="flex flex-col items-center">
          {" "}
          <WhilebuyingvehiclevaluationRow />{" "}
          <div className="container-sm mt-[50px] md:px-5">
            {" "}
            <div className="flex gap-[94px] md:flex-col">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {data.map((d, index) => (
                  <WhileBuyingVehicleValuationColumnwhatisveh
                    {...d}
                    key={"listwhatisvehic" + index}
                  />
                ))}{" "}
              </Suspense>{" "}
            </div>{" "}
          </div>{" "}
          <WhilebuyingvehiclevaluationColumnOne />{" "}
          <WhilebuyingvehiclevaluationColumnThree />{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
