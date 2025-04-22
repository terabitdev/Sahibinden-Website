import { Helmet } from "react-helmet";
import { Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FavoritesfavoriteseachesColumnTwo from "./FavoritesfavoriteseachesColumnTwo";
import React from "react";
export default function FavoritesFavoriteSeachesPage() {
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
      <div className="flex w-full flex-col gap-[92px] bg-white md:gap-[69px] sm:gap-[46px]">
        {" "}
        <Header />{" "}
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start justify-between gap-5 md:flex-col">
              {" "}
              <div className="flex flex-col items-center">
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="border border-solid border-primary_colors-900 bg-white pb-2.5 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal sm:pr-5"
                  >
                    {" "}
                    Favorite Listings{" "}
                  </Text>{" "}
                </a>{" "}
                <Text
                  size="text2xl"
                  as="p"
                  className="border border-solid border-primary_colors-900 bg-primary_colors-900 py-3 pl-5 pr-[34px] text-[18.64px] font-normal !text-white sm:pr-5"
                >
                  {" "}
                  Favorite Searches{" "}
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
                    Favorite Sellers{" "}
                  </Text>{" "}
                </a>{" "}
              </div>
              <div className="flex flex-1 flex-col items-start gap-2.5 self-center md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Favorite Searches{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h2"
                    className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    How do I save ads to my favorite searches?{" "}
                  </Heading>{" "}
                  <Heading
                    size="text3xl"
                    as="h3"
                    className="mb-[22px] w-[98%] text-[20px] font-normal leading-[10px] md:w-full"
                  >
                    {" "}
                    <>
                      {" "}
                      You do not have a favorite search. Use the &quot;Save
                      Search&quot; link on our search results pages to add{" "}
                      <br /> your search to your favorites, and we will notify
                      you by e-mail when ads matching your search <br />{" "}
                      selections are added.{" "}
                    </>{" "}
                  </Heading>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <FavoritesfavoriteseachesColumnTwo />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
