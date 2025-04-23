import { Helmet } from "react-helmet";
import { Text, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import RealestateexpertisepropertytwoColumn from "./RealestateexpertisepropertytwoColumn";
import RealestateexpertisepropertytwoRowuntitleddesi from "./RealestateexpertisepropertytwoRowuntitleddesi";
import React from "react";
export default function RealEstateExpertisePropertyTwoPage() {
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
          <RealestateexpertisepropertytwoRowuntitleddesi />{" "}
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-primary_colors-900"
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
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
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
                    className="text-[16px] font-normal hover:text-primary_colors-900"
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
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>
        <div className="flex flex-col items-center gap-16 sm:gap-8">
          {" "}
          <div className="container-sm flex flex-col items-start pl-[448px] pr-14 md:px-5">
            {" "}
            <div className="flex w-[24%] flex-col items-center rounded-lg md:w-full">
              {" "}
              <div className="flex justify-center self-stretch bg-white p-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Real Estate Expertise{" "}
                </Text>{" "}
              </div>{" "}
              <Input
                size="xs"
                shape="square"
                name="itemtwo_one"
                placeholder={`Real Estate Index`}
                className="self-stretch px-3.5 font-montserrat !text-black-0"
              />{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Credit{" "}
              </Text>{" "}
              <Button
                size="lg"
                variant="fill"
                shape="square"
                className="self-stretch pl-4 pr-2 font-montserrat !text-primary_colors-900"
              >
                {" "}
                Property Buying Guide{" "}
              </Button>{" "}
              <div className="flex justify-center self-stretch bg-white p-3">
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
          <RealestateexpertisepropertytwoColumn />{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
