import { Helmet } from "react-helmet";
import { Button, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import RealestateexpertiseafterleaseoneColumnOne from "./RealestateexpertiseafterleaseoneColumnOne";
import RealestateexpertiseafterleaseoneColumnThree from "./RealestateexpertiseafterleaseoneColumnThree";
import RealestateexpertiseafterleaseoneRow from "./RealestateexpertiseafterleaseoneRow";
import React from "react";
export default function RealEstateExpertiseAfterLeaseOnePage() {
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
      <div className="flex w-full flex-col gap-[94px] bg-white md:gap-[70px] sm:gap-[47px]">
        {" "}
        <header className="mr-10 flex flex-col items-center gap-7 md:mr-0">
          {" "}
          <RealestateexpertiseafterleaseoneRow />{" "}
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
        <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="flex flex-col items-center gap-[22px]">
            {" "}
            <div className="container-sm md:px-5">
              {" "}
              <div className="flex items-start justify-between gap-5 md:flex-col">
                {" "}
                <Heading
                  size="heading4xl"
                  as="h1"
                  className="self-center text-[30px] font-semibold leading-[45px] md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  <>
                    {" "}
                    Why is a Management Plan Important for Apartment and <br />{" "}
                    Site Residents?{" "}
                  </>{" "}
                </Heading>{" "}
                <div className="flex gap-[31px]">
                  {" "}
                  <Button
                    color="primary_colors_900"
                    size="8xl"
                    variant="fill"
                    className="min-w-[174px] rounded-[10px] px-5 font-medium capitalize"
                  >
                    {" "}
                    Before Renting{" "}
                  </Button>{" "}
                  <Button
                    size="8xl"
                    variant="fill"
                    className="min-w-[174px] rounded-[10px] border border-solid border-primary_colors-900 px-[33px] font-medium capitalize !text-primary_colors-900 sm:px-5"
                  >
                    {" "}
                    After Lease{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <RealestateexpertiseafterleaseoneColumnOne />{" "}
          </div>{" "}
          <RealestateexpertiseafterleaseoneColumnThree />{" "}
        </div>{" "}
        <Footer className="flex-col bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
