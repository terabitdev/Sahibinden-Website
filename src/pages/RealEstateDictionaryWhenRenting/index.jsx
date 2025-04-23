import { Helmet } from "react-helmet";
import { Heading, Input, Text, Button, Img } from "../../components";
import CertificateOfInsolvencyInfo1 from "../../components/CertificateOfInsolvencyInfo1";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealestatedictionarywhenrentingColumnOne from "./RealestatedictionarywhenrentingColumnOne";
import React from "react";
export default function RealEstateDictionaryWhenRentingPage() {
  const [searchBarValue155, setSearchBarValue155] = React.useState("");
  const [searchBarValue156, setSearchBarValue156] = React.useState("");
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
        <header className="flex flex-col items-center gap-7">
          {" "}
          <div className="flex items-center justify-center gap-[50px] self-stretch md:flex-col">
            {" "}
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              {" "}
              <Img
                src="images/img_untitled_design.png"
                alt="Untitleddesign"
                className="h-[80px] w-[10%] object-contain md:w-full"
              />{" "}
            </a>{" "}
            <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue156}
                onChange={(e) => setSearchBarValue156(e.target.value)}
                suffix={
                  searchBarValue156?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue156("")} />
                  ) : null
                }
                className="w-[38%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
              <div className="flex w-[40%] items-center justify-between gap-5 self-end md:w-full">
                {" "}
                <a href="#">
                  {" "}
                  <Img
                    src="images/img_frame_primary_colors_900.svg"
                    alt="Image"
                    className="h-[24px]"
                  />{" "}
                </a>{" "}
                <a href="#">
                  {" "}
                  <Img
                    src="images/img_lock.svg"
                    alt="Lock"
                    className="h-[24px]"
                  />{" "}
                </a>{" "}
                <a href="#">
                  {" "}
                  <Img
                    src="images/img_frame_primary_colors_900_24x24.svg"
                    alt="Image"
                    className="h-[24px]"
                  />{" "}
                </a>{" "}
                <a href="#">
                  {" "}
                  <Img
                    src="images/img_frame_24x24.svg"
                    alt="Image"
                    className="h-[24px]"
                  />{" "}
                </a>
                <Button
                  color="primary_colors_900"
                  size="xl"
                  variant="fill"
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_arrowleft.svg"
                      alt="Arrow Left"
                      className="my-0.5 h-[20px] w-[20px] object-contain"
                    />
                  }
                  className="min-w-[232px] gap-2 rounded-[24px] px-[18px] font-medium uppercase"
                >
                  {" "}
                  post an ad for free{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
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
              </li>
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
        </header>{" "}
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm flex flex-col items-end gap-[62px] md:px-5 sm:gap-[31px]">
            {" "}
            <div className="mr-[436px] flex w-[22%] flex-col gap-[46px] rounded-lg md:mr-0 md:w-full">
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
              <div className="flex justify-center bg-white p-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal !text-primary_colors-900"
                >
                  {" "}
                  Real Estate Dictionary{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col items-start self-stretch">
              {" "}
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                {" "}
                <Heading
                  size="heading5xl"
                  as="h1"
                  className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
                >
                  {" "}
                  Real Estate Dictionary{" "}
                </Heading>{" "}
                <Input
                  size="md"
                  name="search"
                  placeholder={`Type the content you want to search`}
                  value={searchBarValue155}
                  onChange={(e) => setSearchBarValue155(e.target.value)}
                  suffix={
                    searchBarValue155?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue155("")} />
                    ) : null
                  }
                  className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
                />{" "}
              </div>
              <Heading
                size="heading4xl"
                as="h2"
                className="text-shadow-ts mt-10 rounded-[10px] bg-white py-[26px] pl-[30px] pr-[34px] text-[30px] font-semibold tracking-[12.90px] md:text-[28px] sm:p-5 sm:text-[26px]"
              >
                {" "}
                <span className="text-black-900_01">A&nbsp;</span>{" "}
                <span className="text-primary_colors-900">
                  B C D E F G H I K L M N O P Q R S T U V W X Y Z
                </span>{" "}
              </Heading>{" "}
              <Heading
                size="text3xl"
                as="h3"
                className="mt-10 flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-primary_colors-900 text-center text-[20px] font-medium capitalize !text-white"
              >
                {" "}
                a{" "}
              </Heading>{" "}
              <div className="mt-[60px] flex flex-col gap-[60px] self-stretch">
                {" "}
                <CertificateOfInsolvencyInfo1 />{" "}
                <CertificateOfInsolvencyInfo1
                  titleText="What is a Certificate of Insolvency?"
                  descriptionText={
                    <>
                      {" "}
                      The document showing that the debtor does not have
                      sufficient assets fo the legally <br /> pursued payment is
                      called the insolvency certificate. This document is issued
                      by the <br /> enforcement office. From the creditor’s
                      perspective, it is the document issued by the <br />{" "}
                      enforcement office for the unpaid part of the receivable
                      as a result of the enforcement <br /> Proceedings. The
                      content of the insolvency certificate includes;{" "}
                    </>
                  }
                  moreText="More"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <RealestatedictionarywhenrentingColumnOne />{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
