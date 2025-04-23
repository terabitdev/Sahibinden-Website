import { Helmet } from "react-helmet";
import { Text, Button } from "../../components";
import Footer from "../../components/Footer";
import RealestateexpertisewhenrentingoneColumn from "./RealestateexpertisewhenrentingoneColumn";
import RealestateexpertisewhenrentingoneColumnOne from "./RealestateexpertisewhenrentingoneColumnOne";
import RealestateexpertisewhenrentingoneRowuntitleddesi from "./RealestateexpertisewhenrentingoneRowuntitleddesi";
import React from "react";
export default function RealEstateExpertiseWhenRentingOnePage() {
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
        <header className="mr-10 flex flex-col items-center gap-7 md:mr-0">
          {" "}
          <RealestateexpertisewhenrentingoneRowuntitleddesi />{" "}
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
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                  >
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
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    When Selling{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-medium !text-primary_colors-900"
                  >
                    {" "}
                    When Renting{" "}
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
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>
        <div className="flex flex-col items-center gap-[60px] sm:gap-[30px]">
          {" "}
          <div className="container-sm flex flex-col items-end pl-14 pr-[436px] md:px-5">
            {" "}
            <div className="w-[24%] rounded-lg md:w-full">
              {" "}
              <div className="flex bg-white px-4 py-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Real Estate Index{" "}
                </Text>{" "}
              </div>{" "}
              <Button
                size="lg"
                variant="fill"
                shape="square"
                className="self-stretch px-3.5 font-montserrat !text-primary_colors-900"
              >
                {" "}
                Property Rental Guide{" "}
              </Button>{" "}
              <div className="flex justify-center bg-white p-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Real Estate Dictionary{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
            {" "}
            <RealestateexpertisewhenrentingoneColumn />{" "}
            <RealestateexpertisewhenrentingoneColumnOne />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
