import { Helmet } from "react-helmet";
import { Button, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServicesoneColumn from "./ServicesoneColumn";
import ServicesoneRowOne from "./ServicesoneRowOne";
import React from "react";
export default function ServicesOnePage() {
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
        <div className="flex flex-col gap-[76px] md:gap-[57px] sm:gap-[38px]">
          {" "}
          <div className="flex flex-col items-center gap-[154px] md:gap-[115px] sm:gap-[77px]">
            {" "}
            <ServicesoneRowOne />{" "}
            <div className="container-sm md:px-5">
              {" "}
              <div className="flex items-start justify-center gap-[30px] md:flex-col">
                {" "}
                <div className="flex flex-col items-center">
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="border border-solid border-primary_colors-900 bg-white py-3 pl-5 pr-[34px] text-[18.64px] font-normal sm:pr-5"
                  >
                    {" "}
                    Auto 360{" "}
                  </Text>{" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="border border-solid border-primary_colors-900 bg-primary_colors-900 py-3 pl-5 pr-[34px] text-[18.64px] font-normal !text-white sm:pr-5"
                  >
                    {" "}
                    Real Estate 360{" "}
                  </Text>{" "}
                </div>{" "}
                <div className="h-[416px] flex-1 self-center bg-[url(/public/images/img_group_9010.png)] bg-cover bg-no-repeat px-[30px] py-10 md:h-auto md:self-stretch sm:p-5">
                  {" "}
                  <div className="flex flex-col items-start gap-5">
                    {" "}
                    <Heading
                      size="heading5xl"
                      as="h2"
                      className="text-[35px] font-semibold capitalize leading-[52px] !text-white md:text-[33px] sm:text-[31px]"
                    >
                      {" "}
                      <>
                        {" "}
                        All the Services You Need in Your Real Estate <br />{" "}
                        Buying/Selling/Renting Transactions are on <br />{" "}
                        sahibinden.com!{" "}
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
                        You can easily and quickly access all the services you
                        may need when buying, <br /> selling or renting real
                        estate via sahibinden.com. Explore our products to
                        examine <br /> the details of these services and use
                        them instantly.{" "}
                      </>{" "}
                    </Heading>{" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[234px] rounded-[24px] px-3 font-medium uppercase"
                    >
                      {" "}
                      Discover real estate360{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <ServicesoneColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
