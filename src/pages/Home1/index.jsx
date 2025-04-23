import { Helmet } from "react-helmet";
import { Button, Img, Heading, CheckBox, Text, Input } from "../../components";
import Footer from "../../components/Footer";
import HomeCard from "../../components/HomeCard";
import { CloseSVG } from "../../components/Input/close";
import Home1Column from "./Home1Column";
import Home1ColumnOne from "./Home1ColumnOne";
import Home1ColumnTwo from "./Home1ColumnTwo";
import Home1Columnourcustom from "./Home1Columnourcustom";
import Home1Listrealestate3 from "./Home1Listrealestate3";
import Home1Stackaboutus from "./Home1Stackaboutus";
import React, { Suspense } from "react";
const data = [
  {
    highettCommon: "images/img_frames_for_your.png",
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_digital_marketi.png",
    house: "House",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_bailey_anselme.png",
    house: "House",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    house: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_luxurious_car_p.png",
    house: "Car",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    house: "Car",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_2149309665_1.png",
    house: "Parts",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_92923_1.png",
    house: "Parts",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_2149309652_1.png",
    house: "Parts",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_green_iguana_cl.png",
    house: "ANIMAL",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_11017_1.png",
    house: "aNIMAL",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_5940_1.png",
    house: "aNIMAL",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_9347_1.png",
    house: "cONSTRUCTION",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_1598_1.png",
    house: "cONSTRUCTION",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_construction_silhouette.png",
    house: "cONSTRUCTION",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_alexander_andre.png",
    house: "eLECTRICAL aPPLIANCES",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_emmanuel_ikwueg.png",
    house: "eLECTRCIAL aPPLIANCES",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_6415500_26013_1.png",
    house: "eLECTRICAL Appliances",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_oscar_nord_8l9v.png",
    house: "Mobile",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_nordwood_themes.png",
    house: "Camera",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_christopher_gow.png",
    house: "Computer",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_ian_macdonald_w.png",
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_pixasquare_4ojh.png",
    house: "House",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_dillon_kydd_xgv.png",
    house: "House",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_ian_macdonald_w.png",
    house: "House",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_pixasquare_4ojh.png",
    house: "House",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
  },
  {
    highettCommon: "images/img_dillon_kydd_xgv.png",
    house: "House",
    highettcommon: "Caulfield North",
    abbotsford: "Abbotsford, Victoria",
  },
];
export default function Home1Page() {
  const [searchBarValue36, setSearchBarValue36] = React.useState("");
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
        <header className="flex flex-col items-center gap-[30px] bg-white">
          {" "}
          <div className="flex items-center justify-center gap-[50px] self-stretch md:flex-col">
            {" "}
            <Img
              src="images/img_untitled_design.png"
              alt="Untitleddesign"
              className="h-[80px] w-[10%] object-contain md:w-full"
            />{" "}
            <div className="flex w-[86%] justify-center md:w-full md:px-5">
              {" "}
              <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                {" "}
                <Input
                  size="md"
                  name="search"
                  placeholder={`Type the content you want to search`}
                  value={searchBarValue36}
                  onChange={(e) => setSearchBarValue36(e.target.value)}
                  suffix={
                    searchBarValue36?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue36("")} />
                    ) : null
                  }
                  className="w-[38%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
                />{" "}
                <div className="relative h-[48px] w-[40%] content-center self-end md:h-auto md:w-full">
                  {" "}
                  <div className="flex flex-1 items-center justify-center sm:flex-col">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Img
                        src="images/img_frame_primary_colors_900.svg"
                        alt="Image"
                        className="h-[24px] sm:w-full"
                      />{" "}
                    </a>{" "}
                    <div className="relative ml-[-6px] flex flex-1 items-start justify-center sm:ml-0 sm:flex-col sm:self-stretch">
                      {" "}
                      <Heading
                        size="textxs"
                        as="p"
                        className="flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white"
                      >
                        {" "}
                        1{" "}
                      </Heading>{" "}
                      <Heading
                        size="textxs"
                        as="p"
                        className="ml-[46px] mt-1 flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white sm:ml-0"
                      >
                        {" "}
                        1{" "}
                      </Heading>
                      <Heading
                        size="textxs"
                        as="p"
                        className="ml-12 mt-1 flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white sm:ml-0"
                      >
                        {" "}
                        1{" "}
                      </Heading>{" "}
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        {" "}
                        <Img
                          src="images/img_frame_24x24.svg"
                          alt="Image"
                          className="ml-[34px] h-[24px] self-center sm:ml-0 sm:w-full"
                        />{" "}
                      </a>{" "}
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        {" "}
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
                          className="ml-10 min-w-[232px] gap-2 self-center rounded-[24px] px-[18px] font-medium uppercase sm:ml-0"
                        >
                          {" "}
                          post an ad for free{" "}
                        </Button>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="absolute bottom-0 left-[13%] top-0 my-auto flex h-max w-[20%] justify-between gap-5">
                    {" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Img
                        src="images/img_lock.svg"
                        alt="Lock"
                        className="h-[24px]"
                      />{" "}
                    </a>{" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Img
                        src="images/img_frame_primary_colors_900_24x24.svg"
                        alt="Image"
                        className="h-[24px]"
                      />{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="container-sm mb-[26px] flex flex-col items-center px-14 md:px-5">
            {" "}
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-medium !text-primary_colors-900"
                  >
                    {" "}
                    Home{" "}
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
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    Ad Management{" "}
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
                    My Shopping Transactions{" "}
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
                    Favorites{" "}
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
                    Message and Notifications{" "}
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
                    Services{" "}
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
                    My Account{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>
        <div className="mt-[50px] flex flex-col items-center gap-[104px] md:gap-[78px] sm:gap-[52px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="mr-[42px] flex items-center md:mr-0 md:flex-col">
              {" "}
              <div className="flex w-[24%] flex-col gap-[18px] rounded bg-white p-[18px] shadow-2xl md:w-full">
                {" "}
                <div className="flex flex-col gap-5">
                  {" "}
                  <div className="flex items-start justify-center">
                    {" "}
                    <div className="flex flex-1 flex-col items-start self-center">
                      {" "}
                      <Heading
                        size="headingxl"
                        as="h1"
                        className="!font-manrope text-[25.09px] font-semibold !text-primary_colors-900 md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        Categories{" "}
                      </Heading>{" "}
                      <div className="mt-3 flex flex-col gap-5 self-stretch">
                        {" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <Img
                            src="images/img_home.svg"
                            alt="Home"
                            className="h-[24px]"
                          />{" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="text-[18.64px] font-medium"
                          >
                            {" "}
                            Urgent{" "}
                          </Text>{" "}
                        </div>{" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <Img
                            src="images/img_home.svg"
                            alt="Home"
                            className="h-[24px]"
                          />{" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="text-[18.64px] font-medium"
                          >
                            {" "}
                            Last 48 Hours / 1 Week{" "}
                          </Text>{" "}
                        </div>{" "}
                        <div className="flex items-center justify-center gap-3.5">
                          {" "}
                          <Img
                            src="images/img_home.svg"
                            alt="Home"
                            className="h-[24px]"
                          />{" "}
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            {" "}
                            <Text
                              size="text2xl"
                              as="p"
                              className="text-[18.64px] font-medium"
                            >
                              {" "}
                              Refurbished Devices With{" "}
                            </Text>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <Img
                            src="images/img_floating_icon.svg"
                            alt="Floatingicon"
                            className="h-[24px]"
                          />{" "}
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            {" "}
                            <Text
                              size="text2xl"
                              as="p"
                              className="text-[18.64px] font-medium"
                            >
                              {" "}
                              Auto360{" "}
                            </Text>{" "}
                          </a>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="mt-5 flex self-stretch">
                        {" "}
                        <Text
                          size="textlg"
                          as="p"
                          className="self-end !font-manrope text-[15px] font-normal"
                        >
                          {" "}
                          Auto Expertise{" "}
                        </Text>{" "}
                      </div>
                      <div className="mt-5 flex flex-col gap-5 self-stretch">
                        {" "}
                        <div className="flex items-center gap-[15px]">
                          {" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="!font-manrope text-[18.64px] font-normal"
                          >
                            {" "}
                            Show All{" "}
                          </Text>{" "}
                          <Img
                            src="images/img_frame_primary_colors_900_18x18.svg"
                            alt="Image"
                            className="h-[20px]"
                          />{" "}
                        </div>{" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <Img
                            src="images/img_home.svg"
                            alt="Home"
                            className="h-[24px]"
                          />{" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="text-[18.64px] font-medium"
                          >
                            {" "}
                            Real Estate360{" "}
                          </Text>{" "}
                        </div>{" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <Img
                            src="images/img_home.svg"
                            alt="Home Ten"
                            className="h-[24px]"
                          />{" "}
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            {" "}
                            <Text
                              size="text2xl"
                              as="p"
                              className="text-[18.64px] font-medium"
                            >
                              {" "}
                              <span>Real Estate</span>{" "}
                              <span className="text-[12px]">(766986)</span>{" "}
                            </Text>{" "}
                          </a>{" "}
                        </div>{" "}
                        <div className="flex">
                          {" "}
                          <Text
                            as="p"
                            className="!font-manrope text-[16.73px] font-normal"
                          >
                            {" "}
                            <span className="text-[15px]">Housing</span>{" "}
                            <span className="text-[12px]">(766986)</span>{" "}
                          </Text>{" "}
                        </div>{" "}
                        <div className="flex">
                          {" "}
                          <Text
                            as="p"
                            className="!font-manrope text-[16.73px] font-normal"
                          >
                            {" "}
                            <span className="text-[15px]">Workplace</span>{" "}
                            <span className="text-[12px]">(766986)</span>{" "}
                          </Text>{" "}
                        </div>{" "}
                        <div className="flex">
                          {" "}
                          <Text
                            as="p"
                            className="!font-manrope text-[16.73px] font-normal"
                          >
                            {" "}
                            <span className="text-[15px]">Land</span>{" "}
                            <span className="text-[12px]">(766986)</span>{" "}
                          </Text>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="mt-5 flex self-stretch">
                        {" "}
                        <Text
                          size="textlg"
                          as="p"
                          className="self-end !font-manrope text-[15px] font-normal"
                        >
                          {" "}
                          <span>Housing Projects</span>{" "}
                          <span className="text-[12px]">(766986)</span>{" "}
                        </Text>{" "}
                      </div>{" "}
                      <div className="mt-5 flex items-center gap-[15px] self-stretch">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="!font-manrope text-[18.64px] font-normal"
                        >
                          {" "}
                          Show All{" "}
                        </Text>{" "}
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Image"
                          className="h-[20px]"
                        />{" "}
                      </div>{" "}
                    </div>
                    <div className="h-[196px] w-[5px] bg-primary_colors-900" />{" "}
                  </div>{" "}
                  <div className="flex flex-col items-start gap-5">
                    {" "}
                    <div className="flex items-center gap-4 self-stretch">
                      {" "}
                      <Img
                        src="images/img_car.svg"
                        alt="Car"
                        className="h-[24px]"
                      />{" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="text-[18.64px] font-medium"
                      >
                        {" "}
                        <span>Vehicle</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <div className="flex self-stretch">
                      {" "}
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        {" "}
                        <Text
                          as="p"
                          className="!font-manrope text-[16.73px] font-normal"
                        >
                          {" "}
                          <span className="text-[15px]">Cars</span>{" "}
                          <span className="text-[12px]">(766986)</span>{" "}
                        </Text>{" "}
                      </a>{" "}
                    </div>{" "}
                    <div className="flex self-stretch">
                      {" "}
                      <Text
                        as="p"
                        className="!font-manrope text-[16.73px] font-normal"
                      >
                        {" "}
                        <span className="text-[15px]">Off-Road</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <div className="flex self-stretch">
                      {" "}
                      <Text
                        as="p"
                        className="!font-manrope text-[16.73px] font-normal"
                      >
                        {" "}
                        <span className="text-[15px]">Motorcycle</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <div className="flex self-stretch">
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="self-end !font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Minivan & Panel Van</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="!font-manrope text-[15px] font-normal"
                    >
                      {" "}
                      <span>Commercial Vehicles</span>{" "}
                      <span className="text-[12px]">(766986)</span>{" "}
                    </Text>{" "}
                    <div className="flex self-stretch">
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Electric Vehicles</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <div className="flex self-stretch">
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Rental Cars</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>
                    <div className="flex self-stretch">
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Marine Vehicles</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="!font-manrope text-[15px] font-normal"
                    >
                      {" "}
                      <span>Damaged Vehicles</span>{" "}
                      <span className="text-[12px]">(766986)</span>{" "}
                    </Text>{" "}
                    <div className="flex items-center gap-[15px] self-stretch">
                      {" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="!font-manrope text-[18.64px] font-normal"
                      >
                        {" "}
                        Show All{" "}
                      </Text>{" "}
                      <Img
                        src="images/img_frame_primary_colors_900_18x18.svg"
                        alt="Image"
                        className="h-[20px]"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col items-start gap-5">
                  {" "}
                  <div className="flex items-center gap-3.5 self-stretch">
                    {" "}
                    <Img
                      src="images/img_frame.svg"
                      alt="Image"
                      className="h-[24px]"
                    />{" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="w-[90%] text-[18.64px] font-medium leading-[27px]"
                    >
                      {" "}
                      <span>Spare Parts, Accessories</span>{" "}
                      <span className="text-[12px]">(766986)</span>{" "}
                    </Text>{" "}
                  </div>{" "}
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">
                      Automotive Equipment
                    </span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>{" "}
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">
                      Motorcycle Equipment
                    </span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>{" "}
                  <div className="flex self-stretch">
                    {" "}
                    <Text
                      as="p"
                      className="!font-manrope text-[16.73px] font-normal"
                    >
                      {" "}
                      <span className="text-[15px]">Marine Equipment</span>{" "}
                      <span className="text-[12px]">(766986)</span>{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col items-start gap-5">
                  {" "}
                  <div className="flex items-center gap-2.5 self-stretch">
                    {" "}
                    <Img
                      src="images/img_television.svg"
                      alt="Television"
                      className="h-[24px]"
                    />{" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="w-[90%] text-[18.64px] font-medium leading-[27px]"
                    >
                      {" "}
                      <span>Second Hand and New Shop</span>{" "}
                      <span className="text-[12px]">(766986)</span>{" "}
                    </Text>{" "}
                  </div>{" "}
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">Computer</span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">
                      Mobile Phone & Accessories
                    </span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>{" "}
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">Photo & Camera</span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>{" "}
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">Home Decoration</span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>{" "}
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">Home Electronics</span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>{" "}
                  <Text
                    as="p"
                    className="!font-manrope text-[16.73px] font-normal"
                  >
                    {" "}
                    <span className="text-[15px]">
                      Electrical Appliances
                    </span>{" "}
                    <span className="text-[12px]">(766986)</span>{" "}
                  </Text>{" "}
                  <div className="flex items-center gap-[15px] self-stretch">
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="!font-manrope text-[18.64px] font-normal"
                    >
                      {" "}
                      Show All{" "}
                    </Text>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[20px]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="mb-2.5 flex flex-col items-start justify-center gap-6">
                    {" "}
                    <div className="flex items-center gap-4 self-stretch">
                      {" "}
                      <Img
                        src="images/img_car.svg"
                        alt="Car"
                        className="h-[24px]"
                      />{" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="text-[18.64px] font-medium"
                      >
                        {" "}
                        <span>Brand New</span>{" "}
                        <span className="text-[12px]">(766986)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <Text
                      size="texts"
                      as="p"
                      className="!font-manrope text-[12px] font-normal"
                    >
                      {" "}
                      Brand new technological Devices(76){" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col items-start justify-center gap-[26px]">
                  {" "}
                  <div className="flex items-center gap-3.5 self-stretch">
                    {" "}
                    <Img
                      src="images/img_television_yellow_600.svg"
                      alt="Television"
                      className="h-[24px]"
                    />{" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="w-[90%] text-[18.64px] font-medium leading-[27px]"
                    >
                      {" "}
                      <span>Construction Machinery</span>{" "}
                      <span className="text-[12px]">(766986)&nbsp;</span>{" "}
                    </Text>{" "}
                  </div>{" "}
                  <Text
                    size="texts"
                    as="p"
                    className="!font-manrope text-[12px] font-normal"
                  >
                    {" "}
                    Construction Machinery(766986){" "}
                  </Text>
                  <Text
                    size="texts"
                    as="p"
                    className="!font-manrope text-[12px] font-normal"
                  >
                    {" "}
                    Agricultural Machinery(766986){" "}
                  </Text>{" "}
                  <Text
                    size="texts"
                    as="p"
                    className="!font-manrope text-[12px] font-normal"
                  >
                    {" "}
                    Electricity & Energy(766986){" "}
                  </Text>{" "}
                </div>{" "}
                <div className="flex flex-col items-start gap-[22px]">
                  {" "}
                  <div className="flex items-center gap-3.5 self-stretch">
                    {" "}
                    <Img
                      src="images/img_frame_deep_orange_100_02.svg"
                      alt="Image"
                      className="h-[24px]"
                    />{" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="w-[90%] text-[18.64px] font-medium leading-[27px]"
                    >
                      {" "}
                      <span>Craftsmen & Services</span>{" "}
                      <span className="text-[12px]">(766986)</span>{" "}
                    </Text>{" "}
                  </div>{" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="!font-manrope text-[15px] font-normal"
                  >
                    {" "}
                    Home Renovation & Decoration{" "}
                  </Text>{" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="!font-manrope text-[15px] font-normal"
                  >
                    {" "}
                    Vehicle Service & Maintenance{" "}
                  </Text>{" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="!font-manrope text-[15px] font-normal"
                  >
                    {" "}
                    Repair & Technical Service{" "}
                  </Text>{" "}
                  <div className="flex items-center gap-[15px] self-stretch">
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="!font-manrope text-[18.64px] font-normal"
                    >
                      {" "}
                      Show All{" "}
                    </Text>{" "}
                    <Img
                      src="images/img_frame_primary_colors_900_18x18.svg"
                      alt="Image"
                      className="h-[20px]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <div className="flex flex-col gap-4">
                    {" "}
                    <div className="flex flex-col items-start gap-[22px]">
                      {" "}
                      <div className="flex items-center gap-4 self-stretch">
                        {" "}
                        <Img
                          src="images/img_frame_blue_gray_800_04.svg"
                          alt="Image Ten"
                          className="h-[24px]"
                        />{" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="text-[18.64px] font-medium"
                        >
                          {" "}
                          <span>Private Tutors</span>{" "}
                          <span className="text-[12px]">(766986)</span>{" "}
                        </Text>{" "}
                      </div>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>High School and College</span>{" "}
                        <span className="text-[12px]">(56)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Primary & Secondary School</span>{" "}
                        <span className="text-[12px]">(67)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Foreign Language</span>{" "}
                        <span className="text-[12px]">(78)</span>{" "}
                      </Text>
                      <div className="flex items-center gap-[15px] self-stretch">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="!font-manrope text-[18.64px] font-normal"
                        >
                          {" "}
                          Show All{" "}
                        </Text>{" "}
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Image Eleven"
                          className="h-[20px]"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="mb-[194px] flex flex-col items-start gap-[22px]">
                      {" "}
                      <div className="flex items-center gap-4 self-stretch">
                        {" "}
                        <Img
                          src="images/img_settings.svg"
                          alt="Settings"
                          className="h-[24px]"
                        />{" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="text-[18.64px] font-medium"
                        >
                          {" "}
                          <span>Job Postings</span>{" "}
                          <span className="text-[12px]">(766986)</span>{" "}
                        </Text>{" "}
                      </div>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Advocacy & Legal Consultancy</span>{" "}
                        <span className="text-[12px]">(56)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Education</span>{" "}
                        <span className="text-[12px]">(67)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Fun & Activities</span>{" "}
                        <span className="text-[12px]">(78)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Beauty & Care</span>{" "}
                        <span className="text-[12px]">(99)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>IT & Software Development</span>{" "}
                        <span className="text-[12px]">(74)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Human Resources</span>{" "}
                        <span className="text-[12px]">(74)</span>{" "}
                      </Text>{" "}
                      <div className="flex items-center gap-[15px] self-stretch">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="!font-manrope text-[18.64px] font-normal"
                        >
                          {" "}
                          Show All{" "}
                        </Text>{" "}
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Image Twelve"
                          className="h-[20px]"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <div className="relative mt-[-174px] flex flex-col items-start gap-6">
                    {" "}
                    <div className="flex flex-col items-start gap-[22px] self-stretch">
                      {" "}
                      <div className="flex items-center gap-4 self-stretch">
                        {" "}
                        <Img
                          src="images/img_mail.svg"
                          alt="Mail"
                          className="h-[24px]"
                        />{" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="text-[18.64px] font-medium"
                        >
                          {" "}
                          <span>Animal Kingdom</span>{" "}
                          <span className="text-[12px]">(766986)</span>{" "}
                        </Text>{" "}
                      </div>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Pets</span>{" "}
                        <span className="text-[12px]">(56)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Aquarium Fish</span>{" "}
                        <span className="text-[12px]">(67)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Accessories</span>{" "}
                        <span className="text-[12px]">(78)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Care Products</span>{" "}
                        <span className="text-[12px]">(99)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Food & Feed</span>{" "}
                        <span className="text-[12px]">(74)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Poultry</span>{" "}
                        <span className="text-[12px]">(74)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Cattle</span>{" "}
                        <span className="text-[12px]">(74)</span>{" "}
                      </Text>{" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="!font-manrope text-[15px] font-normal"
                      >
                        {" "}
                        <span>Small Livestock</span>{" "}
                        <span className="text-[12px]">(74)</span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <Text
                      size="texts"
                      as="p"
                      className="!font-manrope text-[12px] font-normal"
                    >
                      {" "}
                      Marine Creatures(74){" "}
                    </Text>{" "}
                    <div className="flex items-center gap-[15px] self-stretch">
                      {" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="!font-manrope text-[18.64px] font-normal"
                      >
                        {" "}
                        Show All{" "}
                      </Text>
                      <Img
                        src="images/img_frame_primary_colors_900_18x18.svg"
                        alt="Image Thirteen"
                        className="h-[20px]"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mb-[98px] flex flex-col justify-center gap-[22px]">
                  {" "}
                  <div className="flex items-center gap-4">
                    {" "}
                    <Img
                      src="images/img_television_black_900_01.svg"
                      alt="Television"
                      className="h-[24px]"
                    />{" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="text-[18.64px] font-medium"
                    >
                      {" "}
                      <span>Help Seekers</span>{" "}
                      <span className="text-[12px]">(766986)</span>{" "}
                    </Text>{" "}
                  </div>{" "}
                  <CheckBox
                    name="babysitternanny"
                    label="Babysitter & Nanny(56)"
                    id="babysitternanny"
                    className="gap-3.5 font-manrope text-[15px] text-black-0"
                  />{" "}
                  <CheckBox
                    name="checkbox"
                    label="Elderly & Patient Caregiver(67)"
                    id="checkbox"
                    className="gap-3.5 font-manrope text-[15px] text-black-0"
                  />{" "}
                  <CheckBox
                    name="checkbox_one"
                    label="Cleaner & Housekeeper(78)"
                    id="checkboxone"
                    className="gap-3.5 font-manrope text-[15px] text-black-0"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-1 flex-col items-center gap-10 md:self-stretch">
                {" "}
                <Heading
                  size="heading6xl"
                  as="h2"
                  className="text-[40px] font-bold uppercase !text-black-0 md:text-[38px] sm:text-[36px]"
                >
                  {" "}
                  All products{" "}
                </Heading>{" "}
                <div className="ml-[52px] grid grid-cols-3 gap-10 gap-y-10 self-stretch md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                  {" "}
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {" "}
                    {data.map((d, index) => (
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        {" "}
                        <HomeCard {...d} key={"home" + index} />{" "}
                      </a>
                    ))}{" "}
                  </Suspense>{" "}
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="self-stretch">
            {" "}
            <Home1Column /> <Home1Listrealestate3 />{" "}
            <div className="relative ml-5 mt-32 h-[556px] content-center md:ml-0 md:h-auto">
              {" "}
              <Home1Columnourcustom />{" "}
              <div className="absolute bottom-[19%] left-0 right-0 mx-[118px] flex flex-1 gap-[15px] md:mx-0">
                {" "}
                <Button
                  color="deep_purple_A700_19"
                  size="3xl"
                  variant="fill"
                  shape="circle"
                  className="w-[52px] rotate-[-180deg] rounded-[26px] px-3.5"
                >
                  {" "}
                  <Img src="images/img_arrow01_svg.svg" />{" "}
                </Button>{" "}
                <Button
                  color="primary_colors_900"
                  size="3xl"
                  variant="fill"
                  shape="circle"
                  className="w-[52px] rounded-[26px] px-3.5"
                >
                  {" "}
                  <Img src="images/img_arrow01_svg_white.svg" />{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-20 flex flex-col gap-20 md:gap-[60px] sm:gap-10">
              {" "}
              <Home1Stackaboutus /> <Home1ColumnOne />{" "}
            </div>{" "}
            <Home1ColumnTwo />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
