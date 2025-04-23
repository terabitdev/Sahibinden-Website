import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealEstateDictionaryWhenSellingRow from "../../components/RealEstateDictionaryWhenSellingRow";
import RealestatedictionarywhensellingColumn from "./RealestatedictionarywhensellingColumn";
import RealestatedictionarywhensellingRow from "./RealestatedictionarywhensellingRow";
import React from "react";
export default function RealEstateDictionaryWhenSellingPage() {
  const [searchBarValue163, setSearchBarValue163] = React.useState("");
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
                value={searchBarValue163}
                onChange={(e) => setSearchBarValue163(e.target.value)}
                suffix={
                  searchBarValue163?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue163("")} />
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
                    className="text-[16px] font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    While Buying{" "}
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
                    className="text-[16px] font-medium hover:text-primary_colors-900"
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
                    className="text-[16px] font-medium hover:text-primary_colors-900"
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
          <div className="container-sm flex flex-col items-end pl-14 pr-[568px] md:px-5">
            {" "}
            <div className="ml-4 flex w-[28%] flex-col items-center rounded-lg md:ml-0 md:w-full">
              {" "}
              <div className="flex self-stretch bg-white px-4 py-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Real Estate Index{" "}
                </Text>{" "}
              </div>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-1 !font-montserrat text-[16px] font-normal"
              >
                {" "}
                Real Estate Sales Guide{" "}
              </Text>{" "}
              <div className="flex justify-center self-stretch bg-white p-3">
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
          </div>{" "}
          <div className="flex flex-col items-center self-stretch">
            {" "}
            <RealestatedictionarywhensellingRow />{" "}
            <div className="container-sm mt-[34px] flex flex-col items-start gap-[60px] md:px-5 sm:gap-[30px]">
              {" "}
              <Heading
                size="text3xl"
                as="h5"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-primary_colors-900 text-center text-[20px] font-medium capitalize !text-white"
              >
                {" "}
                a{" "}
              </Heading>{" "}
              <div className="flex flex-col gap-[60px] self-stretch">
                {" "}
                <RealEstateDictionaryWhenSellingRow />{" "}
                <RealEstateDictionaryWhenSellingRow
                  whatisa="What is a Certificate of Insolvency?"
                  description={
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
                />{" "}
              </div>{" "}
            </div>
            <RealestatedictionarywhensellingColumn />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
