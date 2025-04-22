import { Helmet } from "react-helmet";
import { Heading, Text, Button, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import AutoexpertiseColumn from "./AutoexpertiseColumn";
import AutoexpertiseColumnOne from "./AutoexpertiseColumnOne";
import AutoexpertiseRow from "./AutoexpertiseRow";
import AutoexpertiseRowOne from "./AutoexpertiseRowOne";
import React from "react";
export default function AutoExpertisePage() {
  const [searchBarValue27, setSearchBarValue27] = React.useState("");
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
        <div className="flex flex-col items-center">
          {" "}
          <div className="flex flex-col items-center self-stretch">
            {" "}
            <header className="flex flex-col items-center gap-[30px] self-stretch">
              {" "}
              <div className="flex items-center justify-center gap-[50px] self-stretch md:flex-col">
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
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
                    value={searchBarValue27}
                    onChange={(e) => setSearchBarValue27(e.target.value)}
                    suffix={
                      searchBarValue27?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue27("")} />
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
                  </li>
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
            </header>{" "}
            <div className="container-sm mt-1 flex flex-col items-start pl-[328px] pr-14 md:px-5">
              {" "}
              <div className="flex w-[20%] flex-col items-center rounded-lg md:w-full">
                {" "}
                <div className="flex justify-center self-stretch bg-white p-3">
                  {" "}
                  <Text
                    as="p"
                    className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
                  >
                    {" "}
                    Vehicle Comparison{" "}
                  </Text>{" "}
                </div>{" "}
                <Input
                  size="xs"
                  shape="square"
                  name="itemtwo_one"
                  placeholder={`Vehicle Valuation`}
                  className="self-stretch px-3.5 font-montserrat !text-blue_gray-900_01"
                />{" "}
                <Text
                  as="p"
                  className="bg-white py-3 pl-4 !font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
                >
                  {" "}
                  Vehicle Damage Inquiry{" "}
                </Text>{" "}
                <Input
                  size="xs"
                  shape="square"
                  name="itemfour_one"
                  placeholder={`Auto Expertise`}
                  className="self-stretch px-3.5 font-montserrat !text-primary_colors-900"
                />{" "}
                <Button
                  size="lg"
                  variant="fill"
                  shape="square"
                  className="self-stretch px-[18px] font-montserrat !text-blue_gray-900_01"
                >
                  {" "}
                  Vehicle Buying Guide{" "}
                </Button>{" "}
                <div className="flex self-stretch bg-white px-4 py-3">
                  {" "}
                  <Text
                    as="p"
                    className="!font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
                  >
                    {" "}
                    Auto Dictionary{" "}
                  </Text>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <AutoexpertiseColumn />{" "}
          </div>
          <AutoexpertiseRow /> <AutoexpertiseColumnOne />{" "}
          <div className="container-sm mt-[70px] flex flex-col items-start px-10 md:px-5">
            {" "}
            <Heading
              size="heading3xl"
              as="h2"
              className="text-[28px] font-bold capitalize !text-text md:text-[26px] sm:text-[24px]"
            >
              {" "}
              Leave a Reply{" "}
            </Heading>{" "}
          </div>{" "}
        </div>{" "}
        <AutoexpertiseRowOne /> <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
