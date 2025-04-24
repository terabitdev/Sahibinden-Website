import { Helmet } from "react-helmet";
import {
  Heading,
  GoogleMap,
  Button,
  SelectBox,
  Img,
  Text,
  Input,
} from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import ZerovehicleworldfindanauthorizedColumn from "./ZerovehicleworldfindanauthorizedColumn";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function ZeroVehicleWorldFindanAuthorizedPage() {
  const [searchBarValue171, setSearchBarValue171] = React.useState("");
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
        <header className="flex flex-col items-center gap-[30px]">
          {" "}
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            {" "}
            <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                {" "}
                <Img
                  src="images/img_untitled_design.png"
                  alt="Untitleddesign"
                  className="h-[80px] w-[22%] object-contain md:w-full"
                />{" "}
              </a>{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue171}
                onChange={(e) => setSearchBarValue171(e.target.value)}
                suffix={
                  searchBarValue171?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue171("")} />
                  ) : null
                }
                className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
            </div>{" "}
            <div className="mb-3 mr-10 flex w-[34%] items-center justify-between gap-5 self-end md:mr-0 md:w-full md:px-5">
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
                    className="text-[16px] font-normal hover:text-primary_colors-900"
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
                    Maintenance & Repair{" "}
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
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-primary_colors-900"
                  >
                    {" "}
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm flex flex-col items-end gap-16 md:px-5 sm:gap-8">
            {" "}
            <div className="mr-[190px] flex w-[24%] flex-col items-center justify-center rounded-lg md:mr-0 md:w-full">
              {" "}
              <div className="flex self-stretch bg-white px-4 py-2.5">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Search for new Vehicle{" "}
                </Text>{" "}
              </div>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Compare new vehicle{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-8 !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Zero Vehicle Launch Schedule{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Campaign Vehicles{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-primary_colors-900 sm:pr-5"
              >
                {" "}
                Find an Authorized Dealer{" "}
              </Text>{" "}
              <div className="flex justify-center self-stretch bg-white px-2.5 py-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Electric Vehicle Charging Station{" "}
                </Text>{" "}
              </div>{" "}
            </div>
            <div className="flex flex-col gap-12 self-stretch">
              {" "}
              <div className="flex gap-5 md:flex-col">
                {" "}
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Frame"
                      className="h-[20px] w-[18px]"
                    />
                  }
                  name="brand"
                  placeholder={`Brand`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                />{" "}
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Frame"
                      className="h-[20px] w-[18px]"
                    />
                  }
                  name="authorized"
                  placeholder={`Authorized dealer`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                />{" "}
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Frame"
                      className="h-[20px] w-[18px]"
                    />
                  }
                  name="province"
                  placeholder={`Province`}
                  options={dropDownOptions}
                  className="w-full gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                />{" "}
                <Button
                  color="primary_colors_900"
                  size="8xl"
                  variant="fill"
                  className="w-full rounded-[10px] px-[34px] font-opensans font-bold sm:px-5"
                >
                  {" "}
                  Show on Map{" "}
                </Button>{" "}
              </div>
              <div>
                {" "}
                <GoogleMap showMarker={false} className="h-[666px]" />{" "}
              </div>{" "}
              <div className="flex flex-col items-start gap-7">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Find an Authorized Dealer{" "}
                </Heading>{" "}
                <div className="self-stretch">
                  {" "}
                  <div className="flex justify-center rounded-[10px] bg-white px-8 py-[328px] shadow-xs md:py-5 sm:p-5">
                    {" "}
                    <Heading
                      size="text7xl"
                      as="h2"
                      className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      Authorized dealers or services will be listed after
                      selecting &quot;Brand, Authorized dealer / Service and
                      City&quot;.{" "}
                    </Heading>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <ZerovehicleworldfindanauthorizedColumn />{" "}
        </div>{" "}
        <Footer className="mt-20 h-[504px] bg-[url(/public/images/img_group_9618.png)] bg-cover bg-no-repeat md:h-auto" />{" "}
      </div>{" "}
    </>
  );
}
