import { Helmet } from "react-helmet";
import { SelectBox, Img, Button, Input, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdmanagementtwoColumn from "./AdmanagementtwoColumn";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function AdManagementTwoPage() {
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
        <Header />{" "}
        <div className="mt-[66px] flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-center gap-[30px] md:flex-col">
              {" "}
              <div className="w-[22%] md:w-full">
                {" "}
                <Input
                  size="md"
                  shape="square"
                  name="buttonone_one"
                  placeholder={`Summary`}
                  className="relative z-[1] border border-solid border-primary_colors-900 px-2.5 !text-black-0"
                />{" "}
                <div className="flex items-center justify-between gap-5 border-[0.46px] border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5">
                  {" "}
                  <Text
                    size="text2xl"
                    as="p"
                    className="text-[18.64px] font-normal capitalize !text-white"
                  >
                    {" "}
                    Advertisements{" "}
                  </Text>{" "}
                  <Img
                    src="images/img_arrow_up.svg"
                    alt="Arrowup"
                    className="mb-1 h-[18px] self-end"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="text-[15px] font-normal capitalize"
                      >
                        {" "}
                        On Air{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[15px] font-normal capitalize !text-primary_colors-900"
                    >
                      {" "}
                      Not On Air{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>
                <div className="h-[56px] bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
                  {" "}
                  <div className="flex items-start justify-between gap-5 self-end">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="self-center text-[18.64px] font-normal capitalize"
                      >
                        {" "}
                        Auto Expertise{" "}
                      </Text>{" "}
                    </a>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[18px]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal capitalize md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Published Advertisements{" "}
                </Heading>{" "}
                <Input
                  size="5xl"
                  shape="round"
                  name="edittext"
                  className="mt-2.5 self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-3.5"
                />{" "}
                <Button
                  color="primary_colors_900"
                  size="xl"
                  variant="fill"
                  shape="round"
                  className="mt-5 min-w-[124px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                >
                  {" "}
                  Search{" "}
                </Button>{" "}
                <SelectBox
                  size="2xl"
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_2.svg"
                      alt="Frame"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  name="no_ads_found"
                  placeholder={`no ads found`}
                  options={dropDownOptions}
                  className="mt-[30px] gap-4 self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-[22px] capitalize !text-black-0 sm:p-5"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <AdmanagementtwoColumn />{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
