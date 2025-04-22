import { Helmet } from "react-helmet";
import { Text, Button, Img, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import AdmanagementbuynowoneColumn from "./AdmanagementbuynowoneColumn";
import AdmanagementbuynowoneRow from "./AdmanagementbuynowoneRow";
import AdmanagementbuynowoneRowOne from "./AdmanagementbuynowoneRowOne";
import React from "react";
export default function AdManagementBuyNowOnePage() {
  const [searchBarValue14, setSearchBarValue14] = React.useState("");
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
      <div className="flex w-full flex-col gap-[82px] bg-white md:gap-[61px] sm:gap-[41px]">
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
                value={searchBarValue14}
                onChange={(e) => setSearchBarValue14(e.target.value)}
                suffix={
                  searchBarValue14?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue14("")} />
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
        <div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10">
          {" "}
          <AdmanagementbuynowoneRow /> <AdmanagementbuynowoneRowOne />{" "}
          <AdmanagementbuynowoneColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
