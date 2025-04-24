import { Helmet } from "react-helmet";
import { Button, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServicesColumnOne from "./ServicesColumnOne";
import ServicesRowOne from "./ServicesRowOne";
import React from "react";
export default function ServicesPage() {
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
      <div className="flex w-full flex-col gap-[90px] bg-white md:gap-[67px] sm:gap-[45px]">
        {" "}
        <Header />{" "}
        <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="flex flex-col items-center gap-[154px] md:gap-[115px] sm:gap-[77px]">
            {" "}
            <ServicesRowOne />{" "}
            <div className="container-sm md:px-5">
              {" "}
              <div className="flex items-start justify-center gap-[30px] md:flex-col">
                {" "}
                <div className="flex flex-col items-center">
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="border border-solid border-primary_colors-900 bg-primary_colors-900 py-3 pl-5 pr-[34px] text-[18.64px] font-normal !text-white sm:pr-5"
                  >
                    {" "}
                    Auto 360{" "}
                  </Text>{" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="border border-solid border-primary_colors-900 bg-white py-3 pl-5 pr-[34px] text-[18.64px] font-normal sm:pr-5"
                    >
                      {" "}
                      Real Estate 360{" "}
                    </Text>{" "}
                  </a>{" "}
                </div>{" "}
                <div className="h-[394px] flex-1 self-center bg-[url(/public/images/img_group_9141.png)] bg-cover bg-no-repeat px-[30px] py-10 md:h-auto md:self-stretch sm:p-5">
                  {" "}
                  <div className="flex flex-col items-start gap-5">
                    {" "}
                    <div className="mr-5 flex flex-col items-start gap-5 self-stretch md:mr-0">
                      {" "}
                      <Heading
                        size="heading5xl"
                        as="h2"
                        className="text-[35px] font-semibold capitalize leading-[52px] !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        <>
                          {" "}
                          The services you need regarding your vehicle are at{" "}
                          <br /> Oto360!{" "}
                        </>{" "}
                      </Heading>
                      <Heading
                        size="headingmd"
                        as="h3"
                        className="text-[20px] font-semibold capitalize leading-[30px] !text-white"
                      >
                        {" "}
                        <>
                          {" "}
                          With sahibinden.com&#39;s technology and reliable{" "}
                          <br /> business partners, you can easily access the{" "}
                          <br /> services you need during your vehicle purchase,
                          sale <br /> and usage process from a single place.{" "}
                        </>{" "}
                      </Heading>{" "}
                    </div>{" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[200px] rounded-[24px] px-6 font-medium uppercase sm:px-5"
                    >
                      {" "}
                      Discover oto360{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <ServicesColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
